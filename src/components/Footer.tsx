import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-blue-400 pulse-3d" />
              <span className="text-xl font-bold">VisionAI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming businesses through intelligent AI solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 shadow-3d-hover">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 shadow-3d-hover">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 shadow-3d-hover">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-all duration-300">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-all duration-300">Services</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-all duration-300">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-all duration-300">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">AI Business Consulting</span></li>
              <li><span className="text-gray-400">Predictive Analytics</span></li>
              <li><span className="text-gray-400">Digital Transformation</span></li>
              <li><span className="text-gray-400">Machine Learning Solutions</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-gray-400">hello@visionai.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-gray-400">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 VisionAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;