'use client';

import { useState } from 'react';

export default function AllInOneSolution() {
  const [expandedSection, setExpandedSection] = useState('EOR');

  const sections = [
    {
      id: 'EOR',
      title: 'EOR',
      description: 'Hire and manage full-time talent globally with compliant employment, local benefits, and payroll in more than 85 countries.',
      isExpanded: expandedSection === 'EOR'
    },
    {
      id: 'Entity Management',
      title: 'Entity Management',
      description: 'Set up and manage your global entities with full compliance and local expertise.',
      isExpanded: expandedSection === 'Entity Management'
    },
    {
      id: 'Gig Pay',
      title: 'Gig Pay',
      description: 'Pay your gig workers and contractors globally with flexible payment options.',
      isExpanded: expandedSection === 'Gig Pay'
    },
    {
      id: 'Work Payments',
      title: 'Work Payments',
      description: 'Streamline all your work payments with our comprehensive payment platform.',
      isExpanded: expandedSection === 'Work Payments'
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            All-in-one solution for global work payments
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
            More than a provider—a partner in your growth! Your team deserves more than a one-size-fits-all solution. That&apos;s why we go beyond basic services to offer flexible, tailored support for every stage of your global expansion.
          </p>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Accordion */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="space-y-4">
              {sections.map((section) => (
                <div key={section.id} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => setExpandedSection(section.isExpanded ? '' : section.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                    <div className="flex items-center">
                      {section.isExpanded ? (
                        <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      )}
                    </div>
                  </button>
                  
                  {section.isExpanded && (
                    <div className="pb-4">
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {section.description}
                      </p>
                      <a href="#" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
                        Learn more
                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Dashboard Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-pink-900 rounded-2xl p-8 shadow-2xl">
              {/* Teams Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Teams</h3>
                </div>
              </div>

              {/* Team Stats */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Employees</p>
                    <p className="text-4xl font-bold text-white">58</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-gray-800"></div>
                      <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-gray-800"></div>
                      <div className="w-8 h-8 bg-yellow-500 rounded-full border-2 border-gray-800"></div>
                      <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-gray-800"></div>
                    </div>
                    <div className="flex items-center space-x-1 ml-2">
                      <span className="text-xs text-gray-300">🇸🇮🇨🇳🇲🇰🇬🇧</span>
                      <span className="text-white font-semibold">+15</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <p className="text-gray-300 text-sm">Contractors</p>
                    <p className="text-xl font-semibold text-white">12</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Contracts</p>
                    <p className="text-xl font-semibold text-white">64</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Team roles</p>
                    <p className="text-xl font-semibold text-white">15</p>
                  </div>
                </div>

                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add people
                </button>
              </div>

              {/* Notification */}
              <div className="bg-gray-100 rounded-xl p-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 text-sm font-medium">
                      &quot;Ashley-Benson-EOR-Contract&quot; updated
                    </p>
                    <div className="flex space-x-4 mt-1">
                      <a href="#" className="text-teal-600 hover:text-teal-700 text-sm font-medium">Undo</a>
                      <a href="#" className="text-teal-600 hover:text-teal-700 text-sm font-medium">View profile</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
