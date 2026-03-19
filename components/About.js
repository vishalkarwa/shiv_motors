/**
 * components/About.js
 * About the workshop: story, values, leadership, and key highlights.
 */

import { FaTools, FaShieldAlt, FaClock, FaHandshake } from 'react-icons/fa';
import { SITE_DETAILS, TEAM_MEMBERS } from '../lib/siteDetails';

const values = [
  {
    icon: <FaTools className="text-brand-orange text-xl" />,
    title: 'Expert Support',
    desc: 'Careful inspection and hands-on workshop support for every vehicle.',
  },
  {
    icon: <FaShieldAlt className="text-brand-orange text-xl" />,
    title: 'Trusted Service',
    desc: 'Owner-led communication and dependable work from booking to delivery.',
  },
  {
    icon: <FaClock className="text-brand-orange text-xl" />,
    title: 'Quick Response',
    desc: 'Fast local support for drivers in Chitawa, Kuchman City, and nearby areas.',
  },
  {
    icon: <FaHandshake className="text-brand-orange text-xl" />,
    title: 'Honest Pricing',
    desc: 'Clear guidance before work begins, with direct answers when you need them.',
  },
];

const milestones = [
  { year: '18 Oct 2025', event: 'Shiv Motors started at Aada Gela, Chitawa' },
  { year: '2025', event: 'Bhanwar Lal Karwa and Mahesh Balara began serving local vehicle owners' },
  { year: '2026', event: 'Known as the best workshop in the area for honest, reliable service' },
];

export default function About() {
  const badges = [
    `Started ${SITE_DETAILS.foundedDate}`,
    `Owner: ${SITE_DETAILS.owner.name}`,
    `Manager: ${SITE_DETAILS.manager.name}`,
    SITE_DETAILS.location.area,
  ];

  const stats = [
    { value: '18 Oct', label: 'Started' },
    { value: '2025', label: 'Established' },
    { value: 'Best', label: 'In Area' },
  ];

  return (
    <section id="about" className="py-24 bg-[#111827] relative overflow-hidden">
      <div
        className="absolute right-0 top-0 w-1/3 h-full opacity-5"
        style={{ background: 'linear-gradient(to left, #F97316, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-condensed text-brand-orange tracking-[0.3em] uppercase text-sm mb-3">
              Our Story
            </p>
            <h2 className="section-title text-5xl sm:text-6xl text-white mb-6">
              ABOUT
              <br />
              <span className="text-brand-orange">SHIV MOTORS</span>
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              Started on <strong className="text-white">{SITE_DETAILS.foundedDate}</strong> by{' '}
              <strong className="text-white">{SITE_DETAILS.owner.name}</strong>, Shiv Motors was built to
              deliver honest, dependable vehicle care at fair prices for local drivers.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              From {SITE_DETAILS.location.full}, manager{' '}
              <strong className="text-white">{SITE_DETAILS.manager.name}</strong> helps lead bookings,
              support, and customer communication. Shiv Motors is now known as the{' '}
              <span className="text-white">{SITE_DETAILS.tagline.toLowerCase()}</span> for drivers who want
              direct service, clear answers, and reliable repair work.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="glass-card rounded-xl p-4 flex items-start gap-3
                             hover:border-brand-orange/30 transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-condensed text-white text-base tracking-wide mb-0.5">
                      {value.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-4 text-center border border-brand-orange/20"
                >
                  <p className="font-display text-3xl sm:text-4xl text-brand-orange">{stat.value}</p>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {TEAM_MEMBERS.map((member) => (
                <article
                  key={member.key}
                  className="glass-card rounded-2xl overflow-hidden border border-[#2A3550]"
                >
                  <div className="aspect-[4/5] bg-[#0A0F1A]">
                    <img
                      src={member.photo}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-brand-orange text-xs font-condensed tracking-[0.3em] uppercase mb-2">
                      {member.role}
                    </p>
                    <h3 className="font-display text-2xl text-white mb-3">{member.name}</h3>
                    <div className="space-y-2">
                      <a
                        href={member.primaryHref}
                        className="block text-center py-2.5 rounded-xl bg-brand-orange text-white text-sm font-condensed tracking-wider uppercase"
                      >
                        {member.primaryLabel}
                      </a>
                      <a
                        href={member.secondaryHref}
                        target={member.secondaryExternal ? '_blank' : undefined}
                        rel={member.secondaryExternal ? 'noopener noreferrer' : undefined}
                        className="block text-center py-2.5 rounded-xl border border-[#2A3550] text-gray-300 text-sm font-condensed tracking-wider uppercase hover:border-brand-orange hover:text-brand-orange transition-colors"
                      >
                        {member.secondaryLabel}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display text-2xl text-white mb-6 tracking-wide">OUR JOURNEY</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-brand-orange/20" />

                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.year} className="flex items-start gap-4 pl-10 relative">
                      <div
                        className={`absolute left-0 w-8 h-8 rounded-full
                                    flex items-center justify-center text-xs font-bold
                                    ${index === milestones.length - 1
                                      ? 'bg-brand-orange text-white shadow-orange'
                                      : 'bg-[#2A3550] text-brand-orange border border-brand-orange/40'
                                    }`}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <span className="font-condensed text-brand-orange text-sm tracking-wider">
                          {milestone.year}
                        </span>
                        <p className="text-gray-300 text-sm">{milestone.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="glass-card px-4 py-2 rounded-full text-sm
                             text-gray-300 border border-[#2A3550]
                             font-condensed tracking-wide"
                >
                  + {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
