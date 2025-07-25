import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiArrowRight} = FiIcons;

const CTA = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to transform your website?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses using Bloo to engage visitors, capture leads, and provide exceptional customer support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="https://app.blooapps.com"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Start Free Trial</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://app.blooapps.com"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Watch Demo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;