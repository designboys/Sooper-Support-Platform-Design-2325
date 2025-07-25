import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiStar} = FiIcons;

const stats = [
  {number: '10K+', label: 'Websites Using Bloo'},
  {number: '1M+', label: 'Customer Interactions'},
  {number: '95%', label: 'Customer Satisfaction'},
  {number: '24/7', label: 'Support Coverage'}
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStart',
    content: 'Bloo transformed our customer support. The AI responses are incredibly accurate and our team loves the video feature.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'E-commerce Manager',
    content: 'The engagement on our site increased by 300% after implementing Bloo. Best investment we made this year.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Customer Success Lead',
    content: 'Our response time dropped from hours to minutes. The AI handles routine queries perfectly, letting us focus on complex cases.',
    rating: 5
  }
];

const SocialProof = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Trusted by thousands of businesses worldwide
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Join the companies already boosting their customer engagement
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: index * 0.1}}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.4}}
          className="mt-12 sm:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;