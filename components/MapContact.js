/**
 * components/MapContact.js
 * Google Maps embed, business contact details, and enquiry form.
 */

import { useState } from 'react';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaInstagram } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { CONTACT_LINKS, SITE_DETAILS } from '../lib/siteDetails';

const MAPS_EMBED_URL = process.env.GOOGLE_MAPS_EMBED_URL || CONTACT_LINKS.mapsEmbed;

const HOURS = [
  { day: 'Mon - Fri', hours: '8:00 AM - 8:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Sunday', hours: '9:00 AM - 2:00 PM' },
];

const SERVICES = [
  'Engine Repair',
  'Oil Change',
  'Tyre Service',
  'Full Car Wash',
  'Brake Service',
  'AC Service',
  'Battery Replacement',
  'Wheel Alignment',
  'General Service',
  'Other',
];

export default function MapContact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = 'Name is required';
    if (!form.phone.trim()) {
      nextErrors.phone = 'Phone is required';
    } else if (!/^[0-9+\s-]{7,15}$/.test(form.phone)) {
      nextErrors.phone = 'Enter a valid phone number';
    }
    if (!form.service) nextErrors.service = 'Please select a service';

    return nextErrors;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: '' }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setLoading(true);

    try {
      const today = new Date().toISOString().split('T')[0];
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          service: form.service,
          notes: form.message,
          date: today,
          time: '10:00',
        }),
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Enquiry sent! We'll call you back shortly.");
        setForm({ name: '', phone: '', service: '', message: '' });
      } else {
        toast.error(data.message || 'Something went wrong');
      }
    } catch {
      toast.error('Network error. Please call us directly.');
    } finally {
      setLoading(false);
    }
  };

  const FieldError = ({ msg }) => (msg ? <p className="text-red-400 text-xs mt-1">{msg}</p> : null);

  return (
    <section id="contact" className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-condensed text-brand-orange tracking-[0.3em] uppercase text-sm mb-3">
            Find Us
          </p>
          <h2 className="section-title text-5xl sm:text-6xl text-white mb-4">CONTACT US</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Visit us at {SITE_DETAILS.location.full} or contact the owner and manager directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden border border-[#2A3550] h-64 md:h-80">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'var(--map-filter)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shiv Motors Location"
              />
            </div>

            <a
              href={CONTACT_LINKS.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl
                         border border-brand-orange text-brand-orange font-condensed tracking-wider
                         hover:bg-brand-orange/10 transition-all duration-300 uppercase"
            >
              <FaMapMarkerAlt /> Get Directions
            </a>

            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-brand-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">Address</p>
                  <p className="text-gray-400 text-sm">
                    {SITE_DETAILS.location.area}
                    <br />
                    {SITE_DETAILS.location.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaPhone className="text-brand-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">Owner</p>
                  <p className="text-gray-300 text-sm">{SITE_DETAILS.owner.name}</p>
                  <a href={CONTACT_LINKS.ownerCall} className="text-gray-400 text-sm hover:text-brand-orange transition-colors">
                    Call: {SITE_DETAILS.owner.callDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaWhatsapp className="text-brand-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">WhatsApp</p>
                  <a
                    href={CONTACT_LINKS.ownerWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-brand-orange transition-colors"
                  >
                    {SITE_DETAILS.owner.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaInstagram className="text-brand-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">Instagram</p>
                  <a
                    href={CONTACT_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-brand-orange transition-colors"
                  >
                    @shiv_motors_chitawa
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaWhatsapp className="text-brand-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">Manager</p>
                  <p className="text-gray-300 text-sm">{SITE_DETAILS.manager.name}</p>
                  <a href={CONTACT_LINKS.managerCall} className="block text-gray-400 text-sm hover:text-brand-orange transition-colors">
                    Call: {SITE_DETAILS.manager.callDisplay}
                  </a>
                  <a
                    href={CONTACT_LINKS.managerWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 text-sm hover:text-brand-orange transition-colors"
                  >
                    WhatsApp: {SITE_DETAILS.manager.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaClock className="text-brand-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm mb-1">Working Hours</p>
                  {HOURS.map((item) => (
                    <div key={item.day} className="flex justify-between gap-4 text-sm">
                      <span className="text-gray-400">{item.day}</span>
                      <span className="text-gray-300">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={CONTACT_LINKS.ownerCall}
                className="flex items-center justify-center gap-2 py-3 rounded-xl
                           bg-brand-orange text-white font-condensed tracking-wider uppercase
                           hover:shadow-orange transition-all duration-300"
              >
                <FaPhone /> Call Owner
              </a>
              <a
                href={CONTACT_LINKS.ownerWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl
                           bg-[#25D366] text-white font-condensed tracking-wider uppercase
                           hover:bg-[#20BD5C] transition-all duration-300"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a
                href={CONTACT_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl
                           bg-gradient-to-r from-[#D62976] via-[#F77737] to-[#FCAF45] text-white font-condensed tracking-wider uppercase
                           hover:opacity-90 transition-all duration-300"
              >
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-display text-2xl text-white mb-2 tracking-wide">SEND AN ENQUIRY</h3>
            <p className="text-gray-400 text-sm mb-6">
              Fill in your details and we will reach out as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label className="block text-gray-300 text-sm mb-1.5 font-condensed tracking-wide">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full bg-[#0A0F1A] border rounded-xl px-4 py-3 text-white
                              placeholder-gray-600 focus:outline-none focus:border-brand-orange
                              transition-colors text-sm
                              ${errors.name ? 'border-red-500' : 'border-[#2A3550]'}`}
                />
                <FieldError msg={errors.name} />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-1.5 font-condensed tracking-wide">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={SITE_DETAILS.owner.callDisplay}
                  className={`w-full bg-[#0A0F1A] border rounded-xl px-4 py-3 text-white
                              placeholder-gray-600 focus:outline-none focus:border-brand-orange
                              transition-colors text-sm
                              ${errors.phone ? 'border-red-500' : 'border-[#2A3550]'}`}
                />
                <FieldError msg={errors.phone} />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-1.5 font-condensed tracking-wide">
                  Service Required *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`w-full bg-[#0A0F1A] border rounded-xl px-4 py-3 text-sm
                              focus:outline-none focus:border-brand-orange transition-colors
                              ${form.service ? 'text-white' : 'text-gray-600'}
                              ${errors.service ? 'border-red-500' : 'border-[#2A3550]'}`}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service} className="bg-[#1A2235] text-white">
                      {service}
                    </option>
                  ))}
                </select>
                <FieldError msg={errors.service} />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-1.5 font-condensed tracking-wide">
                  Additional Notes
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Describe your vehicle issue..."
                  className="w-full bg-[#0A0F1A] border border-[#2A3550] rounded-xl px-4 py-3
                             text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange
                             transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-orange py-3.5 text-base font-bold disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Enquiry'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
