/**
 * components/WorkshopStatus.js
 * Displays "Open Now" or "Closed" based on current time and day.
 * Workshop hours: Mon–Sat 8AM–8PM, Sun 9AM–2PM.
 */

import { useState, useEffect } from 'react';

// Workshop schedule (24-hour format)
const SCHEDULE = {
  0: { open: 9,  close: 14 }, // Sunday
  1: { open: 8,  close: 20 }, // Monday
  2: { open: 8,  close: 20 }, // Tuesday
  3: { open: 8,  close: 20 }, // Wednesday
  4: { open: 8,  close: 20 }, // Thursday
  5: { open: 8,  close: 20 }, // Friday
  6: { open: 8,  close: 18 }, // Saturday
};

function isOpen() {
  const now  = new Date();
  const day  = now.getDay();
  const hour = now.getHours() + now.getMinutes() / 60;
  const { open, close } = SCHEDULE[day];
  return hour >= open && hour < close;
}

function getNextOpenTime() {
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const now  = new Date();
  // Find next open slot
  for (let i = 1; i <= 7; i++) {
    const d = (now.getDay() + i) % 7;
    const { open } = SCHEDULE[d];
    return `${days[d]} ${open}:00 AM`;
  }
}

export default function WorkshopStatus({ showNextOpen = true }) {
  const [open, setOpen]     = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setOpen(isOpen());

    // Re-check every minute
    const interval = setInterval(() => setOpen(isOpen()), 60_000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null; // avoid SSR mismatch

  return (
    <div className="flex items-center gap-2">
      {/* Pulsing dot */}
      <span className="relative flex h-3 w-3">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            open ? 'bg-green-400' : 'bg-red-400'
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-3 w-3 ${
            open ? 'bg-green-500' : 'bg-red-500'
          }`}
        />
      </span>

      <span
        className={`font-condensed text-sm tracking-widest uppercase ${
          open ? 'text-green-400' : 'text-red-400'
        }`}
      >
        {open ? 'Open Now' : 'Currently Closed'}
      </span>

      {/* Show next opening if closed */}
      {!open && showNextOpen && (
        <span className="text-gray-500 text-xs hidden sm:inline">
          · Opens {getNextOpenTime()}
        </span>
      )}
    </div>
  );
}
