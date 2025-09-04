import React from 'react';
import { useParams, Link } from 'react-router-dom';

const SERVICE_CONTENT: Record<string, { 
  title: string; 
  intro: string; 
  description: string;
  benefits: string[];
  bullets: string[]; 
  image: string;
  process: string[];
}> = {
  'ai-business-consulting': {
    title: 'AI Business Consulting',
    intro: 'Strategic guidance to integrate AI into your business operations and drive growth.',
    description: 'Our AI Business Consulting service provides comprehensive strategic guidance to help organizations successfully integrate artificial intelligence into their operations. We work closely with your team to identify opportunities, develop implementation roadmaps, and ensure measurable ROI from your AI investments.',
    benefits: [
      'Strategic AI roadmap development',
      'ROI analysis and business case creation',
      'Technology stack recommendations',
      'Change management and training programs',
      'Risk assessment and mitigation strategies'
    ],
    bullets: ['AI Strategy Development', 'ROI Analysis', 'Implementation Planning', 'Change Management'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    process: [
      'Initial Assessment & Discovery',
      'Strategy Development',
      'Implementation Planning',
      'Pilot Program Design',
      'Full-Scale Rollout',
      'Ongoing Optimization'
    ]
  },
  'predictive-analytics': {
    title: 'Predictive Analytics',
    intro: 'Harness the power of data to predict trends and make informed business decisions.',
    description: 'Transform your data into actionable insights with our advanced predictive analytics solutions. We help you build sophisticated models that forecast trends, identify patterns, and enable data-driven decision making across your organization.',
    benefits: [
      'Accurate demand forecasting',
      'Customer behavior prediction',
      'Risk assessment and mitigation',
      'Market trend analysis',
      'Performance optimization insights'
    ],
    bullets: ['Demand Forecasting', 'Risk Assessment', 'Customer Behavior Analysis', 'Market Trend Prediction'],
    image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800',
    process: [
      'Data Assessment & Collection',
      'Model Development',
      'Validation & Testing',
      'Deployment & Integration',
      'Monitoring & Refinement',
      'Continuous Improvement'
    ]
  },
  'ai-powered-security': {
    title: 'AI-Powered Security',
    intro: 'Advanced security solutions using machine learning to protect your digital assets.',
    description: 'Stay ahead of evolving cyber threats with our AI-powered security solutions. We implement intelligent systems that continuously monitor, detect, and respond to security incidents in real-time, providing comprehensive protection for your digital infrastructure.',
    benefits: [
      'Real-time threat detection',
      'Automated incident response',
      'Fraud prevention systems',
      'Behavioral analysis',
      'Compliance monitoring'
    ],
    bullets: ['Threat Detection', 'Anomaly Detection', 'Fraud Prevention', 'Cybersecurity Automation'],
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
    process: [
      'Security Assessment',
      'Threat Modeling',
      'AI System Design',
      'Implementation & Testing',
      'Training & Deployment',
      'Ongoing Monitoring'
    ]
  },
  'digital-transformation': {
    title: 'Digital Transformation',
    intro: 'Complete digital transformation services to modernize your business processes.',
    description: 'Accelerate your digital transformation journey with our comprehensive approach. We help organizations modernize their operations, enhance customer experiences, and build sustainable competitive advantages through strategic technology adoption.',
    benefits: [
      'Process automation and optimization',
      'Legacy system modernization',
      'Cloud migration strategies',
      'Digital workflow implementation',
      'Change management support'
    ],
    bullets: ['Process Automation', 'Legacy System Migration', 'Cloud Integration', 'Digital Workflows'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    process: [
      'Current State Assessment',
      'Transformation Strategy',
      'Technology Selection',
      'Implementation Planning',
      'Execution & Migration',
      'Optimization & Scaling'
    ]
  },
  'data-engineering': {
    title: 'Data Engineering',
    intro: 'Build robust data infrastructure to support your AI and analytics initiatives.',
    description: 'Build a solid foundation for your AI and analytics initiatives with our data engineering expertise. We design and implement scalable data pipelines, warehouses, and processing systems that enable reliable data-driven decision making.',
    benefits: [
      'Scalable data infrastructure',
      'Real-time data processing',
      'Data quality assurance',
      'Integration with existing systems',
      'Performance optimization'
    ],
    bullets: ['Data Pipeline Development', 'ETL Processes', 'Data Warehousing', 'Real-time Processing'],
    image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800',
    process: [
      'Data Architecture Design',
      'Pipeline Development',
      'Data Quality Implementation',
      'Testing & Validation',
      'Deployment & Monitoring',
      'Maintenance & Optimization'
    ]
  },
  'intelligent-automation': {
    title: 'Intelligent Automation',
    intro: 'Automate repetitive tasks and processes using advanced AI and machine learning.',
    description: 'Streamline your operations with intelligent automation solutions that combine RPA, AI, and machine learning. We help you automate complex processes, reduce manual errors, and free up your team to focus on high-value activities.',
    benefits: [
      'Process efficiency improvement',
      'Error reduction and consistency',
      'Cost savings and ROI',
      'Scalable automation solutions',
      'Employee productivity enhancement'
    ],
    bullets: ['Robotic Process Automation', 'Chatbots & Virtual Assistants', 'Workflow Optimization', 'Task Automation'],
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
    process: [
      'Process Analysis',
      'Automation Strategy',
      'Solution Design',
      'Development & Testing',
      'Deployment & Training',
      'Continuous Improvement'
    ]
  },
  'business-intelligence': {
    title: 'Business Intelligence',
    intro: 'Transform raw data into actionable insights with advanced BI and analytics tools.',
    description: 'Transform your raw data into actionable business insights with our advanced BI and analytics solutions. We create intuitive dashboards, automated reports, and interactive visualizations that empower your team to make data-driven decisions.',
    benefits: [
      'Real-time business insights',
      'Automated reporting systems',
      'Interactive data visualizations',
      'Performance tracking dashboards',
      'Self-service analytics capabilities'
    ],
    bullets: ['Dashboard Development', 'Reporting Automation', 'Data Visualization', 'Performance Metrics'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    process: [
      'Requirements Gathering',
      'Data Source Integration',
      'Dashboard Design',
      'Development & Testing',
      'User Training',
      'Ongoing Support'
    ]
  },
  'cloud-ai-solutions': {
    title: 'Cloud AI Solutions',
    intro: 'Scalable AI solutions built on leading cloud platforms for maximum flexibility.',
    description: 'Leverage the power of cloud computing for your AI initiatives with our scalable cloud AI solutions. We design and implement AI systems on leading cloud platforms, ensuring optimal performance, cost efficiency, and flexibility.',
    benefits: [
      'Scalable and flexible infrastructure',
      'Cost optimization',
      'High availability and reliability',
      'Global deployment capabilities',
      'Integration with cloud services'
    ],
    bullets: ['Cloud Architecture', 'Serverless AI', 'Auto-scaling Solutions', 'Multi-cloud Deployment'],
    image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800',
    process: [
      'Cloud Strategy Assessment',
      'Architecture Design',
      'AI Model Development',
      'Cloud Deployment',
      'Performance Optimization',
      'Monitoring & Maintenance'
    ]
  },
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const content = (slug && SERVICE_CONTENT[slug]) || null;

  if (!content) {
    return (
      <div className="pt-20 max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Service not found</h1>
        <Link to="/services" className="text-blue-600 dark:text-blue-400">Back to services</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{content.title}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{content.intro}</p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{content.description}</p>
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg">
                Get Started Today
              </Link>
            </div>
            <div className="relative">
              <img 
                src={content.image} 
                alt={content.title}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Key Benefits</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Discover how our {content.title} service can transform your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">A proven methodology for successful implementation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step}</h3>
                </div>
                {index < content.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What You Get</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Comprehensive features included in our service</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.bullets.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Let's discuss how our {content.title} service can transform your business</p>
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
};

export default ServiceDetail;
