'use client';

import React from 'react';

const PayYourTeam = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Pay your team
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Streamline your payroll process with our comprehensive platform. 
                Manage payments, track expenses, and keep your team happy with 
                transparent and efficient financial tools.
              </p>
            </div>
            
            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Real-time payment processing</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Multi-currency support</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Automated compliance</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Detailed transaction history</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </div>
          </div>
          
          {/* Right Side - Video Frame */}
          <div className="relative">
            {/* Laptop Frame */}
            <div className="relative bg-gray-800 rounded-2xl p-4 shadow-2xl">
              {/* Laptop Screen */}
              <div className="bg-white rounded-xl overflow-hidden">
                {/* Video Container */}
                <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                  {/* Video Element */}
                  <video 
                    className="w-full h-full object-cover rounded-xl"
                    controls
                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23f3f4f6'/%3E%3C/svg%3E"
                  >
                    <source src="/videos/dashboard-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                    <button className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 shadow-lg">
                      <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l7-5-7-5z" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Video Caption Overlay */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      and pay your team
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Laptop Base */}
              <div className="absolute -bottom-2 left-0 right-0 h-4 bg-gray-700 rounded-b-2xl"></div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 rounded-full opacity-50"></div>
            
            {/* Decorative Pebbles */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
              <div className="w-32 h-20 bg-gray-600 rounded-lg opacity-60">
                <div className="absolute inset-0 flex flex-wrap p-2">
                  <div className="w-2 h-2 bg-white rounded-full m-1"></div>
                  <div className="w-2 h-2 bg-white rounded-full m-1"></div>
                  <div className="w-2 h-2 bg-white rounded-full m-1"></div>
                  <div className="w-2 h-2 bg-white rounded-full m-1"></div>
                  <div className="w-2 h-2 bg-white rounded-full m-1"></div>
                  <div className="w-2 h-2 bg-white rounded-full m-1"></div>
                </div>
              </div>
            </div>
            
            {/* Chair Back */}
            <div className="absolute -right-8 top-1/3 w-16 h-24 bg-gray-500 opacity-40 rounded-lg">
              <div className="absolute inset-2 border border-gray-400 rounded grid grid-cols-3 gap-1">
                <div className="bg-gray-300 rounded-sm"></div>
                <div className="bg-gray-300 rounded-sm"></div>
                <div className="bg-gray-300 rounded-sm"></div>
                <div className="bg-gray-300 rounded-sm"></div>
                <div className="bg-gray-300 rounded-sm"></div>
                <div className="bg-gray-300 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayYourTeam;
