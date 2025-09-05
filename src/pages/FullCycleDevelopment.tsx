import React from 'react';
import { Link } from 'react-router-dom';


const FullCycleDevelopment: React.FC = () => (
  <div className="pt-20">
    <section className="relative py-24 min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-500 to-indigo-600 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/60 to-indigo-900/80"></div>
        <div className="absolute left-1/4 top-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-400 opacity-30 blur-2xl"></div>
        <div className="absolute right-1/4 bottom-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-indigo-400 opacity-20 blur-2xl"></div>
      </div>
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6">Full Cycle Development</h1>
        <p className="text-2xl text-white/90 mb-4 font-medium">End-to-End Development Solutions</p>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Our full-cycle development services cover every aspect of software development, ensuring seamless delivery of high-quality solutions.
        </p>
        <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg text-lg">
          Learn More <span className="ml-2">→</span>
        </Link>
      </div>
    </section>

  {/* Features Section */}
  <section className="py-16 bg-gradient-to-br from-white via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Explore the core features of our Full Cycle Development services</p>
        </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-3d-hover border border-indigo-100 dark:border-indigo-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">End-to-End Development</h3>
            <p className="text-gray-600 dark:text-gray-300">Complete software development lifecycle from concept to deployment and maintenance.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-3d-hover border border-blue-100 dark:border-blue-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Architecture Design</h3>
            <p className="text-gray-600 dark:text-gray-300">Scalable and robust system architecture designed for future growth and flexibility.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-3d-hover border border-purple-100 dark:border-purple-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI Integration</h3>
            <p className="text-gray-600 dark:text-gray-300">Seamless integration of artificial intelligence and machine learning capabilities.</p>
          </div>
        </div>
      </div>
    </section>

  {/* Why Choose Us Section */}
  <section className="py-16 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Our Full Cycle Development?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Experience the advantages of our comprehensive development approach</p>
        </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-3d-hover border border-indigo-100 dark:border-indigo-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Strategic Planning</h3>
            <p className="text-gray-600 dark:text-gray-300">Comprehensive project planning and resource allocation for optimal results.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-3d-hover border border-blue-100 dark:border-blue-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Agile Development</h3>
            <p className="text-gray-600 dark:text-gray-300">Flexible and iterative development process ensuring timely delivery.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-3d-hover border border-purple-100 dark:border-purple-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Expert Team</h3>
            <p className="text-gray-600 dark:text-gray-300">Skilled professionals with extensive experience in full-cycle development.</p>
          </div>
        </div>
      </div>
    </section>

  {/* Our Development Process Section */}
  <section className="py-16 bg-gradient-to-br from-white via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Development Process</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">A systematic approach to delivering high-quality software solutions</p>
        </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-3d-hover border border-indigo-100 dark:border-indigo-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Planning & Design</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
              <li>Requirements gathering and analysis</li>
              <li>System architecture design</li>
              <li>Technology stack selection</li>
              <li>Project timeline and resource planning</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-3d-hover border border-blue-100 dark:border-blue-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Development & Deployment</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
              <li>Agile development methodology</li>
              <li>Continuous integration and testing</li>
              <li>Quality assurance and optimization</li>
              <li>Deployment and maintenance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  {/* CTA Section */}
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
      <div className="absolute top-10 left-10 float-3d opacity-20">
        <div className="w-24 h-24 bg-white/20 rounded-lg rotate-3d"></div>
      </div>
      <div className="absolute bottom-10 right-10 sphere-3d opacity-30">
        <div className="w-32 h-32 bg-white/20 rounded-full"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
        <p className="text-xl text-blue-100 mb-8">Contact us today to discuss your development needs and discover how we can help bring your vision to life.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold">
            Contact Us Today
          </Link>
          <Link to="/services" className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default FullCycleDevelopment;
