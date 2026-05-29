import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Calendar,
  Lock
} from 'lucide-react';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import {
  sendTelegramMessage,
  isTelegramConfigured,
  buildWhatsAppUrl,
} from '../utils/messaging';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'normal'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      urgency: 'normal'
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const delivered = [];

    try {
      // Telegram backend delivery via the Bot API (when configured).
      if (isTelegramConfigured()) {
        try {
          await sendTelegramMessage(formData);
          delivered.push('Telegram');
        } catch (telegramError) {
          console.error('Error sending Telegram message:', telegramError);
        }
      }

      // Email delivery via EmailJS (when configured).
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          urgency: formData.urgency,
          message: formData.message,
          to_email: 'invisibletracetech@gmail.com'
        };

        try {
          await emailjs.send(serviceId, templateId, templateParams, publicKey);
          delivered.push('Email');
        } catch (emailError) {
          console.error('Error sending email:', emailError);
        }
      }

      if (delivered.length > 0) {
        setSubmitMessage(
          `Thank you! Your message has been sent successfully via ${delivered.join(' and ')}. We'll get back to you soon.`
        );
        resetForm();
      } else {
        // No backend channel configured/succeeded: fall back to a prefilled email.
        const subject = encodeURIComponent(`Consultation request: ${formData.service}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nService: ${formData.service}\nUrgency: ${formData.urgency}\n\nMessage:\n${formData.message}`
        );
        window.open(`mailto:invisibletracetech@gmail.com?subject=${subject}&body=${body}`, '_blank');
        setSubmitMessage('Thank you! Your email client has opened with your message. Please send it to complete your request.');
        resetForm();
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try calling us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppSend = () => {
    if (!formData.name || !formData.message) {
      setSubmitMessage('Please add your name and message before sending via WhatsApp.');
      return;
    }
    window.open(buildWhatsAppUrl(formData), '_blank', 'noopener,noreferrer');
    setSubmitMessage('Thank you! WhatsApp has opened with your message. Please send it to complete your request.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    "Phone Monitoring & Tracking",
    "iCloud Unlock & Recovery", 
    "Data Recovery (Photos/Messages)",
    "Digital Forensics Investigation",
    "Bitcoin/Cryptocurrency Recovery",
    "Credit Card Debt Solutions",
    "Data Recovery & Restoration",
    "Call Tracking Services",
    "Other - Please Specify"
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 (713) 428-1255",
      link: "tel:+17134281255"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "invisibletracetech@gmail.com",
      link: "mailto:invisibletracetech@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "United States",
      link: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "24/7 Emergency Support Available",
      link: null
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
            <h1 className="text-5xl font-bold mb-6">Contact Our Experts</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get professional cybersecurity assistance. Our team is ready to help you 24/7 with your digital security needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">Get Free Consultation</h2>
                
                {submitMessage && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    submitMessage.includes('error') || submitMessage.includes('Sorry') 
                      ? 'bg-red-50 text-red-700 border border-red-200' 
                      : 'bg-green-50 text-green-700 border border-green-200'
                  }`}>
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your full name"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        disabled={isSubmitting}
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency Level
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      disabled={isSubmitting}
                    >
                      <option value="normal">Normal (24-48 hours)</option>
                      <option value="urgent">Urgent (Same day)</option>
                      <option value="emergency">Emergency (Immediate)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Please describe your situation and what help you need..."
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-sm text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-cyan-600 hover:bg-cyan-700 text-white'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="w-5 h-5 ml-2" />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-lg font-semibold text-sm text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Send via WhatsApp
                    <FaWhatsapp className="w-5 h-5 ml-2" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 text-lg mb-8">
                  Reach out to our cybersecurity experts through any of the following channels. 
                  We're available 24/7 for emergency situations.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-cyan-600 mt-1">{info.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-cyan-600 transition-colors"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Contact</h3>
                
                <a
                  href="https://wa.me/17134281255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <FaWhatsapp className="w-5 h-5 mr-3" />
                  WhatsApp Chat
                </a>

                <a
                  href={import.meta.env.VITE_TELEGRAM_CONTACT_URL || 'https://t.me/invisibletracetech'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <FaTelegram className="w-5 h-5 mr-3" />
                  Telegram Chat
                </a>
                
                <a
                  href="mailto:invisibletracetech@gmail.com"
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Send Email
                </a>
              </div>

              {/* Security Notice */}
              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 mt-8">
                <div className="flex items-start space-x-3">
                  <Lock className="w-6 h-6 text-cyan-600 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-900 mb-2">Security & Privacy</h4>
                    <p className="text-cyan-800 text-sm">
                      All communications are encrypted and confidential. We never share client information 
                      and maintain the highest standards of privacy and security.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly can you respond to emergency cases?",
                answer: "We offer 24/7 emergency response and can typically respond within 1-2 hours for critical situations."
              },
              {
                question: "Is my information kept confidential?",
                answer: "Absolutely. We maintain strict confidentiality and use encrypted communications for all client interactions."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, bank transfers, and cryptocurrency payments for your convenience."
              },
              {
                question: "Do you provide services internationally?",
                answer: "Yes, we provide remote cybersecurity services to clients worldwide, with local support in major cities."
              },
              {
                question: "How much do your services cost?",
                answer: "Pricing varies by service complexity. We offer free consultations and provide detailed quotes before starting any work."
              },
              {
                question: "What if you can't recover my data/funds?",
                answer: "We operate on a 'no results, no payment' basis for most recovery services. You only pay when we deliver results."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;