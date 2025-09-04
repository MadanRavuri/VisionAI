import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create SMTP transporter
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_EMAIL,
    pass: process.env.BREVO_API_KEY,
  },
});

const COMPANY_INBOX = process.env.COMPANY_EMAIL || 'noreply.visionai@gmail.com';

// Send contact form email
export const sendContactEmail = async ({ name, email, subject, message }) => {
  try {
    const mailOptions = {
      from: process.env.BREVO_EMAIL,
      to: COMPANY_INBOX,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3B82F6;">New Contact Form Submission</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
            <p style="color: #666; font-size: 14px;">
              This email was sent from the VisionAI contact form.
            </p>
          </div>
        </div>
      `,
    };

    // Send confirmation email to user
    const confirmationOptions = {
      from: process.env.BREVO_EMAIL,
      to: email,
      subject: 'Thank you for contacting VisionAI',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3B82F6;">Thank You for Contacting VisionAI</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to us. We've received your message and will get back to you within 24 hours.</p>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Your Message</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p>Best regards,<br>The VisionAI Team</p>
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(confirmationOptions),
    ]);

    console.log('Contact emails sent successfully');
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
};

// Send job application email
export const sendJobApplicationEmail = async ({ name, email, phone, position, message, resumeFilename }) => {
  try {
    const mailOptions = {
      from: process.env.BREVO_EMAIL,
      to: COMPANY_INBOX,
      subject: `Job Application: ${position}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3B82F6;">New Job Application</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Applicant Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Position:</strong> ${position}</p>
            <p><strong>Resume:</strong> ${resumeFilename}</p>
          </div>
          ${message ? `
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Cover Letter</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          ` : ''}
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
            <p style="color: #666; font-size: 14px;">
              This email was sent from the VisionAI careers page.
            </p>
          </div>
        </div>
      `,
    };

    // Send confirmation email to applicant
    const confirmationOptions = {
      from: process.env.BREVO_EMAIL,
      to: email,
      subject: 'Application Received - VisionAI',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3B82F6;">Application Received</h2>
          <p>Dear ${name},</p>
          <p>Thank you for your interest in the <strong>${position}</strong> position at VisionAI.</p>
          <p>We've received your application and will review it carefully. Our team will contact you within 2-3 business days if your qualifications match our requirements.</p>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Application Summary</h3>
            <p><strong>Position:</strong> ${position}</p>
            <p><strong>Resume:</strong> ${resumeFilename}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleDateString()}</p>
          </div>
          <p>Best regards,<br>The VisionAI Recruitment Team</p>
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(confirmationOptions),
    ]);

    console.log('Job application emails sent successfully');
  } catch (error) {
    console.error('Error sending job application email:', error);
    throw error;
  }
};