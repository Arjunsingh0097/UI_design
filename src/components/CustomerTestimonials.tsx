'use client';

import { useState } from 'react';

export default function CustomerTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Kasia Czarkowska",
      title: "Executive Assistant to the CEO at TelXira",
      initials: "KC",
      headline: "...crucial for expanding outside of Switzerland.",
      text: "Native Teams' expertise in global employment, compliance, and HR administration gave us the necessary support to hire talent abroad and expand global operations. Their easy onboarding process was crucial for expanding outside of Switzerland.",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      quoteColor: "text-black"
    },
    {
      id: 2,
      name: "Karla Tomić",
      title: "CEO at Atrex Group",
      initials: "KT",
      headline: "...renewed our focus and efficiency",
      text: "As we expanded across multiple countries, managing compliance with local regulations and providing local benefits became a challenge. By collaborating with Native Teams, our company positioned itself to concentrate on our mission with renewed focus and efficiency.",
      bgColor: "bg-gray-900",
      textColor: "text-white",
      quoteColor: "text-white"
    },
    {
      id: 3,
      name: "Sebastian Vukosic",
      title: "CEO at Advising Solutions",
      initials: "SV",
      headline: "They share our commitment to quality...",
      text: "We saw personally Native Teams' dedication to providing great service. They share our commitment to quality and understand the requirements of global businesses. Our employees have benefited from their suite of services, which includes EOR solutions.",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      quoteColor: "text-black"
    },
    {
      id: 4,
      name: "Maria Rodriguez",
      title: "HR Director at GlobalTech",
      initials: "MR",
      headline: "Seamless integration across borders",
      text: "The platform's intuitive design and comprehensive compliance features have transformed how we manage our international workforce. It's been a game-changer for our global expansion strategy.",
      bgColor: "bg-gray-900",
      textColor: "text-white",
      quoteColor: "text-white"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What our customers say
          </h2>
          <p className="text-xl text-gray-300">
            Trusted by companies worldwide
          </p>
        </div>
      </div>

      {/* Testimonials Carousel - Full Width */}
      <div className="relative w-full bg-black">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="w-1/3 flex-shrink-0 px-2">
                <div className={`${testimonial.bgColor} rounded-2xl p-8 shadow-lg h-96 flex flex-col justify-between`}>
                  {/* Quote Icon */}
                  <div className={`${testimonial.quoteColor} text-6xl font-bold mb-4`}>
                    &quot;
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    {/* Headline */}
                    <h3 className={`${testimonial.textColor} text-lg font-bold mb-4`}>
                      {testimonial.headline}
                    </h3>
                    
                    {/* Testimonial Text */}
                    <p className={`${testimonial.textColor} text-sm leading-relaxed mb-6`}>
                      {testimonial.text}
                    </p>
                  </div>
                  
                  {/* Author Details */}
                  <div className="flex items-center space-x-4">
                    {/* Avatar */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${
                      testimonial.bgColor === 'bg-white' ? 'bg-gray-200 text-gray-800' : 'bg-gray-700 text-white'
                    }`}>
                      {testimonial.initials}
                    </div>
                    
                    {/* Name and Title */}
                    <div>
                      <p className={`${testimonial.textColor} font-bold text-sm`}>
                        {testimonial.name}
                      </p>
                      <p className={`${testimonial.textColor} text-xs opacity-70`}>
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors duration-200 z-10"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors duration-200 z-10"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
    </section>
  );
}