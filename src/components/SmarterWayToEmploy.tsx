export default function SmarterWayToEmploy() {
    const features = [
      {
        icon: (
          <svg
            className="w-6 h-6 text-teal-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        ),
        title: "Hire faster globally",
        description:
          "Expand globally with our entities in 85+ countries and hire 3x faster.",
      },
      {
        icon: (
          <svg
            className="w-6 h-6 text-teal-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 6h18M3 12h18M3 18h18"
            />
          </svg>
        ),
        title: "Pay with confidence",
        description: "Multi-currency, tax-friendly, and always on time.",
      },
      {
        icon: (
          <svg
            className="w-6 h-6 text-teal-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 20l9-16H3l9 16z"
            />
          </svg>
        ),
        title: "Boost retention",
        description: "Happy employees mean higher retention rates.",
      },
      {
        icon: (
          <svg
            className="w-6 h-6 text-teal-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        title: "Stay compliant",
        description:
          "Local laws, tax regulations, and employment contracts—handled.",
      },
    ];
  
    return (
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Badge + Title */}
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-teal-100 text-teal-700 rounded-full">
              WHY BUSINESSES CHOOSE US
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              The smarter way to employ & pay globally
            </h2>
          </div>
  
          {/* Black Container with all 5 boxes */}
          <div className="bg-[#1e1e1e] rounded-3xl p-6 md:p-10 border border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {/* Left: 2x2 Feature Cards */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="rounded-2xl p-6 border border-gray-700 hover:border-teal-400 transition-colors duration-300"
                  >
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
  
              {/* Right: Image */}
              <div className="rounded-2xl overflow-hidden border border-gray-700">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                  alt="Collaborative team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  