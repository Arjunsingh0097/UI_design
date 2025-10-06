export default function ExpertSupport() {
    const services = [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        ),
        title: "Expert customer support",
        description: "Get help whenever you need it, no matter the time zone."
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        title: "Dedicated account managers",
        description: "A single point of contact to simplify your payroll and compliance needs."
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        title: "Customisable solutions",
        description: "Tailored payroll and employment services that adapt to your business needs."
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a1.5 1.5 0 003 0m0-2.5a1.5 1.5 0 013 0v2a1.5 1.5 0 01-3 0m6-1.5a1.5 1.5 0 013 0v2a1.5 1.5 0 01-3 0m0-2.5a1.5 1.5 0 013 0v2a1.5 1.5 0 01-3 0" />
          </svg>
        ),
        title: "Onboarding assistance",
        description: "We guide you through hiring, payments, and tax compliance."
      }
    ];
  
    return (
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
        {/* Background blobs */}
        <div className="absolute bottom-0 left-0 w-80 h-80 opacity-20 blur-3xl bg-gradient-to-br from-teal-400 via-pink-400 to-purple-600 rounded-full" />
        <div className="absolute top-0 right-0 w-80 h-80 opacity-20 blur-3xl bg-gradient-to-br from-purple-500 via-orange-400 to-teal-400 rounded-full" />
  
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-12 items-start">
            {/* LEFT → heading + text + services */}
            <div className="w-full max-w-xl lg:max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
                Expert support,
                <br className="hidden md:block" />
                every step of the way
              </h2>
  
              <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                Payroll and compliance challenges don't follow a 9-to-5 schedule—so neither do we.
                We're your "boots on the ground" in 85+ countries, ensuring your business stays compliant
                and operates smoothly wherever you grow.
              </p>
  
              {/* Services below heading */}
              <div className="mt-10 space-y-6">
                {services.map((service, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-purple-500 text-white flex items-center justify-center shadow-md">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-base sm:text-lg leading-tight">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-gray-300 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    {index < services.length - 1 && (
                      <div className="mt-6 border-t border-white/10" />
                    )}
                  </div>
                ))}
              </div>
            </div>
  
            {/* RIGHT → photo only */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
                alt="Expert support professional"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  