/**
 * components/Services.js
 * Responsive grid of service cards with hover effects.
 */

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const services = [
  {
    icon: '🔧',
    title: 'Engine Repair',
    desc: 'Complete engine diagnostics, overhaul, and rebuild by certified mechanics.',
    price: 'Starting ₹2,500',
    badge: 'Most Popular',
  },
  {
    icon: '🛢️',
    title: 'Oil Change',
    desc: 'Full synthetic & semi-synthetic oil change with filter replacement.',
    price: 'Starting ₹699',
    badge: null,
  },
  {
    icon: '🚗',
    title: 'Full Car Wash',
    desc: 'Interior + exterior deep clean, polish, and wax for showroom-ready results.',
    price: 'Starting ₹499',
    badge: null,
  },
  {
    icon: '🛞',
    title: 'Tyre Service',
    desc: 'Tyre rotation, balancing, puncture repair, and replacement for all vehicle types.',
    price: 'Starting ₹199',
    badge: null,
  },
  {
    icon: '❄️',
    title: 'AC Service',
    desc: 'Gas refilling, leak detection, compressor check, and cabin filter replacement.',
    price: 'Starting ₹1,200',
    badge: 'Summer Special',
  },
  {
    icon: '🔴',
    title: 'Brake Service',
    desc: 'Brake pad/disc inspection, replacement, and hydraulic system flush.',
    price: 'Starting ₹899',
    badge: null,
  },
  {
    icon: '🔋',
    title: 'Battery Service',
    desc: 'Battery testing, jump-start, and genuine battery replacement.',
    price: 'Starting ₹1,500',
    badge: null,
  },
  {
    icon: '⚙️',
    title: 'Wheel Alignment',
    desc: '4-wheel computerised alignment and suspension geometry correction.',
    price: 'Starting ₹599',
    badge: null,
  },
  {
    icon: '🔍',
    title: 'General Service',
    desc: 'Comprehensive 35-point vehicle inspection and preventive maintenance.',
    price: 'Starting ₹1,999',
    badge: 'Recommended',
  },
];

function ServiceCard({ service, index }) {
  return (
    <div
      className="group relative glass-card rounded-2xl p-6 
                 hover:border-brand-orange/40 hover:shadow-orange-sm
                 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Badge */}
      {service.badge && (
        <span className="absolute top-4 right-4 text-xs bg-brand-orange text-white 
                         px-2 py-0.5 rounded-full font-condensed tracking-wide">
          {service.badge}
        </span>
      )}

      {/* Icon */}
      <div className="w-14 h-14 bg-brand-orange/10 border border-brand-orange/20 
                      rounded-xl flex items-center justify-center text-3xl mb-4
                      group-hover:bg-brand-orange/20 group-hover:border-brand-orange/40 
                      transition-all duration-300">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="font-display text-xl text-white tracking-wide mb-2">
        {service.title}
      </h3>

      {/* Desc */}
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {service.desc}
      </p>

      {/* Price + CTA */}
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-brand-orange font-condensed text-sm tracking-wide">
          {service.price}
        </span>
        <Link
          href={`/booking?service=${encodeURIComponent(service.title)}`}
          className="text-xs text-gray-400 border border-[#2A3550] px-3 py-1.5 rounded-full
                     group-hover:border-brand-orange group-hover:text-brand-orange 
                     transition-all duration-300 font-condensed tracking-wide"
        >
          Book →
        </Link>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r 
                      from-brand-orange to-brand-amber rounded-full
                      group-hover:w-full transition-all duration-500" />
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);

  // Scroll-reveal animation using IntersectionObserver
  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-[#0A0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <p className="font-condensed text-brand-orange tracking-[0.3em] uppercase text-sm mb-3">
            What We Offer
          </p>
          <h2 className="section-title text-5xl sm:text-6xl text-white mb-4">
            OUR SERVICES
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Expert auto care for every need. All services performed by certified 
            mechanics using quality parts and the latest equipment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={service.title} className="reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 reveal px-2">
          <p className="text-gray-400 mb-4">Not sure what your vehicle needs?</p>
          <Link href="/booking" className="btn-orange inline-flex items-center gap-2">
            Book a Free Inspection
          </Link>
        </div>
      </div>
    </section>
  );
}
