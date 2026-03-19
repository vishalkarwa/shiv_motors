/**
 * components/Reviews.js
 * Styled Google-review-style cards with rating stars.
 * Replace with real Google Places API data in production.
 */

import { FaGoogle, FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'Rajesh Sharma',
    avatar: 'RS',
    rating: 5,
    date: '2 weeks ago',
    text: 'Absolutely fantastic service! Brought my Swift in for an engine check and they diagnosed the issue in under an hour. Transparent pricing and the car runs like new. Highly recommended!',
    service: 'Engine Repair',
  },
  {
    name: 'Priya Nair',
    avatar: 'PN',
    rating: 5,
    date: '1 month ago',
    text: 'Best car wash in the city — interior detailing was immaculate. The team is professional, courteous, and super quick. Will definitely be coming back for all my car needs.',
    service: 'Full Car Wash',
  },
  {
    name: 'Aakash Mehta',
    avatar: 'AM',
    rating: 5,
    date: '3 weeks ago',
    text: 'Got my AC serviced and wheel alignment done. Both done perfectly. Pricing was fair and they showed me exactly what was wrong before starting any work. Very trustworthy workshop.',
    service: 'AC Service & Alignment',
  },
  {
    name: 'Sunita Verma',
    avatar: 'SV',
    rating: 4,
    date: '5 weeks ago',
    text: 'Quick oil change and brake pad replacement. Staff was friendly and explained everything clearly. Slight wait time but worth it for the quality. Great place overall!',
    service: 'Oil Change & Brakes',
  },
  {
    name: 'Mohammed Irfan',
    avatar: 'MI',
    rating: 5,
    date: '2 months ago',
    text: 'Shiv Motors is the only workshop I trust with my Fortuner. They are skilled, honest, and never oversell. The online booking system is a great addition — very convenient.',
    service: 'General Service',
  },
  {
    name: 'Divya Krishnan',
    avatar: 'DK',
    rating: 5,
    date: '6 weeks ago',
    text: 'As a woman who knows little about cars, I always worried about being cheated at workshops. Shiv Motors was completely transparent, showed me the worn-out parts, and charged exactly what was quoted.',
    service: 'Tyre Service',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <FaStar
          key={n}
          className={n <= count ? 'text-yellow-400' : 'text-gray-600'}
          size={14}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col gap-4
                    hover:border-brand-orange/30 hover:-translate-y-1
                    transition-all duration-300 shadow-card">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-orange to-brand-amber
                          flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            {review.avatar}
          </div>
          <div>
            <p className="text-white font-medium text-sm">{review.name}</p>
            <p className="text-gray-500 text-xs">{review.date}</p>
          </div>
        </div>
        {/* Google icon */}
        <FaGoogle className="text-[#4285F4] opacity-70" size={18} />
      </div>

      {/* Stars */}
      <StarRating count={review.rating} />

      {/* Review text */}
      <p className="text-gray-300 text-sm leading-relaxed flex-1">
        "{review.text}"
      </p>

      {/* Service tag */}
      <span className="self-start text-xs bg-brand-orange/10 border border-brand-orange/20
                       text-brand-orange px-3 py-1 rounded-full font-condensed tracking-wide">
        {review.service}
      </span>
    </div>
  );
}

export default function Reviews() {
  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section id="reviews" className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-condensed text-brand-orange tracking-[0.3em] uppercase text-sm mb-3">
            What Customers Say
          </p>
          <h2 className="section-title text-5xl sm:text-6xl text-white mb-4">
            GOOGLE REVIEWS
          </h2>

          {/* Aggregate rating */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <span className="font-display text-6xl text-brand-orange">{avgRating}</span>
            <div className="text-center sm:text-left">
              <div className="flex gap-1 mb-1 justify-center sm:justify-start">
                {[1,2,3,4,5].map((n) => (
                  <FaStar key={n} className="text-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-gray-400 text-sm">Based on {reviews.length} Google reviews</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-orange text-xs hover:underline flex items-center justify-center sm:justify-start gap-1 mt-0.5"
              >
                <FaGoogle size={10} /> View on Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-orange"
          >
            <FaGoogle /> Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
}
