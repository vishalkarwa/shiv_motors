/**
 * components/Navbar.js
 * Sticky navigation with theme toggle, back button, and mobile menu.
 */

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaArrowLeft, FaMoon, FaSun, FaWrench } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleBack = () => {
    setMenuOpen(false);
    if (window.history.length > 1) {
      router.back();
      return;
    }
    router.push('/');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md shadow-lg shadow-black/20 border-b' : 'bg-transparent'
      }`}
      style={
        scrolled
          ? {
              backgroundColor: 'var(--nav-bg)',
              borderColor: 'var(--border-color)',
            }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#2A3550] text-gray-300 hover:text-brand-orange hover:border-brand-orange transition-colors"
              aria-label="Go back"
              title="Go back"
            >
              <FaArrowLeft size={14} />
            </button>

            <Link href="/" className="flex items-center gap-2 group min-w-0">
              <div className="w-9 h-9 bg-brand-orange rounded-lg flex items-center justify-center group-hover:shadow-orange transition-shadow duration-300">
                <FaWrench className="text-white text-lg" />
              </div>
              <div className="min-w-0">
                <span className="font-display text-xl sm:text-2xl text-white tracking-wider leading-none">
                  SHIV
                </span>
                <span className="font-display text-xl sm:text-2xl text-brand-orange tracking-wider leading-none">
                  {' '}MOTORS
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="font-condensed text-base tracking-wider text-gray-300 hover:text-brand-orange transition-colors duration-200 uppercase relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#2A3550] text-gray-300 hover:text-brand-orange hover:border-brand-orange transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <FaSun size={15} /> : <FaMoon size={15} />}
            </button>
            <Link href="/booking" className="btn-orange text-sm uppercase">
              Book Service
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden backdrop-blur-md border-b ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          backgroundColor: 'var(--surface-overlay)',
          borderColor: 'var(--border-color)',
        }}
      >
        <div className="px-4 pt-2 pb-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className="font-condensed text-lg tracking-wider text-gray-300 hover:text-brand-orange hover:bg-white/5 transition-all px-3 py-3 rounded-lg uppercase"
            >
              {link.label}
            </a>
          ))}

          <Link
            href="/booking"
            onClick={() => setMenuOpen(false)}
            className="btn-orange mt-3 text-center text-sm uppercase"
          >
            Book Service
          </Link>

          <button
            type="button"
            onClick={handleBack}
            className="mt-2 px-3 py-3 rounded-lg border border-[#2A3550] text-gray-300 text-left font-condensed tracking-wider uppercase hover:text-brand-orange hover:border-brand-orange transition-colors"
          >
            Back
          </button>
        </div>
      </div>
    </nav>
  );
}
