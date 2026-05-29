import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Thompson",
      location: "New York, USA",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      quote: "Invisible Trace Technology recovered my lost Bitcoin worth $45,000. Their expertise and professionalism exceeded all expectations. Highly recommended!",
      service: "Cryptocurrency Recovery"
    },
    {
      name: "Sarah Johnson",
      location: "Toronto, Canada",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      quote: "They helped me unlock my deceased husband's iPhone and recover precious family photos. The team was compassionate and incredibly skilled.",
      service: "Data Recovery & Device Unlock"
    },
    {
      name: "James Wilson",
      location: "Sydney, Australia",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      quote: "Outstanding forensic investigation services. They provided crucial evidence for our legal case with detailed documentation and expert testimony.",
      service: "Digital Forensics"
    },
    {
      name: "Emma Martinez",
      location: "London, United Kingdom",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      quote: "Professional phone monitoring service helped protect my teenage daughter. The discrete tracking gave me peace of mind as a concerned parent.",
      service: "Phone Monitoring"
    },
    {
      name: "Pierre Dubois",
      location: "Paris, France",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      quote: "Excellent iCloud recovery service. They restored all my business data after I forgot my credentials. Fast, reliable, and completely confidential.",
      service: "iCloud Recovery"
    },
    {
      name: "Hans Mueller",
      location: "Berlin, Germany",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      quote: "Their cryptocurrency recovery expertise is unmatched. They recovered funds from a scam exchange when I thought all hope was lost. Truly amazing!",
      service: "Cryptocurrency Recovery"
    },
    {
      name: "Lisa Chen",
      location: "Vancouver, Canada",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      quote: "Credit card debt solution service was life-changing. They negotiated with creditors and helped me get back on track financially. Professional and caring team.",
      service: "Financial Recovery"
    },
    {
      name: "Robert Davis",
      location: "Melbourne, Australia",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      quote: "Data recovery service saved my business. They recovered critical files from a corrupted hard drive. Their technical expertise is simply outstanding.",
      service: "Data Recovery"
    },
    {
      name: "Sophie Laurent",
      location: "Lyon, France",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      quote: "Call tracking service helped identify harassment calls. The detailed reports provided crucial evidence for legal action. Highly professional service.",
      service: "Call Tracking"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients Worldwide" },
    { number: "$2.5M+", label: "Assets Successfully Recovered" },
    { number: "99.8%", label: "Client Satisfaction Rate" },
    { number: "24/7", label: "Emergency Support Available" }
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
            <h1 className="text-5xl font-bold mb-6">Client Success Stories</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real testimonials from satisfied clients across the globe who trusted us with their cybersecurity needs.
            </p>
          </motion.div>
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

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Testimonials from clients across USA, Canada, Australia, Germany, France, and United Kingdom
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="w-8 h-8 text-cyan-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic mb-4 pl-6">"{testimonial.quote}"</p>
                </div>
                
                <div className="border-t pt-4">
                  <span className="text-sm font-medium text-cyan-600">{testimonial.service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-xl text-gray-600">
              Watch our clients share their success stories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Michael T.", service: "Bitcoin Recovery", location: "USA" },
              { name: "Sarah J.", service: "Data Recovery", location: "Canada" },
              { name: "James W.", service: "Digital Forensics", location: "Australia" }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-900 to-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{video.name}</h3>
                    <p className="text-sm text-gray-300">{video.service}</p>
                    <p className="text-xs text-gray-400">{video.location}</p>
                  </div>
                </div>
                <div className="p-4">
                  <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg font-medium transition-colors">
                    Play Testimonial
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted Worldwide</h2>
            <p className="text-xl text-gray-300">
              Clients from over 50 countries trust our cybersecurity expertise
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {["🇺🇸", "🇨🇦", "🇦🇺", "🇩🇪", "🇫🇷", "🇬🇧"].map((flag, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl mb-2">{flag}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Our Satisfied Clients
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Experience the same professional service and successful results that our clients worldwide have come to trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
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

export default Testimonials;