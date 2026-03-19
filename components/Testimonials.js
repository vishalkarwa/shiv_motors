/**
 * components/Testimonials.js
 * Large featured testimonials with a quote-forward design.
 */

import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote:
      "I've tried at least 5 different workshops in this city, and Shiv Motors is hands down the best. The mechanics genuinely care about doing the job right, not just fast. My car's engine hasn't run this smoothly in years.",
    name: 'Vikram Joshi',
    title: 'Software Engineer · Swift Dzire Owner',
    avatar: 'VJ',
    color: 'from-orange-600 to-orange-400',
  },
  {
    quote:
      "When my AC broke down in peak summer, Shiv Motors fit me in the same day, fixed it in 3 hours, and charged exactly what they quoted. Zero surprises. That kind of honesty is rare. They've earned a customer for life.",
    name: 'Ananya Pillai',
    title: 'Doctor · Hyundai Creta Owner',
    avatar: 'AP',
    color: 'from-blue-600 to-blue-400',
  },
  {
    quote:
      "The online booking system is brilliant — I booked an oil change at midnight and got a confirmation by morning. Service was done in 45 minutes. This is how all workshops should operate.",
    name: 'Rohan Desai',
    title: 'Entrepreneur · Fortuner Owner',
    avatar: 'RD',
    color: 'from-green-600 to-green-400',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 bg-[#0A0F1A] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(249,115,22,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-condensed text-brand-orange tracking-[0.3em] uppercase text-sm mb-3">
            Customer Stories
          </p>
          <h2 className="section-title text-5xl sm:text-6xl text-white">
            TESTIMONIALS
          </h2>
        </div>

        {/* Featured testimonial */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-12 text-center relative border border-[#2A3550]"
             key={current}
             style={{ animation: 'fadeIn 0.4s ease-out' }}>
          {/* Quote icon */}
          <FaQuoteLeft className="text-brand-orange/30 text-5xl mx-auto mb-8" />

          {/* Quote text */}
          <blockquote className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-8 
                                  font-light italic">
            "{t.quote}"
          </blockquote>

          {/* Author */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.color}
                            flex items-center justify-center text-white font-bold text-lg`}>
              {t.avatar}
            </div>
            <div className="text-center sm:text-left">
              <p className="text-white font-medium">{t.name}</p>
              <p className="text-gray-500 text-sm">{t.title}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[#2A3550] flex items-center justify-center
                       text-gray-400 hover:border-brand-orange hover:text-brand-orange transition-all"
            aria-label="Previous"
          >
            <FaChevronLeft size={14} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-brand-orange' : 'w-2 bg-[#2A3550]'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[#2A3550] flex items-center justify-center
                       text-gray-400 hover:border-brand-orange hover:text-brand-orange transition-all"
            aria-label="Next"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
