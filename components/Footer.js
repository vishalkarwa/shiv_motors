/**
 * components/Footer.js
 * Footer with logo, links, services, and updated contact details.
 */

import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaWrench,
} from 'react-icons/fa';
import { CONTACT_LINKS, SITE_DETAILS } from '../lib/siteDetails';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Book Service', href: '/booking' },
];

const serviceLinks = [
  'Engine Repair',
  'Oil Change',
  'Tyre Service',
  'AC Service',
  'Brake Service',
  'Full Car Wash',
  'Battery Replacement',
  'Wheel Alignment',
];

export default function Footer() {
  const socials = [
    { icon: <FaFacebook />, href: '#', label: 'Facebook' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaYoutube />, href: '#', label: 'YouTube' },
    { icon: <FaWhatsapp />, href: CONTACT_LINKS.ownerWhatsApp, label: 'WhatsApp' },
  ];

  const scrollTo = (event, href) => {
    if (href.startsWith('#')) {
      event.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#070C15] border-t border-[#2A3550]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-orange rounded-lg flex items-center justify-center">
                <FaWrench className="text-white text-lg" />
              </div>
              <div>
                <span className="font-display text-2xl text-white tracking-wider">SHIV</span>
                <span className="font-display text-2xl text-brand-orange tracking-wider"> MOTORS</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {SITE_DETAILS.tagline} in {SITE_DETAILS.location.full}. Started on {SITE_DETAILS.foundedDate}{' '}
              with owner-led, honest vehicle care.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-[#1A2235] border border-[#2A3550]
                             flex items-center justify-center text-gray-400
                             hover:border-brand-orange hover:text-brand-orange
                             transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-condensed text-white tracking-wider uppercase text-base mb-5 border-b border-[#2A3550] pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(event) => scrollTo(event, link.href)}
                    className="text-gray-400 text-sm hover:text-brand-orange
                               transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/40 group-hover:bg-brand-orange transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-condensed text-white tracking-wider uppercase text-base mb-5 border-b border-[#2A3550] pb-2">
              Our Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href={`/booking?service=${encodeURIComponent(service)}`}
                    className="text-gray-400 text-sm hover:text-brand-orange
                               transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/40 group-hover:bg-brand-orange transition-colors" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-condensed text-white tracking-wider uppercase text-base mb-5 border-b border-[#2A3550] pb-2">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <FaMapMarkerAlt className="text-brand-orange mt-0.5 flex-shrink-0" />
                <p className="text-gray-400">
                  {SITE_DETAILS.location.area}
                  <br />
                  {SITE_DETAILS.location.city}
                </p>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <FaPhone className="text-brand-orange flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p className="text-white">{SITE_DETAILS.owner.name} (Owner)</p>
                  <a href={CONTACT_LINKS.ownerCall} className="block hover:text-brand-orange transition-colors">
                    Call: {SITE_DETAILS.owner.callDisplay}
                  </a>
                  <a
                    href={CONTACT_LINKS.ownerWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-brand-orange transition-colors"
                  >
                    WhatsApp: {SITE_DETAILS.owner.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <FaWhatsapp className="text-brand-orange flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p className="text-white">{SITE_DETAILS.manager.name} (Manager)</p>
                  <a href={CONTACT_LINKS.managerCall} className="block hover:text-brand-orange transition-colors">
                    Call: {SITE_DETAILS.manager.callDisplay}
                  </a>
                  <a
                    href={CONTACT_LINKS.managerWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-brand-orange transition-colors"
                  >
                    WhatsApp: {SITE_DETAILS.manager.whatsappDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2A3550] py-6">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                     flex flex-col md:flex-row items-center justify-between gap-3"
        >
          <p className="text-gray-600 text-sm">Copyright {new Date().getFullYear()} Shiv Motors. All rights reserved.</p>
          <p className="text-gray-700 text-xs">Built with Next.js and MongoDB</p>
        </div>
      </div>
    </footer>
  );
}
