import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Smartphone, 
  Shield, 
  Search, 
  DollarSign, 
  CreditCard, 
  HardDrive, 
  Phone,
  Lock,
  Camera,
  MessageSquare,
  Bitcoin,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Phone Monitoring & Tracking",
      description: "Advanced surveillance and tracking solutions for personal and corporate security needs.",
      features: ["Real-time location tracking", "Call and message monitoring", "App usage tracking", "Stealth mode operation"],
      price: "Starting at $299"
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "iCloud Unlock & Recovery",
      description: "Professional iCloud unlocking and data recovery services with guaranteed results.",
      features: ["iCloud activation bypass", "Account recovery", "Data extraction", "Privacy protection"],
      price: "Starting at $199"
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Data Recovery for Deleted Photos & Messages",
      description: "Recover lost photos, messages, and important data from any device or platform.",
      features: ["Photo recovery", "Message restoration", "Contact recovery", "Document retrieval"],
      price: "Starting at $149"
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "Hacking Forensic Investigator",
      description: "Expert forensic investigation services for legal and corporate requirements.",
      features: ["Digital evidence collection", "Cyber attack analysis", "Legal documentation", "Expert testimony"],
      price: "Starting at $499"
    },
    {
      icon: <Bitcoin className="w-12 h-12" />,
      title: "Bitcoin & Cryptocurrency Recovery",
      description: "Specialized recovery services for lost Bitcoin and cryptocurrency assets.",
      features: ["Wallet recovery", "Private key restoration", "Exchange recovery", "Scam investigation"],
      price: "Starting at $799"
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Credit Card Debt Solutions",
      description: "Professional assistance with credit card debt resolution and financial recovery.",
      features: ["Debt negotiation", "Credit repair", "Financial planning", "Legal protection"],
      price: "Starting at $299"
    },
    {
      icon: <HardDrive className="w-12 h-12" />,
      title: "Data Recovery & Restoration",
      description: "Complete data recovery services for damaged, corrupted, or lost digital information.",
      features: ["Hard drive recovery", "SSD restoration", "Cloud data recovery", "Database reconstruction"],
      price: "Starting at $199"
    },
    {
      icon: <Phone className="w-12 h-12" />,
      title: "Call Tracking Services",
      description: "Advanced call tracking and monitoring solutions for security and business needs.",
      features: ["Call recording", "Number tracking", "Location identification", "Pattern analysis"],
      price: "Starting at $249"
    }
  ];

  const corporateSolutions = [
    {
      title: "NO to Blackmailing",
      description: "Comprehensive protection against digital blackmail and extortion attempts.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Financial Recovery",
      description: "Professional financial asset recovery and fraud investigation services.",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: "Bitcoin Platform Security",
      description: "Specialized security solutions for cryptocurrency platforms and exchanges.",
      icon: <Bitcoin className="w-8 h-8" />
    }
  ];

  const whatWeOffer = [
    "Phone Monitoring & Tracking",
    "Cyber Forensic Expert Services", 
    "Recovery of Lost Funds",
    "Professional Investigators"
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-cyan-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Our Professional Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions tailored to protect, recover, and secure your digital assets with industry-leading expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600">
              Professional cybersecurity services designed to meet your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-cyan-600 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-cyan-600">{service.price}</span>
                    <Link
                      to="/contact"
                      className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Solutions */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Corporate Solutions</h2>
            <p className="text-xl text-gray-600">
              Specialized enterprise-level cybersecurity solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporateSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="text-cyan-600 mb-4 flex justify-center">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">
              Comprehensive cybersecurity expertise at your service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatWeOffer.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 text-center border border-cyan-100"
              >
                <CheckCircle className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">{offer}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-300">
              Simple, secure, and professional approach to every case
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Free initial consultation to understand your needs" },
              { step: "02", title: "Analysis", desc: "Thorough analysis and case assessment" },
              { step: "03", title: "Execution", desc: "Professional execution with regular updates" },
              { step: "04", title: "Delivery", desc: "Secure delivery of results and documentation" }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-gray-300">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Need Professional Cybersecurity Services?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Contact our experts today for a free consultation and customized solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+17134281255"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Call Now: (713) 428-1255
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;