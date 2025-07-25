import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiVideo, FiMessageCircle, FiBox, FiTrendingUp, FiUsers, FiShield} = FiIcons;

const features = [
  {
    icon: FiVideo,
    title: 'Video Greetings',
    description: 'Welcome visitors with personalized video messages that create instant connections.'
  },
  {
    icon: FiMessageCircle,
    title: 'Live Chat',
    description: 'Engage with customers in real-time through our intuitive chat interface.'
  },
  {
    icon: FiBox,
    title: 'AI Help Desk',
    description: 'Automate support with our intelligent AI that learns from every interaction.'
  },
  {
    icon: FiTrendingUp,
    title: 'Analytics',
    description: 'Track engagement metrics and optimize your customer interactions.'
  },
  {
    icon: FiUsers,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with built-in team management tools.'
  },
  {
    icon: FiShield,
    title: 'Enterprise Security',
    description: 'Keep your data safe with enterprise-grade security features.'
  }
];

const Features = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to engage and support customers
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From first impression to ongoing support, Bloo provides a complete solution that grows with your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: index * 0.1}}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <SafeIcon icon={feature.icon} className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;