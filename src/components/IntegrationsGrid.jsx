import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiGlobe, 
  FiShoppingCart, 
  FiLayers, 
  FiTag, 
  FiBox, 
  FiGrid, 
  FiMonitor, 
  FiServer,
  FiDatabase,
  FiLifeBuoy,
  FiLayout,
  FiPieChart,
  FiBookOpen,
  FiCpu,
  FiUsers
} = FiIcons;

// Categorized integrations
const integrationCategories = [
  {
    name: "Website Builders",
    integrations: [
      { name: "WordPress", icon: FiGlobe },
      { name: "Showit", icon: FiLayout },
      { name: "SquareSpace", icon: FiLayers },
      { name: "Wix", icon: FiGrid },
      { name: "Hostinger", icon: FiServer },
      { name: "Durable AI", icon: FiCpu },
      { name: "One.com", icon: FiGlobe },
      { name: "Typedream", icon: FiLayout },
      { name: "Duda", icon: FiMonitor }
    ]
  },
  {
    name: "E-commerce & Marketing",
    integrations: [
      { name: "Ecwid", icon: FiShoppingCart },
      { name: "ClickFunnels", icon: FiPieChart },
      { name: "HubSpot", icon: FiUsers },
      { name: "Kajabi", icon: FiBox },
      { name: "Samcart", icon: FiShoppingCart },
      { name: "Unbounce", icon: FiTag },
      { name: "Google Tag Manager", icon: FiTag }
    ]
  },
  {
    name: "CRMs & Specialized",
    integrations: [
      { name: "Dorik", icon: FiGrid },
      { name: "Drupal", icon: FiDatabase },
      { name: "GoHighLevel", icon: FiPieChart },
      { name: "Booking Koala", icon: FiLifeBuoy },
      { name: "Odoo", icon: FiDatabase },
      { name: "Systeme", icon: FiServer },
      { name: "Teachable", icon: FiBookOpen },
      { name: "Tutorbird", icon: FiBookOpen },
      { name: "Pixieset", icon: FiMonitor }
    ]
  }
];

const IntegrationsGrid = () => {
  return (
    <section id="integrations-grid" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Connect Bloo with Your Favorite Platforms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bloo easily integrates with your tools — from websites to CRMs, landing pages, and more.
            Just add a simple code snippet and you're ready to go.
          </p>
        </motion.div>

        <div className="space-y-16">
          {integrationCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-800 text-center sm:text-left">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                {category.integrations.map((integration, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                    }}
                    className="bg-white rounded-xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 aspect-square"
                  >
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-3">
                      <SafeIcon icon={integration.icon} className="w-6 h-6 text-primary-600" />
                    </div>
                    <h4 className="text-sm font-medium text-gray-800 text-center">
                      {integration.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="https://app.blooapps.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center"
          >
            Start Integrating Now
          </motion.a>
          <p className="text-gray-500 mt-4">
            Don't see your platform? Contact us for custom integration options.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsGrid;