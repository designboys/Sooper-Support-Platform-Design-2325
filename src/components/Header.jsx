import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752764061065-Frame-1410103631%20%281%29%20%281%29.png"
              alt="Bloo Logo"
              className="h-8 sm:h-10"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-700 hover:text-primary-600 transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary-600 transition-colors">
              Pricing
            </Link>
            <button
              onClick={() => scrollToSection('integrations')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Integrations
            </button>
            <button
              onClick={() => scrollToSection('support')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Support
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-primary-600 transition-colors">
              Sign In
            </button>
            <motion.a
              href="https://app.blooapps.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Try for Free
            </motion.a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t"
          >
            <div className="flex flex-col space-y-4">
              <Link
                to="/features"
                className="text-gray-700 hover:text-primary-600 px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="text-gray-700 hover:text-primary-600 px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <button
                onClick={() => scrollToSection('integrations')}
                className="text-gray-700 hover:text-primary-600 px-2 py-1 text-left"
              >
                Integrations
              </button>
              <button
                onClick={() => scrollToSection('support')}
                className="text-gray-700 hover:text-primary-600 px-2 py-1 text-left"
              >
                Support
              </button>
              <a
                href="https://app.blooapps.com"
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Try for Free
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;