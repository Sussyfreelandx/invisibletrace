import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Thompson",
      location: "New York, USA",
      rating: 5,
      quote: "Invisible Trace Technology recovered my lost Bitcoin worth $45,000. Their expertise and professionalism exceeded all expectations. Highly recommended!",
      service: "Cryptocurrency Recovery"
    },
    {
      name: "Sarah Johnson",
      location: "Toronto, Canada",
      rating: 5,
      quote: "They helped me unlock my deceased husband's iPhone and recover precious family photos. The team was compassionate and incredibly skilled.",
      service: "Data Recovery & Device Unlock"
    },
    {
      name: "James Wilson",
      location: "Sydney, Australia",
      rating: 5,
      quote: "Outstanding forensic investigation services. They provided crucial evidence for our legal case with detailed documentation and expert testimony.",
      service: "Digital Forensics"
    },
    {
      name: "Emma Martinez",
      location: "London, United Kingdom",
      rating: 5,
      quote: "Professional phone monitoring service helped protect my teenage daughter. The discreet tracking gave me peace of mind as a concerned parent.",
      service: "Phone Monitoring"
    },
    {
      name: "Pierre Dubois",
      location: "Paris, France",
      rating: 5,
      quote: "Excellent iCloud recovery service. They restored all my business data after I forgot my credentials. Fast, reliable, and completely confidential.",
      service: "iCloud Recovery"
    },
    {
      name: "Hans Mueller",
      location: "Berlin, Germany",
      rating: 5,
      quote: "Their cryptocurrency recovery expertise is unmatched. They recovered funds from a scam exchange when I thought all hope was lost. Truly amazing!",
      service: "Cryptocurrency Recovery"
    },
    {
      name: "Lisa Chen",
      location: "Vancouver, Canada",
      rating: 5,
      quote: "Credit card debt solution service was life-changing. They negotiated with creditors and helped me get back on track financially. Professional and caring team.",
      service: "Financial Recovery"
    },
    {
      name: "Robert Davis",
      location: "Melbourne, Australia",
      rating: 5,
      quote: "Data recovery service saved my business. They recovered critical files from a corrupted hard drive. Their technical expertise is simply outstanding.",
      service: "Data Recovery"
    },
    {
      name: "Sophie Laurent",
      location: "Lyon, France",
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

  const serviceVideos = [
    {
      title: "Digital Forensics Workflow",
      service: "Evidence analysis and secure reporting",
      src: "https://videos.pexels.com/video-files/5473806/5473806-hd_1920_1080_25fps.mp4",
      poster: "https://images.pexels.com/photos/5380651/pexels-photo-5380651.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      title: "Data Recovery Process",
      service: "Device diagnostics and file restoration",
      src: "https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4",
      poster: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      title: "Cybersecurity Monitoring",
      service: "Live threat monitoring and response",
      src: "https://videos.pexels.com/video-files/6963744/6963744-hd_1920_1080_25fps.mp4",
      poster: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1200"
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Client Success Stories</h1>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
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
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
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

      {/* Service Videos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Service Videos</h2>
            <p className="text-xl text-gray-600">
              Watch examples of the technology workflows behind our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="aspect-video bg-gray-950">
                  <video
                    className="h-full w-full object-cover"
                    src={video.src}
                    poster={video.poster}
                    controls
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={`${video.title} service video`}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-1">{video.title}</h3>
                  <p className="text-sm text-gray-300">{video.service}</p>
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
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;