/**
 * components/SignatureExperience.js
 * A custom showcase section built to make the homepage feel more premium and intentional.
 */

import Link from 'next/link';
import {
  FaArrowRight,
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaShieldAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import { useRef } from 'react';
import { CONTACT_LINKS, GALLERY_IMAGES, SITE_DETAILS, TEAM_MEMBERS } from '../lib/siteDetails';
import useScrollReveal from './useScrollReveal';

const processSteps = [
  {
    step: '01',
    title: 'Reach Out Fast',
    desc: 'Call, WhatsApp, or use the booking page without hunting around the site.',
  },
  {
    step: '02',
    title: 'See The Workshop',
    desc: 'Real photos and video give customers confidence before they arrive.',
  },
  {
    step: '03',
    title: 'Get Clear Answers',
    desc: 'The owner and manager stay visible so communication feels direct and personal.',
  },
];

const promises = [
  {
    icon: FaPhone,
    title: 'Direct owner access',
    desc: 'Important contact actions stay visible throughout the page, so trust is immediate.',
  },
  {
    icon: FaClock,
    title: 'Fast decision flow',
    desc: 'Strong hierarchy and short CTAs help visitors act quickly instead of browsing endlessly.',
  },
  {
    icon: FaShieldAlt,
    title: 'Confidence before arrival',
    desc: 'The website now sells the workshop atmosphere, not just the booking form.',
  },
];

export default function SignatureExperience() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section ref={sectionRef} className="section-shell relative overflow-hidden bg-[#111827] py-24">
      <div className="absolute left-[-6rem] top-20 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="absolute right-[-4rem] bottom-0 h-80 w-80 rounded-full bg-brand-amber/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="reveal reveal-left max-w-3xl">
            <p className="font-condensed text-sm uppercase tracking-[0.3em] text-brand-orange">
              Signature Experience
            </p>
            <h2 className="section-title mt-3 text-4xl text-white sm:text-6xl">
              A HOME PAGE PEOPLE REMEMBER AFTER ONE SCROLL.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-gray-400 sm:mt-4">
              This section is designed to feel less like a normal workshop site and more like a
              crafted brand experience. It gives visitors a reason to stay, explore, and trust.
            </p>
          </div>

          <div className="reveal reveal-right panel-luxe w-full max-w-md rounded-[1.6rem] px-5 py-4">
            <p className="font-condensed text-[0.72rem] uppercase tracking-[0.28em] text-brand-orange">
              Designed For Conversion
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">
              Strong visuals, real workshop proof, and direct contact cues work together to make
              this site feel much more expensive than a standard local business page.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="reveal reveal-left panel-luxe relative overflow-hidden rounded-[2rem] p-3 sm:p-4">
            <div className="image-sheen relative overflow-hidden rounded-[1.6rem]">
              <img
                src={GALLERY_IMAGES[1].src}
                alt="Service bay at Shiv Motors"
                className="h-[24rem] w-full object-cover sm:h-[36rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070C15] via-[#070C15]/30 to-transparent" />

              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-xs font-condensed uppercase tracking-[0.24em] text-white">
                <FaMapMarkerAlt className="text-brand-orange" />
                {SITE_DETAILS.location.area}
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                <p className="font-condensed text-[0.72rem] uppercase tracking-[0.28em] text-brand-orange">
                  From First Call To Final Key Handover
                </p>
                <h3 className="mt-3 font-display text-3xl leading-none text-white sm:text-5xl">
                  THE WORKSHOP SHOULD FEEL PREMIUM ONLINE TOO.
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
                  Real service-bay imagery, strong typography, and confident section pacing give the
                  site the kind of presence that makes people say it looks custom-built.
                </p>

                <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-3">
                  {processSteps.map((item) => (
                    <div
                      key={item.step}
                      className="rounded-[1.2rem] border border-white/10 bg-black/35 p-3.5 backdrop-blur-sm sm:p-4"
                    >
                      <p className="font-condensed text-[0.72rem] uppercase tracking-[0.28em] text-brand-orange">
                        Step {item.step}
                      </p>
                      <h4 className="mt-2 text-base font-medium text-white">{item.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-gray-300">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            <div className="reveal reveal-right panel-luxe rounded-[2rem] p-5 sm:p-6">
              <p className="font-condensed text-[0.72rem] uppercase tracking-[0.28em] text-brand-orange">
                Why This Feels Better
              </p>
              <div className="mt-5 space-y-4">
                {promises.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-3 rounded-[1.25rem] border border-white/6 bg-white/[0.02] p-4 sm:gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="reveal reveal-up panel-luxe overflow-hidden rounded-[2rem]">
              <div className="grid sm:grid-cols-[0.84fr_1.16fr]">
                <img
                  src={TEAM_MEMBERS[0].photo}
                  alt={TEAM_MEMBERS[0].name}
                  className="h-full min-h-[16rem] w-full object-cover"
                />
                <div className="p-6">
                  <p className="font-condensed text-[0.72rem] uppercase tracking-[0.28em] text-brand-orange">
                    Workshop Leadership
                  </p>
                  <h3 className="mt-2 font-display text-3xl text-white">
                    A FACE CUSTOMERS CAN REMEMBER.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    Showing the person behind Shiv Motors makes the website feel grounded, personal,
                    and far more credible than a generic business page.
                  </p>
                  <div className="mt-5">
                    <p className="text-white">{SITE_DETAILS.owner.name}</p>
                    <p className="text-sm text-gray-400">{SITE_DETAILS.owner.role}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal reveal-right panel-luxe rounded-[2rem] p-5 sm:p-6">
              <p className="font-condensed text-[0.72rem] uppercase tracking-[0.28em] text-brand-orange">
                Ready To Turn Visitors Into Customers?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                Keep the premium feel all the way to the action point with direct contact and a clear booking CTA.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/booking" className="btn-orange inline-flex w-full items-center justify-center gap-3 sm:w-auto">
                  Book Service
                  <FaArrowRight size={12} />
                </Link>
                <a
                  href={CONTACT_LINKS.ownerWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#2A3550] px-6 py-3 font-condensed uppercase tracking-[0.16em] text-gray-200 transition-colors hover:border-[#25D366] hover:text-[#25D366] sm:w-auto"
                >
                  <FaWhatsapp />
                  WhatsApp Owner
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
