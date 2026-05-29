import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Search, Lock, Clock, DollarSign } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "General Services",
      icon: <Lock className="w-6 h-6" />,
      questions: [
        {
          question: "What cybersecurity services do you offer?",
          answer: "We offer comprehensive cybersecurity services including phone monitoring & tracking, iCloud unlock & recovery, data recovery for deleted photos and messages, digital forensics investigation, Bitcoin and cryptocurrency recovery, credit card debt solutions, data recovery & restoration, and call tracking services."
        },
        {
          question: "How experienced is your team?",
          answer: "Our team consists of certified cybersecurity professionals with over 15 years of combined experience in digital forensics, data recovery, and cybersecurity investigations. We've successfully handled over 500 cases and recovered millions in digital assets."
        },
        {
          question: "Do you work with law enforcement?",
          answer: "Yes, we regularly collaborate with law enforcement agencies and provide expert testimony in legal proceedings. Our forensic investigations meet legal standards and can be used as evidence in court."
        },
        {
          question: "What makes you different from other cybersecurity companies?",
          answer: "We specialize in recovery services with a 99.8% success rate, offer 24/7 emergency support, maintain complete confidentiality, and operate on a 'no results, no payment' basis for most recovery services. Our team combines technical expertise with legal knowledge."
        }
      ]
    },
    {
      title: "Pricing & Payment",
      icon: <DollarSign className="w-6 h-6" />,
      questions: [
        {
          question: "How much do your services cost?",
          answer: "Pricing varies depending on the complexity and type of service. Basic services start at $149, professional services at $499, and enterprise solutions at $1,299. We provide free consultations and detailed quotes before starting any work."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer flexible payment plans for larger projects. We also operate on a 'no results, no payment' basis for most recovery services, meaning you only pay when we successfully deliver results."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), bank transfers, PayPal, and cryptocurrency payments (Bitcoin, Ethereum) for your convenience and privacy."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No, we believe in transparent pricing. All costs are discussed upfront during the consultation, and we provide detailed quotes with no hidden fees or surprise charges."
        }
      ]
    },
    {
      title: "Process & Timeline",
      icon: <Clock className="w-6 h-6" />,
      questions: [
        {
          question: "How long does a typical investigation take?",
          answer: "Timeline varies by case complexity. Simple data recovery can take 24-48 hours, while complex forensic investigations may take 1-2 weeks. We provide regular updates and estimated timelines during the consultation."
        },
        {
          question: "Do you offer emergency services?",
          answer: "Yes, we provide 24/7 emergency response services. For critical situations, we can typically respond within 1-2 hours and begin immediate action to secure and recover your digital assets."
        },
        {
          question: "What information do you need to get started?",
          answer: "The information needed varies by service. Generally, we need details about the device/account, the nature of the problem, and any relevant background information. We'll guide you through the specific requirements during the consultation."
        },
        {
          question: "How do you keep me updated on progress?",
          answer: "We provide regular progress updates via your preferred communication method (email, phone, or secure messaging). For complex cases, we provide detailed reports at key milestones."
        }
      ]
    },
    {
      title: "Security & Privacy",
      icon: <Lock className="w-6 h-6" />,
      questions: [
        {
          question: "How do you ensure my privacy and confidentiality?",
          answer: "We maintain strict confidentiality agreements, use encrypted communications, secure data handling procedures, and never share client information. All our staff sign NDAs and follow strict privacy protocols."
        },
        {
          question: "Is my data safe with you?",
          answer: "Absolutely. We use military-grade encryption, secure servers, and follow industry best practices for data protection. All recovered data is securely transferred to you and then permanently deleted from our systems."
        },
        {
          question: "Do you keep records of my case?",
          answer: "We maintain minimal case records for legal and quality assurance purposes, but all sensitive data is permanently deleted after case completion. Records are stored securely and only accessible to authorized personnel."
        },
        {
          question: "Can you guarantee complete anonymity?",
          answer: "Yes, we can work with clients who require complete anonymity. We offer secure communication channels and can structure our services to maintain your privacy throughout the entire process."
        }
      ]
    },
    {
      title: "Specific Services",
      icon: <Search className="w-6 h-6" />,
      questions: [
        {
          question: "Can you really recover deleted photos and messages?",
          answer: "Yes, in most cases we can recover deleted photos, messages, and other data from various devices and platforms. Success depends on factors like how long ago the data was deleted and whether the storage has been overwritten."
        },
        {
          question: "How successful are you with cryptocurrency recovery?",
          answer: "We have a high success rate with cryptocurrency recovery, having recovered over $2.5M in digital assets. Success depends on the specific circumstances, but we've successfully recovered funds from forgotten wallets, exchange hacks, and scam situations."
        },
        {
          question: "Is phone monitoring legal?",
          answer: "Phone monitoring legality depends on the situation and jurisdiction. We only provide monitoring services for legal purposes such as parental control, employee monitoring (with consent), or personal device tracking. We ensure all services comply with applicable laws."
        },
        {
          question: "Can you unlock any iPhone or iCloud account?",
          answer: "We can unlock most iCloud accounts and iOS devices using legal methods. However, we cannot assist with unlocking stolen devices or accessing accounts without proper authorization. We verify ownership before providing any unlock services."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

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
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our cybersecurity services, pricing, and processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center mb-8">
                <div className="text-cyan-600 mr-4">{category.icon}</div>
                <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div
                      key={questionIndex}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-4"
                        >
                          <div className="border-t pt-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
          
          {filteredFAQs.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
              <p className="text-gray-500">
                Try searching with different keywords or browse our categories above.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our expert team is here to help you with any questions about our cybersecurity services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
            <p className="text-xl text-gray-600">
              Explore our services and get the help you need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <Lock className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Services</h3>
              <p className="text-gray-600 mb-4">
                Explore our comprehensive cybersecurity and recovery services
              </p>
              <Link
                to="/services"
                className="text-cyan-600 hover:text-cyan-700 font-medium"
              >
                View Services →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <DollarSign className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pricing</h3>
              <p className="text-gray-600 mb-4">
                Transparent pricing with no hidden fees or surprises
              </p>
              <Link
                to="/pricing"
                className="text-cyan-600 hover:text-cyan-700 font-medium"
              >
                View Pricing →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <Clock className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Support</h3>
              <p className="text-gray-600 mb-4">
                24/7 emergency response for critical cybersecurity situations
              </p>
              <Link
                to="/contact"
                className="text-cyan-600 hover:text-cyan-700 font-medium"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;