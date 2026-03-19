/**
 * components/Gallery.js
 * Real workshop gallery with videos and a photo lightbox.
 */

import { useState } from 'react';
import { FaTimes, FaExpand, FaPlay } from 'react-icons/fa';
import { GALLERY_IMAGES, GALLERY_VIDEOS } from '../lib/siteDetails';

function PhotoCard({ item, onClick }) {
  return (
    <button
      type="button"
      className="relative overflow-hidden rounded-2xl cursor-pointer group text-left aspect-[4/5] bg-[#0A0F1A]"
      onClick={() => onClick(item)}
    >
      <img
        src={item.src}
        alt={item.label}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />

        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent
                   opacity-90 group-hover:opacity-100 transition-opacity duration-300
                   flex flex-col justify-end p-4"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-white font-condensed text-xs tracking-[0.18em] uppercase sm:text-sm sm:tracking-[0.2em]">
              {item.label}
            </p>
            <p className="mt-1 hidden text-xs text-gray-300 sm:block">{item.description}</p>
          </div>
          <FaExpand className="text-white/80 flex-shrink-0" />
        </div>
      </div>

      <div className="absolute inset-0 border border-white/10 group-hover:border-brand-orange/60 rounded-2xl transition-colors duration-300 pointer-events-none" />
    </button>
  );
}

function VideoCard({ item }) {
  return (
    <article className="glass-card rounded-2xl overflow-hidden border border-[#2A3550]">
      <div className="relative">
        <video
          className="w-full aspect-video bg-black"
          controls
          preload="metadata"
          playsInline
          poster={item.poster}
        >
          <source src={item.src} type="video/mp4" />
        </video>
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-white text-xs font-condensed tracking-[0.2em] uppercase pointer-events-none">
          <FaPlay size={10} />
          Video
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl text-white mb-2">{item.title}</h3>
        <p className="text-gray-400 text-sm">{item.description}</p>
      </div>
    </article>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-[#0A0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <p className="font-condensed text-brand-orange tracking-[0.3em] uppercase text-sm mb-3">
            Workshop in Action
          </p>
          <h2 className="section-title text-4xl sm:text-6xl text-white mb-4">OUR GALLERY</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Real photos and videos from Shiv Motors showing the workshop, equipment, service bays,
            vehicles, and daily work on site.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {GALLERY_VIDEOS.map((video) => (
            <VideoCard key={video.src} item={video} />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
          {GALLERY_IMAGES.map((item) => (
            <PhotoCard key={item.src} item={item} onClick={setSelected} />
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-5xl w-full glass-card rounded-2xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <FaTimes size={18} />
            </button>

            <img src={selected.src} alt={selected.label} className="w-full max-h-[75vh] object-contain bg-black" />

            <div className="p-4 sm:p-6">
              <p className="text-brand-orange text-xs font-condensed tracking-[0.3em] uppercase mb-2">
                Workshop Photo
              </p>
              <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">{selected.label}</h3>
              <p className="text-gray-400 text-sm">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
