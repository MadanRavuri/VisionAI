import React from 'react';
import { Link } from 'react-router-dom';


const BotVision: React.FC = () => (
  <div className="pt-20">
    <section className="relative py-24 min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-500 to-indigo-600 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/60 to-indigo-900/80"></div>
        <div className="absolute left-1/4 top-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-400 opacity-30 blur-2xl"></div>
        <div className="absolute right-1/4 bottom-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-indigo-400 opacity-20 blur-2xl"></div>
      </div>
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6">BOT Vision</h1>
        <p className="text-2xl text-white/90 mb-4 font-medium">Comprehensive BOT Vision Solutions</p>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Our BOT Vision services combine the strategic advantages of the Build-Operate-Transfer model with cutting-edge robotic vision technology, delivering comprehensive solutions for modern businesses.
        </p>
        <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg text-lg">
          Learn More <span className="ml-2">→</span>
        </Link>
      </div>
    </section>

  {/* Features Section */}
  <section className="py-16 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Explore the core features of our BOT Vision services</p>
        </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-3d-hover border border-blue-100 dark:border-blue-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Build-Operate-Transfer Model</h3>
            <p className="text-gray-600 dark:text-gray-300">Strategic approach for seamless project development and handover, ensuring smooth transition and knowledge transfer.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-3d-hover border border-purple-100 dark:border-purple-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Robotic Vision Systems</h3>
            <p className="text-gray-600 dark:text-gray-300">Advanced computer vision integration enabling robots to perceive and interpret their environment with high precision.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-3d-hover border border-indigo-100 dark:border-indigo-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI-Powered Automation</h3>
            <p className="text-gray-600 dark:text-gray-300">Cutting-edge artificial intelligence solutions for automated decision-making and process optimization.</p>
          </div>
        </div>
      </div>
    </section>

  {/* Why Choose Us Section */}
  <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Our BOT Vision Services?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Experience the advantages of our comprehensive BOT Vision solutions</p>
        </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-3d-hover border border-blue-100 dark:border-blue-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Risk Mitigation</h3>
            <p className="text-gray-600 dark:text-gray-300">Third-party vendors assume initial risks during development and operation phases.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-3d-hover border border-purple-100 dark:border-purple-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Accelerated Development</h3>
            <p className="text-gray-600 dark:text-gray-300">Leverage specialized expertise to speed up development and deployment processes.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-3d-hover border border-indigo-100 dark:border-indigo-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Access to Expertise</h3>
            <p className="text-gray-600 dark:text-gray-300">Gain access to domain expertise and specialized skills not available in-house.</p>
          </div>
        </div>
      </div>
    </section>

  {/* Technical Expertise Section */}
  <section className="py-16 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technical Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Our team of expert engineers brings extensive experience in both BOT model implementation and robotic vision systems.</p>
        </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-3d-hover border border-blue-100 dark:border-blue-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">BOT Model Implementation</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
              <li>Strategic project planning and execution</li>
              <li>Knowledge transfer and documentation</li>
              <li>Quality assurance and testing</li>
              <li>Project management and coordination</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-3d-hover border border-purple-100 dark:border-purple-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Robotic Vision Systems</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
              <li>Computer vision algorithm development</li>
              <li>Machine learning model integration</li>
              <li>Sensor fusion and data processing</li>
              <li>Real-time vision system optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  {/* CTA Section */}
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      <div className="absolute top-10 left-10 float-3d opacity-20">
        <div className="w-24 h-24 bg-white/20 rounded-lg rotate-3d"></div>
      </div>
      <div className="absolute bottom-10 right-10 sphere-3d opacity-30">
        <div className="w-32 h-32 bg-white/20 rounded-full"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-blue-100 mb-8">Contact us today to discuss how our BOT Vision solutions can help your organization achieve its goals.</p>
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

export default BotVision;
