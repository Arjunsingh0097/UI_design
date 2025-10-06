export default function PayrollMadeEasy() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background curved patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <svg viewBox="0 0 1200 400" className="w-full h-full">
          <path
            d="M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z"
            fill="url(#curvedGradient)"
          />
          <defs>
            <linearGradient id="curvedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3f4f6" />
              <stop offset="50%" stopColor="#e5e7eb" />
              <stop offset="100%" stopColor="#d1d5db" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            {/* Left Section - Text Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Label */}
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full uppercase tracking-wide">
                  How it works
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Payroll made easy, teams made happy
              </h2>

              {/* Paragraph */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                We do more than just payroll and compliance. With Native Teams, your workforce gets real support, ensuring satisfaction, retention, and long-term success.
              </p>

              {/* Call to Action Button */}
              <button className="inline-flex items-center justify-center px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-bold text-lg rounded-xl transition-colors duration-200 w-fit">
                Book a demo
              </button>
            </div>

            {/* Right Section - Image with Overlay */}
            <div className="relative">
              {/* Main Image */}
              <div className="h-full min-h-[500px] relative overflow-hidden">
                <img
                  src="/images/smillingirl.png"
                  alt="Happy team member"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-transparent to-transparent"></div>
                
                {/* Payroll Metric Overlay */}
                <div className="absolute bottom-6 right-6 bg-pink-500 rounded-2xl p-6 shadow-xl">
                  {/* Chart Icon */}
                  <div className="mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  
                  {/* Metric Text */}
                  <div className="text-white">
                    <p className="text-xs uppercase tracking-wide font-semibold mb-1">
                      Total Payroll
                    </p>
                    <p className="text-2xl font-bold">
                      590,397.49 EUR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
