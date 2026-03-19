/**
 * pages/booking.js
 * Online service booking page.
 * Picks up ?service= from URL query for pre-selection.
 */

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import Navbar          from '../components/Navbar';
import Footer          from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import WorkshopStatus  from '../components/WorkshopStatus';
import { FaCalendarAlt, FaClock, FaCar, FaUser, FaPhone, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { SITE_DETAILS } from '../lib/siteDetails';

const SERVICES = [
  'Engine Repair', 'Oil Change', 'Tyre Service', 'Full Car Wash',
  'Brake Service', 'AC Service', 'Battery Replacement',
  'Wheel Alignment', 'Suspension Repair', 'General Service', 'Other',
];

// Available time slots
const TIME_SLOTS = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
];

// Step indicators
const STEPS = ['Your Details', 'Vehicle & Service', 'Date & Time', 'Confirm'];

export default function BookingPage() {
  const router = useRouter();
  const [step, setStep]       = useState(0);
  const [loading, setLoading] = useState(false);
  const [done, setDone]       = useState(false);
  const [bookingId, setBookingId] = useState('');

  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    vehicleNumber: '', vehicleModel: '',
    service: '', notes: '',
    date: '', time: '',
  });
  const [errors, setErrors] = useState({});

  // Pre-fill service from URL query param
  useEffect(() => {
    if (router.query.service) {
      const s = decodeURIComponent(router.query.service);
      if (SERVICES.includes(s)) setForm((f) => ({ ...f, service: s }));
    }
  }, [router.query.service]);

  // ── Helpers ─────────────────────────────────────────────────
  const update = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: '' });
  };

  function validateStep(n) {
    const e = {};
    if (n === 0) {
      if (!form.name.trim())  e.name  = 'Full name required';
      if (!form.phone.trim()) e.phone = 'Phone number required';
      else if (!/^[0-9+\s\-]{7,15}$/.test(form.phone)) e.phone = 'Invalid phone number';
    }
    if (n === 1) {
      if (!form.service) e.service = 'Please select a service';
    }
    if (n === 2) {
      if (!form.date) e.date = 'Please pick a date';
      if (!form.time) e.time = 'Please select a time slot';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  const nextStep = () => { if (validateStep(step)) setStep((s) => s + 1); };
  const prevStep = () => setStep((s) => s - 1);

  // Min date = today
  const minDate = new Date().toISOString().split('T')[0];

  // ── Submit ───────────────────────────────────────────────────
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setBookingId(data.data._id);
        setDone(true);
        toast.success('Booking confirmed! 🎉');
      } else {
        toast.error(data.message || 'Booking failed');
      }
    } catch {
      toast.error('Network error — please try again or call us.');
    } finally {
      setLoading(false);
    }
  };

  // ── Input base style ─────────────────────────────────────────
  const inputCls = (field) =>
    `w-full bg-[#0A0F1A] border rounded-xl px-4 py-3 text-white text-sm
     placeholder-gray-600 focus:outline-none focus:border-brand-orange transition-colors
     ${errors[field] ? 'border-red-500' : 'border-[#2A3550]'}`;

  const FieldError = ({ msg }) =>
    msg ? <p className="text-red-400 text-xs mt-1">{msg}</p> : null;

  // ── Success screen ───────────────────────────────────────────
  if (done) {
    return (
      <>
        <Head><title>Booking Confirmed – Shiv Motors</title></Head>
        <Navbar />
        <main className="min-h-screen bg-[#0A0F1A] flex items-center justify-center pt-24 px-4">
          <div className="glass-card rounded-3xl p-10 max-w-lg w-full text-center border border-green-500/20">
            <FaCheckCircle className="text-green-400 text-6xl mx-auto mb-6" />
            <h1 className="font-display text-4xl text-white mb-2">BOOKING CONFIRMED!</h1>
            <p className="text-gray-400 mb-6">
              Your service appointment has been booked. We'll call you to confirm shortly.
            </p>

            {/* Summary */}
            <div className="bg-[#0A0F1A] rounded-xl p-5 text-left space-y-3 mb-8 border border-[#2A3550]">
              {[
                { l: 'Name',        v: form.name             },
                { l: 'Phone',       v: form.phone            },
                { l: 'Service',     v: form.service          },
                { l: 'Date',        v: form.date             },
                { l: 'Time',        v: form.time             },
                { l: 'Vehicle',     v: form.vehicleModel || '—' },
                { l: 'Booking ID',  v: bookingId.slice(-8).toUpperCase() },
              ].map(({ l, v }) => (
                <div key={l} className="flex justify-between text-sm">
                  <span className="text-gray-500">{l}</span>
                  <span className="text-white font-medium">{v}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Link href="/" className="flex-1 py-3 rounded-xl border border-[#2A3550] 
                                        text-gray-400 text-sm font-condensed tracking-wide
                                        hover:border-brand-orange hover:text-brand-orange transition-all text-center">
                Back to Home
              </Link>
              <Link href="/booking" onClick={() => { setDone(false); setStep(0); setForm({ name:'',phone:'',email:'',vehicleNumber:'',vehicleModel:'',service:'',notes:'',date:'',time:'' }); }}
                    className="flex-1 btn-orange py-3 text-sm text-center">
                New Booking
              </Link>
            </div>
          </div>
        </main>
        <FloatingButtons />
      </>
    );
  }

  // ── Main booking form ────────────────────────────────────────
  return (
    <>
      <Head>
        <title>Book a Service – Shiv Motors</title>
        <meta name="description" content="Book your vehicle service appointment at Shiv Motors online." />
      </Head>
      <Navbar />

      <main className="min-h-screen bg-[#0A0F1A] pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 
                                      hover:text-brand-orange transition-colors text-sm mb-6">
              <FaArrowLeft size={12} /> Back to Home
            </Link>
            <div className="flex justify-center mb-4">
              <WorkshopStatus />
            </div>
            <h1 className="section-title text-4xl sm:text-5xl text-white mb-2">BOOK A SERVICE</h1>
            <p className="text-gray-400 text-sm">Complete the form below — takes less than 2 minutes.</p>
          </div>

          {/* Step progress */}
          <div className="flex items-center mb-10">
            {STEPS.map((label, i) => (
              <div key={label} className="flex-1 flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
                                   transition-all duration-300
                                   ${i < step  ? 'bg-brand-orange text-white'
                                   : i === step ? 'bg-brand-orange/20 border-2 border-brand-orange text-brand-orange'
                                               : 'bg-[#1A2235] text-gray-600 border border-[#2A3550]'}`}>
                    {i < step ? '✓' : i + 1}
                  </div>
                  <span className={`text-xs mt-1 hidden sm:block font-condensed tracking-wide
                                   ${i === step ? 'text-brand-orange' : 'text-gray-600'}`}>
                    {label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 transition-all duration-300
                                   ${i < step ? 'bg-brand-orange' : 'bg-[#2A3550]'}`} />
                )}
              </div>
            ))}
          </div>

          {/* Form card */}
          <div className="glass-card rounded-2xl p-8">

            {/* ── STEP 0: Your Details ── */}
            {step === 0 && (
              <div className="space-y-5">
                <h2 className="font-display text-2xl text-white mb-1 flex items-center gap-2">
                  <FaUser className="text-brand-orange text-xl" /> Your Details
                </h2>
                <p className="text-gray-400 text-sm mb-6">Tell us who you are so we can reach you.</p>

                <div>
                  <label className="block text-gray-300 text-sm mb-1.5 font-condensed tracking-wide">Full Name *</label>
                  <input type="text" value={form.name} onChange={update('name')}
                         placeholder="e.g. Rajesh Sharma" className={inputCls('name')} />
                  <FieldError msg={errors.name} />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-1.5 font-condensed tracking-wide">Phone Number *</label>
                  <input type="tel" value={form.phone} onChange={update('phone')}
                         placeholder={SITE_DETAILS.owner.callDisplay} className={inputCls('phone')} />
                  <FieldError msg={errors.phone} />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-1.5 font-condensed tracking-wide">Email (optional)</label>
                  <input type="email" value={form.email} onChange={update('email')}
                         placeholder="you@example.com" className={inputCls('email')} />
                </div>
              </div>
            )}

            {/* ── STEP 1: Vehicle & Service ── */}
            {step === 1 && (
              <div className="space-y-5">
                <h2 className="font-display text-2xl text-white mb-1 flex items-center gap-2">
                  <FaCar className="text-brand-orange text-xl" /> Vehicle &amp; Service
                </h2>
                <p className="text-gray-400 text-sm mb-6">Tell us about your vehicle and what you need.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-1.5 font-condensed tracking-wide">Vehicle Number</label>
                    <input type="text" value={form.vehicleNumber} onChange={update('vehicleNumber')}
                           placeholder="MH 12 AB 1234" className={inputCls('vehicleNumber')} />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-1.5 font-condensed tracking-wide">Vehicle Model</label>
                    <input type="text" value={form.vehicleModel} onChange={update('vehicleModel')}
                           placeholder="e.g. Hyundai i20" className={inputCls('vehicleModel')} />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-1.5 font-condensed tracking-wide">Service Required *</label>
                  <select value={form.service} onChange={update('service')}
                          className={`${inputCls('service')} ${!form.service ? 'text-gray-600' : 'text-white'}`}>
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="bg-[#1A2235] text-white">{s}</option>
                    ))}
                  </select>
                  <FieldError msg={errors.service} />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-1.5 font-condensed tracking-wide">Describe the issue (optional)</label>
                  <textarea value={form.notes} onChange={update('notes')} rows={3}
                            placeholder="Any additional info about your vehicle or the problem..."
                            className="w-full bg-[#0A0F1A] border border-[#2A3550] rounded-xl px-4 py-3
                                       text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange
                                       transition-colors text-sm resize-none" />
                </div>
              </div>
            )}

            {/* ── STEP 2: Date & Time ── */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="font-display text-2xl text-white mb-1 flex items-center gap-2">
                  <FaCalendarAlt className="text-brand-orange text-xl" /> Date &amp; Time
                </h2>
                <p className="text-gray-400 text-sm mb-4">Pick your preferred appointment slot.</p>

                <div>
                  <label className="block text-gray-300 text-sm mb-1.5 font-condensed tracking-wide">
                    <FaCalendarAlt className="inline mr-1 text-brand-orange" /> Date *
                  </label>
                  <input type="date" value={form.date} min={minDate} onChange={update('date')}
                         className={`${inputCls('date')} [color-scheme:dark]`} />
                  <FieldError msg={errors.date} />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-3 font-condensed tracking-wide">
                    <FaClock className="inline mr-1 text-brand-orange" /> Time Slot *
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {TIME_SLOTS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => { setForm({ ...form, time: t }); setErrors({ ...errors, time: '' }); }}
                        className={`py-2.5 rounded-xl text-sm font-condensed tracking-wide
                                    border transition-all duration-200
                                    ${form.time === t
                                      ? 'bg-brand-orange border-brand-orange text-white'
                                      : 'bg-[#0A0F1A] border-[#2A3550] text-gray-400 hover:border-brand-orange/50 hover:text-white'
                                    }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <FieldError msg={errors.time} />
                </div>
              </div>
            )}

            {/* ── STEP 3: Confirm ── */}
            {step === 3 && (
              <div>
                <h2 className="font-display text-2xl text-white mb-6">Confirm Booking</h2>
                <div className="bg-[#0A0F1A] rounded-xl p-5 space-y-3 border border-[#2A3550] mb-6">
                  {[
                    { l: 'Name',           v: form.name             },
                    { l: 'Phone',          v: form.phone            },
                    { l: 'Email',          v: form.email || '—'     },
                    { l: 'Vehicle No.',    v: form.vehicleNumber || '—' },
                    { l: 'Vehicle Model',  v: form.vehicleModel || '—' },
                    { l: 'Service',        v: form.service          },
                    { l: 'Date',           v: form.date             },
                    { l: 'Time',           v: form.time             },
                  ].map(({ l, v }) => (
                    <div key={l} className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">{l}</span>
                      <span className="text-white font-medium text-right max-w-[60%]">{v}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-xs mb-6">
                  By confirming, you agree to be contacted at the provided phone number for appointment confirmation.
                </p>
              </div>
            )}

            {/* ── Navigation buttons ── */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              {step > 0 && (
                <button onClick={prevStep}
                        className="flex-1 py-3 rounded-xl border border-[#2A3550] text-gray-400
                                   hover:border-brand-orange hover:text-brand-orange transition-all font-condensed tracking-wide">
                  ← Back
                </button>
              )}
              {step < 3 ? (
                <button onClick={nextStep}
                        className="flex-1 btn-orange py-3 font-bold">
                  Continue →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 btn-orange py-3 font-bold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                      </svg>
                      Confirming...
                    </span>
                  ) : 'Confirm Booking ✓'}
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
