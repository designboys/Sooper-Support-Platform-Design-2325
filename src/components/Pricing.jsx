import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiCheck, FiStar } = FiIcons;

const plans = [
  {
    name: 'Everything Plan',
    price: '$29',
    period: '/month',
    description: 'Remove our branding, use our AI tools, and invite your team. Best for ecommerce and relationship driven businesses.',
    features: [
      '50,000 unique visitors',
      'Access to all settings, including AI',
      'Removed "powered by" branding',
      'Customer support',
      'Unlimited agents',
      'Unlimited videos',
      'Unlimited answers',
      'Unlimited threads'
    ],
    popular: false
  },
  {
    name: 'Everything + Social',
    price: '$99',
    period: '/month',
    description: 'Remove our branding, use our AI tools, and invite your team. Best for ecommerce and relationship driven businesses.',
    features: [
      '50,000 unique visitors',
      'Access to all settings, including AI',
      'Removed "powered by" branding',
      'Customer support',
      'Unlimited agents',
      'Unlimited videos',
      'Unlimited answers',
      'Unlimited threads',
      { text: '4 monthly social media posts', highlight: true }
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      'Unlimited visitors',
      'Custom video solutions',
      'Dedicated support team',
      'Custom AI training',
      'SLA guarantee',
      'API access'
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that best fits your needs. All plans include core features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg relative ${
                plan.popular ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-600" />
                    {typeof feature === 'string' ? (
                      <span className="text-gray-600">{feature}</span>
                    ) : (
                      <span className={`text-gray-600 ${feature.highlight ? 'bg-gradient-to-r from-primary-100 to-secondary-100 px-3 py-1 rounded-full font-medium text-primary-700 flex items-center space-x-2' : ''}`}>
                        {feature.highlight && <SafeIcon icon={FiStar} className="w-4 h-4 text-primary-600" />}
                        <span>{feature.text}</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <motion.a
                href="https://app.blooapps.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                <span>Get Started</span>
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;