/**
 * components/MarqueeStrip.js
 * Animated marquee band for key workshop highlights.
 */

import { SITE_DETAILS } from '../lib/siteDetails';

const marqueeItems = [
  SITE_DETAILS.tagline,
  '3D Alignment',
  'Wheel Balancing',
  'Wheel Checker',
  'Denting Painting',
  'Washing Center',
  `Owner ${SITE_DETAILS.owner.callDisplay}`,
  `Manager WhatsApp ${SITE_DETAILS.manager.whatsappDisplay}`,
  SITE_DETAILS.location.full,
  `Started ${SITE_DETAILS.foundedDate}`,
];

export default function MarqueeStrip() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section className="marquee-band border-y border-[#2A3550] bg-[#070C15]">
      <div className="marquee-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
