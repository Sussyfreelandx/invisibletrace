import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, X, Star, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic Security",
      price: "$199",
      period: "per service",
      description: "Essential cybersecurity services for individuals",
      features: [
        "Basic data recovery",
        "Simple device unlock",
        "Email support",
        "48-hour response time",
        "Basic consultation"
      ],
      notIncluded: [
        "Advanced forensics",
        "Cryptocurrency recovery",
        "24/7 support",
        "Priority handling"
      ],
      popular: false,
      color: "gray"
    },
    {
      name: "Professional",
      price: "$499",
      period: "per service",
      description: "Comprehensive solutions for serious cases",
      features: [
        "Advanced forensic investigation",
        "Cryptocurrency recovery",
        "Phone monitoring & tracking",
        "iCloud unlock & recovery",
        "24/7 priority support",
        "Legal documentation",
        "Expert consultation",
        "Case progress tracking"
      ],
      notIncluded: [
        "Corporate training",
        "On-site visits"
      ],
      popular: true,
      color: "cyan"
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "per service",
      description: "Complete enterprise cybersecurity solutions",
      features: [
        "Full forensic investigation",
        "Multi-platform recovery",
        "Corporate security audit",
        "Team training sessions",
        "On-site consultation",
        "24/7 dedicated support",
        "Legal expert testimony",
        "Custom security protocols",
        "Ongoing monitoring",
        "Emergency response team"
      ],
      notIncluded: [],
      popular: false,
      color: "purple"
    }
  ];

  const customServices = [
    {
      service: "Phone Monitoring & Tracking",
      price: "$299 - $599",
      description: "Real-time tracking and monitoring solutions"
    },
    {
      service: "iCloud Unlock & Recovery",
      price: "$199 - $399",
      description: "Professional iCloud services and data recovery"
    },
    {
      service: "Bitcoin Recovery",
      price: "$799 - $1,999",
      description: "Cryptocurrency recovery and wallet restoration"
    },
    {
      service: "Digital Forensics",
      price: "$499 - $1,299",
      description: "Complete forensic investigation services"
    },
    {
      service: "Data Recovery",
      price: "$149 - $499",
      description: "Photo, message, and file recovery services"
    },
    {
      service: "Credit Card Solutions",
      price: "$299 - $799",
      description: "Debt resolution and financial recovery"
    }
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
            <h1 className="text-5xl font-bold mb-6">Transparent Pricing</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional cybersecurity services with clear, upfront pricing. No hidden fees, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Packages</h2>
            <p className="text-xl text-gray-600">
              Choose the package that best fits your cybersecurity needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg border-2 ${
                  plan.popular 
                    ? 'border-cyan-500 transform scale-105' 
                    : 'border-gray-200'
                } p-8`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, idx) => (
                    <div key={idx} className="flex items-center opacity-50">
                      <X className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Services Pricing */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Individual Service Pricing</h2>
            <p className="text-xl text-gray-600">
              Flexible pricing for specific cybersecurity services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.service}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-cyan-600">{service.price}</span>
                  <Link
                    to="/contact"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Guarantee</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We stand behind our work with a 100% satisfaction guarantee. If we can't deliver results, 
              you don't pay. Your success is our commitment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Results, No Payment</h3>
                <p className="text-gray-600">We only charge when we deliver successful results</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Confidential</h3>
                <p className="text-gray-600">Complete privacy and confidentiality guaranteed</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock support for all our clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quote
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

export default Pricing;