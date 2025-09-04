import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, TrendingUp, Shield, Zap, CheckCircle, Play } from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    { icon: Brain, title: 'AI Business Consulting', description: 'Strategic guidance to integrate AI into your business operations and drive growth.' },
    { icon: TrendingUp, title: 'Predictive Analytics', description: 'Harness data to predict trends and make informed decisions.' },
    { icon: Shield, title: 'AI-Powered Security', description: 'Advanced security using ML to protect your digital assets.' },
    { icon: Zap, title: 'Digital Transformation', description: 'Modernize your business processes with end-to-end transformation.' },
  ];

  const globalPartners = [
    { name: 'Microsoft Azure', description: 'Cloud AI Platform', logo: 'M' },
    { name: 'Google Cloud AI', description: 'Machine Learning Services', logo: 'G' },
    { name: 'Amazon AWS', description: 'AI & ML Solutions', logo: 'A' },
    { name: 'IBM Watson', description: 'Enterprise AI', logo: 'I' },
    { name: 'NVIDIA', description: 'AI Computing', logo: 'N' },
    { name: 'Salesforce', description: 'CRM AI Solutions', logo: 'S' },
    { name: 'OpenAI', description: 'Advanced AI Models', logo: 'O' },
    { name: 'Databricks', description: 'Data & AI Platform', logo: 'D' },
  ];

  const renderAnimatedText = (text: string) => {
    return (
      <span className="stagger-letters">
        {Array.from(text).map((ch, idx) => (
          <span
            key={`${ch}-${idx}`}
            className="char"
            style={{ ['--d' as any]: idx }}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        ))}
      </span>
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* --- HERO SECTION START --- */}
      <section className="relative min-h-screen overflow-hidden bg-black">
        <video
          src="/home.mov"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>
          <div className="absolute -inset-x-10 -inset-y-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.25),transparent_60%)]"></div>
        </div>
        <div className="relative z-10 px-4 md:px-16 py-24 flex items-center justify-center text-center min-h-screen">
          <div className="max-w-3xl slide-in-once slide-delay-200">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 heading-zoom">
                WELCOME TO VISION AI
              </h1>
            </div>
            <p className="text-base md:text-lg text-blue-100 mb-8 max-w-2xl mx-auto sub-wipe slide-delay-400">
              Intelligence in sight. We craft AI experiences that are fast, reliable, and human‑centered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-lg hover:from-cyan-500 hover:to-blue-700 transition-all duration-200 shadow-3d-hover">
                Explore Services
              </a>
              <a href="/careers" className="inline-flex items-center px-8 py-4 glass text-white rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/25">
                Join Us
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* --- HERO SECTION END --- */}

      {/* Video Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 reveal reveal-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              See VisionAI in Action
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover how our AI solutions are transforming businesses across industries. 
              Watch our latest showcase of cutting-edge AI implementations.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto reveal reveal-up reveal-delay-1">
            <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl overflow-hidden shadow-3d-hover holographic-overlay">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="VisionAI Video Thumbnail"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group relative">
                  <div className="w-20 h-20 glass rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                    <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-white/30 pulse-3d"></div>
                </button>
              </div>
              
              {/* Video Info */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">VisionAI: Transforming Business with AI</h3>
                <p className="text-sm text-gray-200">Duration: 3:45 | Watch how we're revolutionizing industries</p>
              </div>
            </div>
            
            {/* Video Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-3d-hover">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-300">AI Projects Delivered</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-3d-hover reveal reveal-up reveal-delay-2">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">98%</div>
                <div className="text-gray-600 dark:text-gray-300">Client Satisfaction Rate</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-3d-hover reveal reveal-up reveal-delay-3">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">$50M+</div>
                <div className="text-gray-600 dark:text-gray-300">Value Generated for Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About VisionAI Section */}
      <section className="py-24 bg-white dark:bg-gray-900 reveal reveal-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About VisionAI
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're a team of AI experts, data scientists, and business strategists dedicated to 
              helping companies unlock the full potential of artificial intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 card-3d reveal reveal-up">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 pulse-3d">
                <CheckCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Proven Results</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Over 500 successful AI implementations with measurable ROI improvements.
              </p>
            </div>
            
            <div className="text-center p-6 card-3d reveal reveal-up reveal-delay-2">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 pulse-3d">
                <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Expert Team</h3>
              <p className="text-gray-600 dark:text-gray-300">
                World-class AI researchers and industry veterans with decades of experience.
              </p>
            </div>
            
            <div className="text-center p-6 card-3d reveal reveal-up reveal-delay-3">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 pulse-3d">
                <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Cutting-Edge Tech</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Latest AI technologies and frameworks to deliver state-of-the-art solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 reveal reveal-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`service-card rounded-xl p-6 shadow-3d-hover reveal reveal-up reveal-delay-${(index % 4) + 1}`}>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 float-3d">
                  <service.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* View all services CTA */}
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-3d-hover"
            >
              View all services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Global Partners Section */}
      <section className="py-24 bg-white dark:bg-gray-900 reveal reveal-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Global Partners
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We collaborate with leading technology companies to deliver world-class AI solutions 
              that drive innovation and business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalPartners.map((partner, index) => (
              <div key={index} className={`group relative bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-3d-hover border border-gray-100 dark:border-gray-600 reveal reveal-up reveal-delay-${(index % 4) + 1}`}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg float-3d">
                    {partner.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                      {partner.name}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Partnership CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Interested in partnering with VisionAI?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-3d-hover"
            >
              Become a Partner
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 reveal reveal-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Be part of a revolutionary team that's shaping the future of AI. 
              We're looking for passionate individuals to help us transform businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-3d-hover">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 pulse-3d">
                <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation Culture</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Work on cutting-edge AI projects that push the boundaries of what's possible.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-3d-hover">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 pulse-3d">
                <TrendingUp className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Career Growth</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Accelerate your career with mentorship from industry experts and continuous learning.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-3d-hover">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 pulse-3d">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Global Impact</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Make a real difference by helping businesses worldwide transform with AI.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/careers"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-3d-hover"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute top-10 left-10 float-3d opacity-20">
          <div className="w-24 h-24 bg-white/20 rounded-lg rotate-3d"></div>
        </div>
        <div className="absolute bottom-10 right-10 neural-node opacity-30">
          <div className="w-32 h-32 bg-white/20 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can revolutionize your operations and drive unprecedented growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-3d-hover"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;