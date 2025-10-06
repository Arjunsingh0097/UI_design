"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GrowingTogether() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [direction, setDirection] = useState(0);

  // Sample data for the carousel - 4 photos
  const slides = [
    {
      id: 1,
      title: "Global Team Management",
      description: "Hire and manage talent across 180+ countries",
      bgColor: "from-blue-100 via-indigo-100 to-blue-200",
      icon: "🌍",
      image: "./images/maincarban.png"
    },
    {
      id: 2,
      title: "Seamless Global Payroll",
      description: "Pay your team in 50+ currencies, effortlessly",
      bgColor: "from-green-100 via-emerald-100 to-green-200",
      icon: "💰",
      image: "/images/girlworkingonlaptop.png"
    },
    {
      id: 3,
      title: "Compliance & Legal Support",
      description: "Stay 100% compliant with local regulations",
      bgColor: "from-purple-100 via-violet-100 to-purple-200",
      icon: "⚖️",
      image: "./images/girtypingonbeach.png"
    },
    {
      id: 4,
      title: "Integrated HR Solutions",
      description: "All your HR needs in one powerful platform",
      bgColor: "from-orange-100 via-amber-100 to-orange-200",
      icon: "🏢",
      image: "./images/maincarban.png"
    },
  ];

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
            Growing together,{" "}
            <span className="bg-gradient-to-r from-teal-500 to-emerald-400 bg-clip-text text-transparent">
              globally
            </span>
          </h2>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] flex gap-6">
          {/* Main Photo Block - 70% width */}
          <div className="flex-[0_0_70%] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="h-full relative overflow-hidden"
              >
                {/* Background Image */}
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side Preview Block - 30% width */}
          <div className="flex-[0_0_30%] rounded-3xl overflow-hidden">
            <div className="h-full relative">
              {/* Background Image for Preview */}
              <img 
                src={slides[(currentSlide + 1) % slides.length].image} 
                alt={slides[(currentSlide + 1) % slides.length].title}
                className="w-full h-full object-cover opacity-60 rounded-3xl"
              />
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 backdrop-blur-md hover:bg-white/50 rounded-full flex items-center justify-center text-gray-800 transition z-10"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 backdrop-blur-md hover:bg-white/50 rounded-full flex items-center justify-center text-gray-800 transition z-10"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mute Button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-4 right-4 w-10 h-10 bg-white/30 backdrop-blur-md hover:bg-white/50 rounded-full flex items-center justify-center text-gray-800 transition z-10"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? "🔇" : "🔊"}
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`h-3 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "bg-teal-500 w-10"
                  : "bg-gray-300 w-3 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}