import StatsRow from "./StatsRow";
import OfficeVideoFrame from "./OfficeVideoFrame";

export default function AboutSection() {
  return (
    <section className="bg-white">
      {/* White Section */}
      <div className="py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
            Shaping the Future of Work Together
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-black max-w-4xl mx-auto leading-relaxed">
            At Native Teams, our journey began with a problem we knew all too
            well. Driven by a vision to simplify global work, we built a
            platform that helps businesses and workers thrive. Going beyond EOR,
            we combine payroll, compliance with financial tools that maximise
            the value of any work payment!
          </p>
        </div>

        {/* Image Gallery Section */}
        <div className="bg-gray-800 rounded-3xl p-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Image 1 */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Professional team member"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Image 2 */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Business professional team member"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Image 3 */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration and celebration"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Image 4 */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Diverse professional team"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Black Section (Our Journey Timeline) */}
      <div className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Journey
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600 border-dashed border-gray-600"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2020 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center z-10">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-8">
                  <div className="bg-gray-800 rounded-2xl p-6">
                    <div className="text-2xl font-bold text-white mb-2">
                      2020
                    </div>
                    <p className="text-white text-lg">
                      Native Teams was born to revolutionise global work
                      payments, tackling challenges we faced firsthand.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2021 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center z-10">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-2 0v-4H3a1 1 0 01-1-1zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-2 0V8H9a1 1 0 01-1-1zM14 3a1 1 0 011-1h2a1 1 0 011 1v13a1 1 0 01-2 0V4h-1a1 1 0 01-1-1z" />
                  </svg>
                </div>
                <div className="ml-8">
                  <div className="bg-gray-800 rounded-2xl p-6">
                    <div className="text-2xl font-bold text-white mb-2">
                      2021
                    </div>
                    <p className="text-white text-lg">
                      Launched payroll and compliance services in the Balkans,
                      then expanded globally. Our growing team offers enhanced
                      services and support.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2022 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center z-10">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div className="ml-8">
                  <div className="bg-gray-800 rounded-2xl p-6">
                    <div className="text-2xl font-bold text-white mb-2">
                      2022
                    </div>
                    <p className="text-white text-lg">
                      Raised €2M seed funding, introduced new features, and
                      expanded into more global markets with a team of 100+.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2023 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center z-10">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div className="ml-8">
                  <div className="bg-gray-800 rounded-2xl p-6">
                    <div className="text-2xl font-bold text-white mb-2">
                      2023
                    </div>
                    <p className="text-white text-lg">
                      Supported businesses in 85+ countries, grew to 150
                      employees, and launched key new solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2024 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center z-10">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div className="ml-8">
                  <div className="bg-teal-500 rounded-2xl p-6">
                    <div className="text-2xl font-bold text-white mb-2">
                      2024
                    </div>
                    <p className="text-white text-lg">
                      Secured €6.275M investment, expanded to 280+ employees,
                      and introduced enhanced capabilities and personalised
                      support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <StatsRow />

      {/* Office Video Frame Section */}
      <OfficeVideoFrame />
    </section>
  );
}
