'use client';

import { useState, useEffect } from 'react';

export default function Carousel({ items, autoPlay = true, autoPlayInterval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isAutoPlaying, items.length, autoPlayInterval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(autoPlay), 1000);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(autoPlay), 1000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(autoPlay), 1000);
  };

  return (
    <div className="w-full">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl bg-brand-light-blue border border-brand-medium-blue">
        {/* Slides */}
        <div className="relative h-96 md:h-[500px]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="h-full bg-gradient-to-br from-brand-medium-blue via-brand-light-blue to-brand-soft-purple p-8 md:p-12 flex flex-col justify-between">
                {/* Content */}
                <div>
                  <div className="inline-block bg-brand-soft-purple bg-opacity-20 border border-brand-soft-purple rounded-full px-4 py-2 mb-4">
                    <span className="text-xs font-semibold text-brand-dark uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-brand-dark mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-brand-text-muted text-sm md:text-base leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>

                {/* Stats/Results */}
                {item.stats && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-brand-soft-purple">
                    {item.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-2xl md:text-3xl font-bold text-brand-soft-purple mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-brand-text-muted uppercase tracking-wider font-semibold">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="carousel-nav-button absolute left-6 top-1/2 -translate-y-1/2 z-10 hover:left-8 transition-all"
          aria-label="Previous slide"
        >
          <span className="text-xl">←</span>
        </button>
        <button
          onClick={goToNext}
          className="carousel-nav-button absolute right-6 top-1/2 -translate-y-1/2 z-10 hover:right-8 transition-all"
          aria-label="Next slide"
        >
          <span className="text-xl">→</span>
        </button>

        {/* Slide Counter */}
        <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 px-4 py-2 rounded-full text-xs font-semibold text-brand-dark z-10">
          {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </div>
      </div>

      {/* Indicators */}
      <div className="carousel-indicators mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
