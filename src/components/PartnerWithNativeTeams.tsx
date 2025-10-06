export default function PartnerWithNativeTeams() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-6xl">
          {/* Main Container */}
          <div className="relative rounded-3xl bg-gray-900 p-8 md:p-12 text-center overflow-hidden">
            {/* Background Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}
            />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Logo/Icon */}
              <div className="mb-6 flex justify-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-pink-500">
                  <svg 
                    className="w-8 h-8 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-pink-500">Partner</span>
                <span className="text-white"> with Native Teams</span>
              </h2>

              {/* Descriptive Text */}
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join our wide network of partners built to help you scale, explore new markets, and deliver greater value for your clients. Explore partnerships now!
              </p>

              {/* Call to Action Button */}
              <button className="inline-flex items-center justify-center px-8 py-4 bg-pink-500 text-white font-semibold text-lg rounded-2xl hover:bg-pink-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Become a partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
