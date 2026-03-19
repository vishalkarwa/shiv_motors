/**
 * components/Hero.js
 * Cinematic hero with media collage, trust cues, and primary booking actions.
 */

import Link from 'next/link';
import {
  FaArrowRight,
  FaCalendarAlt,
  FaChevronDown,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaPlay,
  FaStar,
  FaWhatsapp,
  FaWrench,
} from 'react-icons/fa';
import WorkshopStatus from './WorkshopStatus';
import { CONTACT_LINKS, GALLERY_IMAGES, GALLERY_VIDEOS, SITE_DETAILS } from '../lib/siteDetails';

const trustNotes = [
  'Owner-led communication',
  'Real workshop photos',
  'WhatsApp-first support',
  'Same-day inspection feel',
];

const highlightCards = [
  { value: SITE_DETAILS.foundedDate, label: 'Established' },
  { value: SITE_DETAILS.owner.name, label: 'Owner-Led' },
  { value: '11+ Media', label: 'Real Workshop Views' },
];

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="section-shell noise-overlay relative min-h-screen overflow-hidden bg-hero-gradient"
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(249,115,22,0.24), transparent 28%),
            radial-gradient(circle at 82% 22%, rgba(251,146,60,0.12), transparent 24%),
            linear-gradient(rgba(249,115,22,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,115,22,0.08) 1px, transparent 1px)
          `,
          backgroundSize: 'auto, auto, 72px 72px, 72px 72px',
        }}
      />

      <div className="absolute left-[-10rem] top-24 h-80 w-80 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="absolute right-[-8rem] top-1/3 h-72 w-72 rounded-full bg-brand-amber/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-28 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-2xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="eyebrow-track">
                Local Workshop In Chitawa
              </span>
              <div className="panel-luxe inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-gray-300">
                <WorkshopStatus showNextOpen={false} />
              </div>
            </div>

            <h1 className="hero-title-glow font-display text-[4.45rem] leading-[0.92] text-white sm:text-7xl lg:text-[7.5rem] xl:text-[8.5rem]">
              <span className="hero-word hero-word-left block">SHIV</span>
              <span className="hero-word hero-word-right block text-brand-orange">MOTORS</span>
              <span className="hero-word hero-word-up mt-3 block text-[0.36em] tracking-[0.22em] text-white/80 sm:mt-4 sm:tracking-[0.34em]">
                CHITAWA
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-gray-300 sm:mt-6 sm:text-lg">
              Vehicle repair, washing, tyre work, AC service, and general maintenance in Chitawa.
              Call us directly, message on WhatsApp, or book your service online.
            </p>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/booking"
                className="btn-orange inline-flex min-h-[3.5rem] w-full items-center justify-center gap-3 text-base font-bold sm:w-auto"
              >
                <FaCalendarAlt />
                Book Service Now
                <FaArrowRight className="text-sm" />
              </Link>

              <a
                href={CONTACT_LINKS.ownerCall}
                className="inline-flex min-h-[3.5rem] w-full items-center justify-center gap-3 rounded-full border border-brand-orange/60 px-6 py-3 font-condensed text-base uppercase tracking-[0.16em] text-brand-orange transition-all duration-300 hover:bg-brand-orange/10 hover:shadow-orange sm:w-auto"
              >
                <FaPhone />
                Call Owner
              </a>

              <a
                href={CONTACT_LINKS.ownerWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[3.5rem] w-full items-center justify-center gap-3 rounded-full border border-[#2A3550] px-6 py-3 font-condensed text-base uppercase tracking-[0.16em] text-gray-200 transition-all duration-300 hover:border-[#25D366] hover:text-[#25D366] sm:w-auto"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

              <a
                href={CONTACT_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[3.5rem] w-full items-center justify-center gap-3 rounded-full border border-pink-500/50 px-6 py-3 font-condensed text-base uppercase tracking-[0.16em] text-gray-200 transition-all duration-300 hover:border-pink-400 hover:bg-pink-500/10 hover:text-pink-300 sm:w-auto"
              >
                <FaInstagram />
                Instagram
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
              {highlightCards.map((item) => (
                <div key={item.label} className="panel-luxe rounded-[1.35rem] px-5 py-4">
                  <p className="font-display text-2xl tracking-wide text-brand-orange sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-gray-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              {trustNotes.map((note) => (
                <span key={note} className="hero-chip">
                  {note}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[36rem]">
              <div className="panel-luxe group relative overflow-hidden rounded-[2rem] p-3 shadow-card sm:p-4">
                <div className="image-sheen relative aspect-[4/5] overflow-hidden rounded-[1.55rem]">
                  <img
                    src={GALLERY_IMAGES[6].src}
                    alt="Shiv Motors workshop exterior"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070C15] via-[#070C15]/30 to-transparent" />

                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-xs font-condensed uppercase tracking-[0.24em] text-white sm:left-6 sm:top-6">
                    <FaMapMarkerAlt className="text-brand-orange" />
                    Real Workshop View
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                    <div className="mb-3 flex items-center gap-1.5 text-[0.72rem] uppercase tracking-[0.28em] text-brand-orange">
                      <FaWrench />
                      Real workshop. Real people.
                    </div>
                    <h2 className="font-display text-3xl leading-none text-white sm:text-5xl">
                      SEE THE PLACE BEFORE YOU VISIT.
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-300 sm:text-base">
                      Photos, walkthrough video, and direct owner contact make it easy to know who
                      you are calling and where your vehicle is going.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:hidden">
                <div className="panel-luxe rounded-[1.35rem] p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={SITE_DETAILS.owner.photo}
                      alt={SITE_DETAILS.owner.name}
                      className="h-14 w-14 rounded-2xl object-cover"
                    />
                    <div>
                      <p className="font-condensed text-[0.72rem] uppercase tracking-[0.24em] text-brand-orange">
                        Owner-Led
                      </p>
                      <p className="text-sm font-medium text-white">{SITE_DETAILS.owner.name}</p>
                      <p className="text-xs text-gray-400">Direct support from the workshop floor.</p>
                    </div>
                  </div>
                </div>

                <div className="panel-luxe rounded-[1.35rem] p-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-20 overflow-hidden rounded-xl border border-white/10">
                      <img
                        src={GALLERY_VIDEOS[0].poster}
                        alt={GALLERY_VIDEOS[0].title}
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/45 text-white">
                        <FaPlay size={12} className="ml-0.5" />
                      </span>
                    </div>
                    <div>
                      <p className="font-condensed text-[0.72rem] uppercase tracking-[0.24em] text-brand-orange">
                        Walkthrough Media
                      </p>
                      <p className="text-sm text-white">{GALLERY_VIDEOS[0].title}</p>
                      <p className="text-xs text-gray-400">Video-backed confidence on first visit.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="panel-luxe absolute left-0 top-8 hidden w-52 -translate-x-12 rounded-[1.5rem] p-4 sm:block float-slow">
                <div className="mb-3 flex items-center gap-1 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} size={11} />
                  ))}
                </div>
                <p className="font-condensed text-xs uppercase tracking-[0.24em] text-brand-orange">
                  No Stock Photos
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  Real workshop photos and real contact details make the website feel genuine.
                </p>
              </div>

              <div className="panel-luxe absolute bottom-20 right-0 hidden w-48 rounded-[1.5rem] p-3 sm:block sm:w-56 sm:p-4 drift">
                <div className="flex items-center gap-3">
                  <img
                    src={SITE_DETAILS.owner.photo}
                    alt={SITE_DETAILS.owner.name}
                    className="h-14 w-14 rounded-2xl object-cover sm:h-16 sm:w-16"
                  />
                  <div>
                    <p className="font-condensed text-[0.72rem] uppercase tracking-[0.24em] text-brand-orange">
                      Owner-Led
                    </p>
                    <p className="text-sm font-medium text-white">{SITE_DETAILS.owner.name}</p>
                    <p className="text-xs text-gray-400">Direct support from the workshop floor.</p>
                  </div>
                </div>
              </div>

              <div className="panel-luxe absolute bottom-0 left-5 hidden items-center gap-3 rounded-[1.35rem] p-3 sm:flex sm:left-10 sm:p-4">
                <div className="relative h-14 w-20 overflow-hidden rounded-xl border border-white/10">
                  <img
                    src={GALLERY_VIDEOS[0].poster}
                    alt={GALLERY_VIDEOS[0].title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/45 text-white">
                    <FaPlay size={12} className="ml-0.5" />
                  </span>
                </div>
                <div>
                  <p className="font-condensed text-[0.72rem] uppercase tracking-[0.24em] text-brand-orange">
                    Walkthrough Media
                  </p>
                  <p className="text-sm text-white">{GALLERY_VIDEOS[0].title}</p>
                  <p className="text-xs text-gray-400">Video-backed confidence on first visit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 text-gray-400 transition-colors hover:text-brand-orange sm:block"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-condensed text-[0.68rem] uppercase tracking-[0.32em]">
            Explore
          </span>
          <FaChevronDown size={18} className="animate-bounce" />
        </div>
      </button>
    </section>
  );
}
