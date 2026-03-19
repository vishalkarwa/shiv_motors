/**
 * components/FloatingButtons.js
 * Sticky floating action buttons for owner call and WhatsApp.
 */

import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { CONTACT_LINKS } from '../lib/siteDetails';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-5 z-50 flex flex-col items-center gap-3">
      <a
        href={CONTACT_LINKS.ownerWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-full
                   flex items-center justify-center shadow-lg
                   hover:scale-110 hover:shadow-xl transition-all duration-300"
        style={{ boxShadow: '0 4px 20px rgba(37,211,102,0.4)' }}
      >
        <FaWhatsapp size={22} className="text-white sm:text-[26px]" />
        <span
          className="absolute right-14 sm:right-16 bg-[#1A2235] text-white text-xs px-3 py-1.5
                     rounded-lg whitespace-nowrap opacity-0 sm:group-hover:opacity-100
                     transition-opacity duration-200 border border-[#2A3550] pointer-events-none"
        >
          WhatsApp Owner
        </span>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
      </a>

      <a
        href={CONTACT_LINKS.ownerCall}
        aria-label="Call Shiv Motors owner"
        className="group relative w-12 h-12 sm:w-14 sm:h-14 bg-brand-orange rounded-full
                   flex items-center justify-center shadow-lg
                   hover:scale-110 hover:shadow-orange transition-all duration-300"
      >
        <FaPhone size={18} className="text-white sm:text-[22px]" />
        <span
          className="absolute right-14 sm:right-16 bg-[#1A2235] text-white text-xs px-3 py-1.5
                     rounded-lg whitespace-nowrap opacity-0 sm:group-hover:opacity-100
                     transition-opacity duration-200 border border-[#2A3550] pointer-events-none"
        >
          Call Owner
        </span>
      </a>
    </div>
  );
}
