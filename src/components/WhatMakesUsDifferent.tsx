export default function WhatMakesUsDifferent() {
  return (
    <div className="bg-gray-900 py-20 relative overflow-hidden rounded-t-3xl">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Title */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            What makes us different?
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl">
            Running payroll globally isn&apos;t just about salaries—it&apos;s about
            compliance, taxes, and smooth operations, all while keeping
            employees happy. The challenge? Doing it efficiently without the
            legal and admin hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Countries Card (Glassmorphism) */}
          <div className="lg:col-span-1">
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center shadow-2xl overflow-hidden group">
              {/* Glow highlight */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 opacity-20 blur-3xl"></div>

              {/* Flags Graphic */}
              <div className="relative w-36 h-36 mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full backdrop-blur-md shadow-inner"></div>
                </div>
                {/* Flag positions */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 transition-transform group-hover:scale-110">
                  <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                    🇷🇸
                  </div>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 transition-transform group-hover:scale-110">
                  <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                    🇬🇧
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 transition-transform group-hover:scale-110">
                  <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                    🇺🇸
                  </div>
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 transition-transform group-hover:scale-110">
                  <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                    🇩🇪
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="relative z-10">
                <div className="text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-pink-200 bg-clip-text text-transparent mb-2 drop-shadow-md">
                  85+
                </div>
                <div className="text-lg text-white/90 tracking-wide font-medium">
                  countries worldwide
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* EOR Redefined Card */}
            <div className="bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-700">
              <div className="mb-4">
                {/* Table Interface */}
                <div className="bg-gray-700 rounded-2xl p-4 mb-4 border border-gray-600">
                  <div className="grid grid-cols-5 gap-4 text-xs text-gray-300 mb-3">
                    <div className="font-semibold">Team Member</div>
                    <div className="font-semibold">Country</div>
                    <div className="font-semibold">NET/Gross</div>
                    <div className="font-semibold">Start Date</div>
                    <div className="font-semibold">Status</div>
                  </div>
                  <div className="space-y-2">
                    <div className="grid grid-cols-5 gap-4 items-center text-sm">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-2">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                          </svg>
                        </div>
                        <span className="text-white">Miguel Pereira</span>
                      </div>
                      <div className="text-white">🇵🇹</div>
                      <div className="text-white">$4000/$4500</div>
                      <div className="text-white">21.11.2024</div>
                      <div>
                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                          COMPLETED
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 items-center text-sm">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-2">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                          </svg>
                        </div>
                        <span className="text-white">Oliver Bennett</span>
                      </div>
                      <div className="text-white">🇬🇧</div>
                      <div className="text-white">$4000/$4500</div>
                      <div className="text-white">21.11.2024</div>
                      <div>
                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                          COMPLETED
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 items-center text-sm">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-2">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                          </svg>
                        </div>
                        <span className="text-white">Ivana Horvat</span>
                      </div>
                      <div className="text-white">🇭🇷</div>
                      <div className="text-white">$4000/$4500</div>
                      <div className="text-white">21.11.2024</div>
                      <div>
                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                          COMPLETED
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-pink-500 mb-3">
                EOR, redefined
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Going beyond EOR, we integrate payroll, compliance and financial
                tools to maximise the value of every work payment, anywhere in
                the world.
              </p>
            </div>

            {/* Gig Payments Card */}
            <div className="bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-700">
              <div className="mb-4">
                {/* Dashboard Snippet */}
                <div className="bg-gray-700 rounded-2xl p-4 mb-4 border border-gray-600">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="space-y-3">
                        <div>
                          <div className="text-gray-400 text-sm">
                            Available balance
                          </div>
                          <div className="text-white font-semibold">
                            648.00 EUR
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-sm">
                            Current balance
                          </div>
                          <div className="text-white font-semibold">
                            334.00 EUR
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-sm">
                            Reserved balance
                          </div>
                          <div className="text-white font-semibold">
                            234.00 EUR
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-sm">
                            Pending balance
                          </div>
                          <div className="text-white font-semibold">
                            236.00 EUR
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">
                          Earnings overview
                        </h4>
                        <div className="space-y-2">
                          <div>
                            <div className="text-gray-400 text-sm">
                              Total earnings
                            </div>
                            <div className="text-white font-semibold">
                              6,000.00 EUR
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-sm">
                              Salary costs
                            </div>
                            <div className="text-white font-semibold">
                              2,000.00 EUR
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-lg">
                        Short term gigs
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-pink-500 mb-3">
                Taking the hassle out of gig payments
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We remove the complexities of gig worker payments, providing
                fast, compliant, and automated payouts so you can focus on
                growth, not admin tasks.
              </p>
            </div>

            {/* Bottom Row - Three Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* People Support Card */}
              <div className="bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-700">
                <h3 className="text-xl font-bold text-pink-500 mb-3">
                  More than payroll - we support your people
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  An easy payroll experience that keeps your team satisfied,
                  ensuring better retention and stronger business outcomes.
                </p>
              </div>

              {/* Payment Flexibility Card */}
              <div className="bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-700">
                <div className="mb-4">
                  {/* Currency Graphic */}
                  <div className="relative w-20 h-20 mx-auto">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg font-bold">$</span>
                      </div>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1">
                      <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">€</span>
                      </div>
                    </div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1">
                      <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">¥</span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1">
                      <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">₹</span>
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gray-500 opacity-50"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gray-500 opacity-50"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-pink-500 mb-3">
                  Full flexibility of payments
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Multi-currency support, instant transfers, and multiple
                  payment options let you pay your team the way that best fits
                  your business needs.
                </p>
              </div>

              {/* Abstract Graphic Card */}
              <div className="bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-700 flex items-center justify-center">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 bg-teal-500 rounded-lg transform rotate-12 opacity-80"></div>
                  <div className="absolute inset-0 bg-teal-400 rounded-lg transform -rotate-12 opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
