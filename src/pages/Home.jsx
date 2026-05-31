import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fingerprint, Eye, Lock, Search, ArrowRight, CheckCircle, DollarSign } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Phone Monitoring & Tracking",
      description: "Advanced surveillance and tracking solutions for personal and corporate security."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "iCloud Unlock & Recovery",
      description: "Professional iCloud unlocking and data recovery services with guaranteed results."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Digital Forensics",
      description: "Expert forensic investigation services for legal and corporate requirements."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cryptocurrency Recovery",
      description: "Specialized recovery services for lost Bitcoin and cryptocurrency assets."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "$2.5M+", label: "Assets Recovered" },
    { number: "99.8%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Invisible Trace
                <span className="block text-cyan-400">Technology</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional cybersecurity experts providing cutting-edge digital forensics, 
                data recovery, and security solutions. Your digital safety is our priority.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-cyan-600 hover:bg-cyan-700 px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-800 rounded-2xl p-5 shadow-xl border border-cyan-400/20 max-w-md mx-auto">
                <div className="flex items-center mb-6">
                  <Fingerprint className="w-10 h-10 text-cyan-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">Secure & Confidential</h3>
                    <p className="text-gray-400">100% Privacy Guaranteed</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Licensed Cybersecurity Professionals</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>24/7 Emergency Response</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Guaranteed Results</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyan-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions tailored to protect and recover your digital assets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-cyan-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">See Our Expertise in Action</h2>
            <p className="text-xl text-gray-300">
              Watch how we protect and recover digital assets for our clients
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gray-950">
                <video
                  className="h-full w-full object-cover"
                  src="https://videos.pexels.com/video-files/5473806/5473806-hd_1920_1080_25fps.mp4"
                  poster="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Cybersecurity operations and technology video"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Secure Your Digital Assets?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Don't wait until it's too late. Contact our cybersecurity experts today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;