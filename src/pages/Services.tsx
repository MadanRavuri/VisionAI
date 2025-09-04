import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, TrendingUp, Shield, Zap, Database, Bot, BarChart3, Cloud } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Business Consulting',
      description: 'Strategic guidance to integrate AI into your business operations and drive growth.',
      slug: 'ai-business-consulting',
      features: ['AI Strategy Development', 'ROI Analysis', 'Implementation Planning', 'Change Management'],
      color: 'blue',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Harness the power of data to predict trends and make informed business decisions.',
      slug: 'predictive-analytics',
      features: ['Demand Forecasting', 'Risk Assessment', 'Customer Behavior Analysis', 'Market Trend Prediction'],
      color: 'purple',
    },
    {
      icon: Shield,
      title: 'AI-Powered Security',
      description: 'Advanced security solutions using machine learning to protect your digital assets.',
      slug: 'ai-powered-security',
      features: ['Threat Detection', 'Anomaly Detection', 'Fraud Prevention', 'Cybersecurity Automation'],
      color: 'green',
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes.',
      slug: 'digital-transformation',
      features: ['Process Automation', 'Legacy System Migration', 'Cloud Integration', 'Digital Workflows'],
      color: 'orange',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Build robust data infrastructure to support your AI and analytics initiatives.',
      slug: 'data-engineering',
      features: ['Data Pipeline Development', 'ETL Processes', 'Data Warehousing', 'Real-time Processing'],
      color: 'indigo',
    },
    {
      icon: Bot,
      title: 'Intelligent Automation',
      description: 'Automate repetitive tasks and processes using advanced AI and machine learning.',
      slug: 'intelligent-automation',
      features: ['Robotic Process Automation', 'Chatbots & Virtual Assistants', 'Workflow Optimization', 'Task Automation'],
      color: 'pink',
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable insights with advanced BI and analytics tools.',
      slug: 'business-intelligence',
      features: ['Dashboard Development', 'Reporting Automation', 'Data Visualization', 'Performance Metrics'],
      color: 'teal',
    },
    {
      icon: Cloud,
      title: 'Cloud AI Solutions',
      description: 'Scalable AI solutions built on leading cloud platforms for maximum flexibility.',
      slug: 'cloud-ai-solutions',
      features: ['Cloud Architecture', 'Serverless AI', 'Auto-scaling Solutions', 'Multi-cloud Deployment'],
      color: 'cyan',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600',
      indigo: 'from-indigo-500 to-indigo-600',
      pink: 'from-pink-500 to-pink-600',
      teal: 'from-teal-500 to-teal-600',
      cyan: 'from-cyan-500 to-cyan-600',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div>
      {/* Hero Section - Fullscreen background video with clean overlay */}
      <section className="relative min-h-screen overflow-hidden">
        {(() => {
          const heroVideos = ['/service.mov'].filter(Boolean);
          const [current, setCurrent] = useState(0);
          const [cursor, setCursor] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
          const sectionRef = useRef<HTMLDivElement | null>(null);

          useEffect(() => {
            if (heroVideos.length <= 1) return; // no rotation if single video
            const id = setInterval(() => {
              setCurrent((prev) => (prev + 1) % heroVideos.length);
            }, 6000);
            return () => clearInterval(id);
          }, [heroVideos.length]);

          const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            const rect = sectionRef.current?.getBoundingClientRect();
            if (!rect) return;
            setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          };

          return (
            <div ref={sectionRef} className="absolute inset-0" onMouseMove={handleMouseMove}>
              {heroVideos.map((src, idx) => (
                <video
                  key={`${src}-${idx}`}
                  src={src}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ))}

              {/* Subtle readability overlay only */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>
                <div className="absolute -inset-x-10 -inset-y-10 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),transparent_60%)]"></div>
              </div>

              {/* Centered content overlay */}
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div className="max-w-3xl blog-hero-text slide-in-once slide-delay-200">
                  <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-300 mb-4 heading-zoom">
                    Our Services
                  </h1>
                  <p className="text-lg md:text-2xl text-blue-100 leading-relaxed sub-wipe">
                    Comprehensive AI solutions designed to transform your operations, drive growth,
                    and unlock new opportunities in the digital age.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">Get a Consultation</a>
                    <a href="/about" className="inline-flex items-center px-6 py-3 glass text-white rounded-lg hover:bg-white/20 transition-colors">Learn About Us</a>
                  </div>
                </div>
              </div>

              {/* Dots */}
              {heroVideos.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {heroVideos.map((_, idx) => (
                    <span key={idx} className={`h-2 w-2 rounded-full ${idx === current ? 'bg-white' : 'bg-white/50'}`} />
                  ))}
                </div>
              )}
            </div>
          );
        })()}
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} getColorClasses={getColorClasses} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A proven methodology to deliver successful AI implementations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your business needs and identify AI opportunities.' },
              { step: '02', title: 'Strategy', description: 'Develop a comprehensive AI strategy aligned with your goals.' },
              { step: '03', title: 'Implementation', description: 'Execute the solution with our expert team of AI engineers.' },
              { step: '04', title: 'Optimization', description: 'Continuously monitor and optimize for maximum performance.' },
            ].map((process, index) => (
              <div key={index} className="text-center card-3d">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 pulse-3d">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute top-10 left-10 float-3d opacity-20">
          <div className="w-24 h-24 bg-white/20 rounded-lg rotate-3d"></div>
        </div>
        <div className="absolute bottom-10 right-10 sphere-3d opacity-30">
          <div className="w-32 h-32 bg-white/20 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI services can transform your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-3d-hover"
            >
              Contact Us Today
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-8 py-4 glass text-white rounded-lg hover:bg-white/20 transition-all duration-200"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

type Service = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  slug: string;
  features: string[];
  color: string;
};

const ServiceCard: React.FC<{ service: Service; getColorClasses: (c: string) => string }> = ({ service, getColorClasses }) => {
  const [cursor, setCursor] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement | null>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative service-card rounded-2xl p-8 shadow-3d-hover border border-gray-100 dark:border-gray-700 overflow-hidden"
    >
      {/* cursor glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(220px at ${cursor.x}px ${cursor.y}px, rgba(59,130,246,0.18), transparent 60%)` }}
      />

      <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(service.color)} rounded-2xl flex items-center justify-center mb-6 pulse-3d relative z-10`}>
        <service.icon className="h-8 w-8 text-white" />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">
        {service.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed relative z-10">
        {service.description}
      </p>

      <div className="space-y-3 relative z-10">
        <h4 className="font-semibold text-gray-900 dark:text-white">Key Features:</h4>
        <ul className="space-y-2">
          {service.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <div className={`w-2 h-2 bg-gradient-to-r ${getColorClasses(service.color)} rounded-full mr-3`}></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 relative z-10">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center px-4 py-2 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Services;