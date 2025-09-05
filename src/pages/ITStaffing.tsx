import React from 'react';
import { Link } from 'react-router-dom';


const ITStaffing: React.FC = () => (
  <div className="pt-20">
    <section className="relative py-24 min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-500 to-indigo-600 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/60 to-indigo-900/80"></div>
        <div className="absolute left-1/4 top-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-400 opacity-30 blur-2xl"></div>
        <div className="absolute right-1/4 bottom-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-indigo-400 opacity-20 blur-2xl"></div>
      </div>
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6">IT Staffing Solutions</h1>
        <p className="text-2xl text-white/90 mb-4 font-medium">Comprehensive IT Staffing Services</p>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          We specialize in connecting top IT talent with leading companies, offering flexible staffing solutions that drive innovation and growth.
        </p>
        <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg text-lg">
          Learn More <span className="ml-2">→</span>
        </Link>
      </div>
    </section>

  {/* Features Section */}
  <section className="py-16 bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Explore the core features of our IT Staffing services</p>
        </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-3d-hover border border-purple-100 dark:border-purple-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Permanent Staffing</h3>
            <p className="text-gray-600 dark:text-gray-300">Find the perfect long-term addition to your team with our comprehensive permanent staffing solutions.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-3d-hover border border-blue-100 dark:border-blue-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contract Staffing</h3>
            <p className="text-gray-600 dark:text-gray-300">Flexible contract-based staffing solutions to meet your project-specific needs and timelines.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-3d-hover border border-indigo-100 dark:border-indigo-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Global Talent Pool</h3>
            <p className="text-gray-600 dark:text-gray-300">Access a diverse network of skilled IT professionals from around the world.</p>
          </div>
        </div>
      </div>
    </section>

  {/* Why Choose Us Section */}
  <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Our IT Staffing Services?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Experience the advantages of our comprehensive IT staffing solutions</p>
        </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-3d-hover border border-purple-100 dark:border-purple-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Precision Matching</h3>
            <p className="text-gray-600 dark:text-gray-300">Our advanced matching algorithms ensure the perfect fit for your technical requirements and company culture.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-3d-hover border border-blue-100 dark:border-blue-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quality Assurance</h3>
            <p className="text-gray-600 dark:text-gray-300">Rigorous screening and verification processes to ensure you get only the best talent.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-3d-hover border border-indigo-100 dark:border-indigo-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quick Turnaround</h3>
            <p className="text-gray-600 dark:text-gray-300">Fast recruitment process without compromising on quality or fit.</p>
          </div>
        </div>
      </div>
    </section>

  {/* Our Expertise Section */}
  <section className="py-16 bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">We specialize in recruiting for a wide range of IT roles and technologies.</p>
        </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-3d-hover border border-purple-100 dark:border-purple-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technical Roles</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
              <li>Software Developers & Engineers</li>
              <li>DevOps & Cloud Specialists</li>
              <li>Data Scientists & Analysts</li>
              <li>Cybersecurity Experts</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-3d-hover border border-blue-100 dark:border-blue-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technologies</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
              <li>Cloud Platforms (AWS, Azure, GCP)</li>
              <li>Programming Languages & Frameworks</li>
              <li>AI & Machine Learning</li>
              <li>Enterprise Software Solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  {/* CTA Section */}
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
      <div className="absolute top-10 left-10 float-3d opacity-20">
        <div className="w-24 h-24 bg-white/20 rounded-lg rotate-3d"></div>
      </div>
      <div className="absolute bottom-10 right-10 sphere-3d opacity-30">
        <div className="w-32 h-32 bg-white/20 rounded-full"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Your Dream Team?</h2>
        <p className="text-xl text-blue-100 mb-8">Contact us today to discuss your IT staffing needs and discover how we can help you find the perfect talent.</p>
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

export default ITStaffing;
