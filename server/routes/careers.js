import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import JobApplication from '../models/JobApplication.js';
import { sendJobApplicationEmail } from '../utils/emailService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dest = path.resolve(__dirname, '..', 'uploads', 'resumes');
    cb(null, dest);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'resume-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed'));
    }
  }
});

// Submit job application
router.post('/', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, phone, position, message } = req.body;

    // Validate required fields
    if (!name || !email || !position || !req.file) {
      return res.status(400).json({ 
        message: 'Name, email, position, and resume are required' 
      });
    }

    // Create new job application
    const jobApplication = new JobApplication({
      name,
      email,
      phone,
      position,
      message,
      resumeFilename: req.file.filename,
      resumePath: req.file.path,
    });

    await jobApplication.save();

    // Send email notification
    try {
      await sendJobApplicationEmail({
        name,
        email,
        phone,
        position,
        message,
        resumeFilename: req.file.filename,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({ 
      message: 'Job application submitted successfully',
      id: jobApplication._id 
    });

  } catch (error) {
    console.error('Job application submission error:', error);
    res.status(500).json({ 
      message: 'Error submitting job application' 
    });
  }
});

// Get all job applications (for admin purposes)
router.get('/', async (req, res) => {
  try {
    const applications = await JobApplication.find()
      .sort({ createdAt: -1 })
      .limit(50);

    res.json(applications);
  } catch (error) {
    console.error('Error fetching job applications:', error);
    res.status(500).json({ 
      message: 'Error fetching job applications' 
    });
  }
});

// Update application status
router.patch('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['submitted', 'reviewing', 'interview', 'rejected', 'hired'].includes(status)) {
      return res.status(400).json({ 
        message: 'Invalid status value' 
      });
    }

    const application = await JobApplication.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!application) {
      return res.status(404).json({ 
        message: 'Job application not found' 
      });
    }

    res.json(application);
  } catch (error) {
    console.error('Error updating application status:', error);
    res.status(500).json({ 
      message: 'Error updating application status' 
    });
  }
});

export default router;