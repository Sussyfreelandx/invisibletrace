import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Shield, Eye, Lock, Search, Bitcoin, CreditCard } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "The Ultimate Guide to Cryptocurrency Recovery in 2024",
    excerpt: "Learn the latest techniques and best practices for recovering lost Bitcoin and other cryptocurrencies. Our experts share insider knowledge on wallet recovery, private key restoration, and scam investigation.",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Marcus Johnson",
    date: "December 15, 2024",
    category: "Cryptocurrency Recovery",
    readTime: "8 min read"
  };

  const blogPosts = [
    {
      title: "Phone Monitoring: Legal Considerations and Best Practices",
      excerpt: "Understanding the legal framework around phone monitoring and tracking services. What you need to know before implementing surveillance solutions.",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Sarah Chen",
      date: "December 12, 2024",
      category: "Phone Monitoring",
      readTime: "6 min read",
      icon: <Eye className="w-5 h-5" />
    },
    {
      title: "iCloud Security: How to Protect Your Data from Breaches",
      excerpt: "Essential security measures to protect your iCloud account and data. Learn about two-factor authentication, secure passwords, and backup strategies.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "David Rodriguez",
      date: "December 10, 2024",
      category: "Data Security",
      readTime: "5 min read",
      icon: <Lock className="w-5 h-5" />
    },
    {
      title: "Digital Forensics in Corporate Investigations",
      excerpt: "How digital forensics plays a crucial role in corporate investigations. Case studies and methodologies used by professional investigators.",
      image: "https://images.pexels.com/photos/5380665/pexels-photo-5380665.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Emily Watson",
      date: "December 8, 2024",
      category: "Digital Forensics",
      readTime: "7 min read",
      icon: <Search className="w-5 h-5" />
    },
    {
      title: "Credit Card Fraud: Prevention and Recovery Strategies",
      excerpt: "Comprehensive guide to preventing credit card fraud and recovering from financial losses. Expert tips from cybersecurity professionals.",
      image: "https://images.pexels.com/photos/5380666/pexels-photo-5380666.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Marcus Johnson",
      date: "December 5, 2024",
      category: "Financial Security",
      readTime: "6 min read",
      icon: <CreditCard className="w-5 h-5" />
    },
    {
      title: "Data Recovery: What to Do When Files Are Deleted",
      excerpt: "Step-by-step guide to recovering deleted photos, messages, and important files. Professional techniques and tools for data restoration.",
      image: "https://images.pexels.com/photos/5380667/pexels-photo-5380667.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Sarah Chen",
      date: "December 3, 2024",
      category: "Data Recovery",
      readTime: "5 min read",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Cybersecurity Threats in 2024: What You Need to Know",
      excerpt: "Latest cybersecurity threats and how to protect yourself. Insights from our team of security experts on emerging risks and prevention strategies.",
      image: "https://images.pexels.com/photos/5380668/pexels-photo-5380668.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "David Rodriguez",
      date: "December 1, 2024",
      category: "Cybersecurity",
      readTime: "8 min read",
      icon: <Shield className="w-5 h-5" />
    }
  ];

  const categories = [
    "All Posts",
    "Cryptocurrency Recovery",
    "Phone Monitoring", 
    "Data Security",
    "Digital Forensics",
    "Financial Security",
    "Data Recovery",
    "Cybersecurity"
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
            <h1 className="text-5xl font-bold mb-6">Cybersecurity Insights</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert insights, tips, and guides on cybersecurity, digital forensics, and data recovery from our team of professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-medium mr-4">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredPost.date}
                  </span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 text-lg mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{featuredPost.author}</span>
                  </div>
                  <Link
                    to="/blog/cryptocurrency-recovery-guide-2024"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0
                    ? 'bg-cyan-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-cyan-50 hover:text-cyan-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest cybersecurity trends and insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      {post.icon}
                      <span className="ml-1">{post.category}</span>
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <span className="flex items-center mr-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="text-cyan-600 hover:text-cyan-700 font-medium text-sm flex items-center"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest cybersecurity insights, tips, and industry updates delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
              <button className="bg-gray-900 hover:bg-gray-800 px-8 py-4 rounded-r-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-cyan-100 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Need Professional Cybersecurity Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't just read about cybersecurity - get professional help from our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Expert Help
            </Link>
            <a
              href="tel:+17134281255"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Call Now: (713) 428-1255
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;