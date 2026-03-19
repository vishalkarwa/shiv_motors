/**
 * components/Hero.js
 * Full-screen hero with animated headline, workshop status badge,
 * call-to-action buttons, and a decorative background.
 */

import Link from 'next/link';
import { FaPhone, FaCalendarAlt, FaChevronDown, FaWrench } from 'react-icons/fa';
import WorkshopStatus from './WorkshopStatus';
import { CONTACT_LINKS, SITE_DETAILS } from '../lib/siteDetails';

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const highlights = [
    { value: SITE_DETAILS.foundedDate, label: 'Workshop Started' },
    { value: SITE_DETAILS.owner.name, label: 'Owner' },
    { value: SITE_DETAILS.manager.name, label: 'Manager' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, var(--hero-start) 0%, var(--hero-mid) 60%, var(--hero-end) 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249,115,22,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,115,22,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[140vw] h-[90vw] max-w-[800px] max-h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.08) 0%, transparent 70%)' }}
      />

      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-5"
        style={{
          background: 'linear-gradient(135deg, transparent 40%, #F97316 100%)',
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 60% 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-6">
              <WorkshopStatus />
            </div>

            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-white leading-none mb-4 animate-slide-up">
              SHIV
              <br />
              <span className="text-brand-orange" style={{ textShadow: '0 0 40px rgba(249,115,22,0.4)' }}>
                MOTORS
              </span>
            </h1>

            <p
              className="font-condensed text-xl sm:text-2xl text-gray-400 tracking-widest uppercase mb-6 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              {SITE_DETAILS.tagline}
            </p>

            <p
              className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              Honest vehicle repair and maintenance for drivers in {SITE_DETAILS.location.full}. Started on{' '}
              {SITE_DETAILS.foundedDate}, Shiv Motors is led by owner {SITE_DETAILS.owner.name} and
              manager {SITE_DETAILS.manager.name}.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <Link href="/booking" className="flex items-center justify-center gap-2 btn-orange text-base font-bold w-full sm:w-auto">
                <FaCalendarAlt />
                Book Service
              </Link>
              <a
                href={CONTACT_LINKS.ownerCall}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border w-full sm:w-auto
                           border-brand-orange text-brand-orange font-condensed
                           tracking-wider uppercase text-base
                           hover:bg-brand-orange/10 transition-all duration-300"
              >
                <FaPhone />
                Call Owner
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 sm:mt-12">
              {highlights.map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                  <p className="font-display text-lg sm:text-xl text-brand-orange">{stat.value}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-[0.25em] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-card animate-float">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-brand-orange/10 border-2 border-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaWrench className="text-brand-orange text-4xl" />
                  </div>
                  <h3 className="font-display text-2xl text-white">Local Vehicle Care</h3>
                  <p className="text-gray-400 text-sm mt-1">{SITE_DETAILS.location.full}</p>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {['Engine Repair', 'Oil Change', 'Tyre Service', 'AC Service', 'Brake Service', 'Full Wash', 'Wheel Align'].map((service) => (
                    <span
                      key={service}
                      className="text-xs bg-brand-orange/10 border border-brand-orange/30
                                 text-brand-orange px-3 py-1 rounded-full font-condensed tracking-wide"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-brand-orange" />
                  <span className="text-gray-300 text-sm">{SITE_DETAILS.tagline}</span>
                </div>
              </div>

              <div
                className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-brand-orange text-white
                           rounded-full w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center
                           justify-center shadow-orange text-center animate-pulse-slow"
              >
                <span className="font-display text-lg sm:text-xl leading-none">Best</span>
                <span className="text-[10px] sm:text-xs">In Area</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-brand-orange transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <FaChevronDown size={20} />
      </button>
    </section>
  );
}
