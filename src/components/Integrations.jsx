import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiCode,FiShoppingCart,FiGlobe,FiLayers,FiZap,FiShare2,FiLayers: FiStack,FiRefreshCw,FiMessageCircle,FiPlay}=FiIcons;

const Integrations=()=> {
  const platforms=[ 
    {name: 'WordPress',icon: FiGlobe,users: '2M+'},
    {name: 'Shopify',icon: FiShoppingCart,users: '1.5M+'},
    {name: 'Squarespace',icon: FiLayers,users: '800K+'},
    {name: 'Wix',icon: FiZap,users: '600K+'},
    {name: 'Custom HTML',icon: FiCode,users: '3M+'} 
  ];

  const directFeatures=[ 
    {
      icon: FiShare2,
      title: 'Share Everywhere',
      description: 'Use your Bloo Direct link on social media, emails, text messages, and QR codes'
    },
    {
      icon: FiStack,
      title: 'Everything in One Place',
      description: 'Centralize videos, live chat, and help — all synced and ready for your audience'
    },
    {
      icon: FiRefreshCw,
      title: 'No Extra Setup',
      description: 'All your website changes are reflected — Bloo Direct automatically updates'
    } 
  ];

  return ( 
    <section id="integrations" className="py-20 bg-white"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <motion.div 
          initial={{opacity: 0,y: 20}} 
          whileInView={{opacity: 1,y: 0}} 
          transition={{duration: 0.8}} 
          className="text-center mb-16" 
        > 
          <h2 className="text-4xl font-bold text-gray-900 mb-4"> 
            Works with your existing platform 
          </h2> 
          <p className="text-xl text-gray-600 max-w-3xl mx-auto"> 
            Install Bloo on any website with a simple one-time code snippet, just like the Facebook pixel. No technical expertise required. 
          </p> 
        </motion.div> 
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20"> 
          {platforms.map((platform,index)=> ( 
            <motion.div 
              key={index} 
              initial={{opacity: 0,y: 20}} 
              whileInView={{opacity: 1,y: 0}} 
              transition={{duration: 0.6,delay: index * 0.1}} 
              className="text-center" 
            > 
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-primary-50 transition-colors"> 
                <SafeIcon icon={platform.icon} className="w-10 h-10 text-gray-700" /> 
              </div> 
              <h3 className="font-semibold text-gray-900 mb-2">{platform.name}</h3> 
              <p className="text-sm text-gray-600">{platform.users} sites</p> 
            </motion.div> 
          ))} 
        </div> 
        
        {/* Bloo Direct Section */} 
        <motion.div 
          initial={{opacity: 0,y: 20}} 
          whileInView={{opacity: 1,y: 0}} 
          transition={{duration: 0.8}} 
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12" 
        > 
          <div className="text-center mb-12"> 
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"> 
              Bloo Direct: One Link. All Your Engagement. 
            </h3> 
            <p className="text-xl text-gray-600 max-w-3xl mx-auto"> 
              Show off your videos, chat, and AI support—all via a single link you can share anywhere. 
            </p> 
          </div> 
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12"> 
            <div className="grid gap-8"> 
              {directFeatures.map((feature,index)=> ( 
                <motion.div 
                  key={index} 
                  initial={{opacity: 0,x: -20}} 
                  whileInView={{opacity: 1,x: 0}} 
                  transition={{duration: 0.6,delay: index * 0.1}} 
                  className="flex items-start space-x-4" 
                > 
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-xl flex items-center justify-center flex-shrink-0"> 
                    <SafeIcon icon={feature.icon} className="w-6 h-6" /> 
                  </div> 
                  <div> 
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4> 
                    <p className="text-gray-600">{feature.description}</p> 
                  </div> 
                </motion.div> 
              ))} 
            </div> 
            
            <div className="bg-white rounded-2xl p-8 shadow-lg"> 
              <div className="bg-gray-900 rounded-xl p-6 mb-6"> 
                <div className="flex items-center justify-between mb-4"> 
                  <div className="flex space-x-2"> 
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div> 
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div> 
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div> 
                  </div> 
                  <div className="text-gray-400 text-sm">direct.bio/@yourname</div> 
                </div> 
                
                {/* Realistic ChipBot Widget Preview */}
                <div className="bg-gradient-to-b from-blue-50 to-white rounded-lg p-6 relative min-h-[300px]">
                  {/* Simulated website content */}
                  <div className="space-y-3 mb-8">
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </div>
                  
                  {/* ChipBot Widget in bottom-right corner */}
                  <div className="absolute bottom-4 right-4">
                    {/* Video bubble with intro message */}
                    <div className="relative mb-3">
                      {/* Chat bubble with intro message */}
                      <div className="bg-white rounded-2xl shadow-lg p-3 mb-2 max-w-[200px] relative">
                        <div className="text-xs text-gray-700 leading-relaxed">
                          👋 Hi! I'm here to help. Click to start a conversation!
                        </div>
                        {/* Speech bubble tail */}
                        <div className="absolute bottom-0 right-4 transform translate-y-1/2">
                          <div className="w-3 h-3 bg-white rotate-45 shadow-lg"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Main ChipBot button */}
                    <div className="flex items-center space-x-3">
                      {/* Video preview bubble */}
                      <motion.div 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer relative overflow-hidden"
                      >
                        {/* Video play icon */}
                        <SafeIcon icon={FiPlay} className="w-6 h-6 text-white ml-1" />
                        {/* Pulse effect */}
                        <div className="absolute inset-0 rounded-full border-2 border-primary-400 animate-ping opacity-30"></div>
                      </motion.div>
                      
                      {/* Chat icon */}
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer border border-gray-100"
                      >
                        <SafeIcon icon={FiMessageCircle} className="w-6 h-6 text-primary-600" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div> 
              <div className="text-center"> 
                <div className="text-sm text-gray-500 mb-2">Your shareable link:</div> 
                <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-primary-600"> 
                  https://direct.bio/@yourname 
                </div> 
              </div> 
            </div> 
          </div> 
          
          <div className="text-center"> 
            <div className="flex flex-col sm:flex-row gap-4 justify-center"> 
              <motion.a 
                href="https://app.blooapps.com" 
                whileHover={{scale: 1.05}} 
                whileTap={{scale: 0.95}} 
                className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors" 
              > 
                Get Your Direct Link Now 
              </motion.a> 
              <motion.a 
                href="https://app.blooapps.com" 
                whileHover={{scale: 1.05}} 
                whileTap={{scale: 0.95}} 
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-colors" 
              > 
                See Demo 
              </motion.a> 
            </div> 
          </div> 
        </motion.div> 
      </div> 
    </section> 
  );
};

export default Integrations;