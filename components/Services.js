/**
 * components/Services.js
 * Editorial service grid with stronger visual hierarchy and reveal animation.
 */

import Link from 'next/link';
import { useRef } from 'react';
import {
  FaArrowRight,
  FaCarBattery,
  FaCarSide,
  FaClipboardCheck,
  FaCrosshairs,
  FaDotCircle,
  FaOilCan,
  FaShieldAlt,
  FaSnowflake,
  FaTools,
} from 'react-icons/fa';
import useScrollReveal from './useScrollReveal';

const services = [
  {
    icon: FaTools,
    title: 'Engine Repair',
    desc: 'Complete diagnostics, overhaul support, and performance correction for engines that need careful hands.',
    price: 'Starting Rs 2,500',
    badge: 'Most Popular',
    meta: 'Powertrain',
  },
  {
    icon: FaOilCan,
    title: 'Oil Change',
    desc: 'Synthetic and semi-synthetic oil service with filter replacement and clean, quick turnaround.',
    price: 'Starting Rs 699',
    badge: 'Quick Job',
    meta: 'Maintenance',
  },
  {
    icon: FaCarSide,
    title: 'Full Car Wash',
    desc: 'Interior and exterior cleanup designed to make the vehicle feel freshly handed over.',
    price: 'Starting Rs 499',
    badge: null,
    meta: 'Detailing',
  },
  {
    icon: FaDotCircle,
    title: 'Tyre Service',
    desc: 'Balancing, rotation, puncture work, and tyre health checks for daily driving confidence.',
    price: 'Starting Rs 199',
    badge: null,
    meta: 'Road Grip',
  },
  {
    icon: FaSnowflake,
    title: 'AC Service',
    desc: 'Cooling performance checks, gas refilling, leak tracing, and cabin comfort restoration.',
    price: 'Starting Rs 1,200',
    badge: 'Summer Favorite',
    meta: 'Cabin Comfort',
  },
  {
    icon: FaShieldAlt,
    title: 'Brake Service',
    desc: 'Brake inspection, pad replacement, and safety-first checks before the vehicle leaves the bay.',
    price: 'Starting Rs 899',
    badge: null,
    meta: 'Safety',
  },
  {
    icon: FaCarBattery,
    title: 'Battery Service',
    desc: 'Battery testing, jump-start help, and replacement options when starting power drops.',
    price: 'Starting Rs 1,500',
    badge: null,
    meta: 'Electrical',
  },
  {
    icon: FaCrosshairs,
    title: 'Wheel Alignment',
    desc: 'Precision alignment to improve control, tyre life, and long-drive confidence.',
    price: 'Starting Rs 599',
    badge: null,
    meta: 'Precision',
  },
  {
    icon: FaClipboardCheck,
    title: 'General Service',
    desc: 'A full inspection and preventive service flow for customers who want a complete once-over.',
    price: 'Starting Rs 1,999',
    badge: 'Recommended',
    meta: 'Inspection',
  },
];

const experiencePillars = [
  {
    title: 'Owner Presence',
    desc: 'Customers feel the difference when answers come directly from the workshop.',
  },
  {
    title: 'Fast Booking Flow',
    desc: 'Strong CTA placement turns curiosity into calls and appointments quickly.',
  },
  {
    title: 'Visual Proof',
    desc: 'Real imagery makes the service feel trustworthy before the first visit.',
  },
];

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  const direction =
    index % 3 === 0 ? 'reveal-left' : index % 3 === 1 ? 'reveal-up' : 'reveal-right';

  return (
    <article
      className={`reveal ${direction} group panel-luxe relative overflow-hidden rounded-[1.75rem] p-5 sm:p-6`}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-brand-orange/18 via-brand-orange/6 to-transparent" />
      <div className="absolute -right-10 top-10 h-28 w-28 rounded-full bg-brand-orange/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />

      <div className="relative z-10">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="font-condensed text-[0.72rem] uppercase tracking-[0.28em] text-brand-orange">
              {service.meta}
            </p>
            <h3 className="mt-2 font-display text-[1.65rem] leading-none text-white sm:text-[1.9rem]">
              {service.title}
            </h3>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-orange/25 bg-brand-orange/10 text-brand-orange transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
            <Icon size={22} />
          </div>
        </div>

        <p className="text-sm leading-relaxed text-gray-400 sm:min-h-[72px]">
          {service.desc}
        </p>

        <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-gray-500">
              Service Starting
            </p>
            <p className="mt-1 font-condensed text-lg uppercase tracking-[0.14em] text-brand-orange">
              {service.price}
            </p>
          </div>

          <Link
            href={`/booking?service=${encodeURIComponent(service.title)}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#2A3550] px-4 py-2.5 text-xs font-condensed uppercase tracking-[0.18em] text-gray-300 transition-all duration-300 group-hover:border-brand-orange group-hover:text-brand-orange sm:w-auto"
          >
            Book Now
            <FaArrowRight size={10} />
          </Link>
        </div>

        {service.badge ? (
          <span className="mt-5 inline-flex rounded-full border border-brand-orange/25 bg-brand-orange/12 px-3 py-1 text-[0.68rem] font-condensed uppercase tracking-[0.24em] text-brand-orange">
            {service.badge}
          </span>
        ) : null}
      </div>
    </article>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, { threshold: 0.12 });

  return (
    <section id="services" ref={sectionRef} className="section-shell relative overflow-hidden bg-[#0A0F1A] py-24">
      <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-brand-amber/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal reveal-down mb-14 text-center sm:mb-16">
          <p className="font-condensed text-sm uppercase tracking-[0.3em] text-brand-orange">
            What We Offer
          </p>
          <h2 className="section-title mt-3 text-4xl text-white sm:text-6xl">
            SERVICES THAT LOOK AS PREMIUM AS THEY FEEL
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-400">
            Customers should feel a strong first impression here, then immediately understand what
            the workshop can do. This section is built to sell confidence, clarity, and action.
          </p>
        </div>

        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {experiencePillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`reveal panel-luxe rounded-[1.5rem] p-5 ${
                index % 3 === 0 ? 'reveal-left' : index % 3 === 1 ? 'reveal-up' : 'reveal-right'
              }`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <p className="font-condensed text-[0.72rem] uppercase tracking-[0.28em] text-brand-orange">
                Signature Cue
              </p>
              <h3 className="mt-2 text-xl font-medium text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{pillar.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className="reveal reveal-up mt-12">
          <div className="panel-luxe flex flex-col items-start justify-between gap-5 rounded-[2rem] px-6 py-6 sm:px-8 lg:flex-row lg:items-center">
            <div>
              <p className="font-condensed text-[0.72rem] uppercase tracking-[0.28em] text-brand-orange">
                Need a recommendation?
              </p>
              <h3 className="mt-2 font-display text-3xl text-white sm:text-4xl">
                BOOK A FREE INSPECTION FIRST.
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
                If the customer is unsure, the page should still feel easy. A premium UI works best
                when the next step is obvious and low-friction.
              </p>
            </div>

            <Link href="/booking" className="btn-orange inline-flex w-full items-center justify-center gap-3 whitespace-nowrap lg:w-auto">
              Start Booking
              <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
