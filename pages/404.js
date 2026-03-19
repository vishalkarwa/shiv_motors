/**
 * pages/404.js
 * Custom 404 Not Found page.
 */

import Head from 'next/head';
import Link from 'next/link';
import { FaWrench } from 'react-icons/fa';

export default function NotFound() {
  return (
    <>
      <Head><title>404 – Page Not Found | Shiv Motors</title></Head>
      <div className="min-h-screen bg-[#0A0F1A] flex items-center justify-center px-4 text-center">
        <div>
          <div className="w-20 h-20 bg-brand-orange/10 border border-brand-orange/30 
                          rounded-full flex items-center justify-center mx-auto mb-6">
            <FaWrench className="text-brand-orange text-3xl" />
          </div>
          <h1 className="font-display text-8xl text-brand-orange mb-2">404</h1>
          <h2 className="font-display text-3xl text-white mb-4">PAGE NOT FOUND</h2>
          <p className="text-gray-400 mb-8 max-w-sm mx-auto">
            Looks like this page took a wrong turn. Let's get you back on the road.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/" className="btn-orange">Back to Home</Link>
            <Link href="/booking"
                  className="px-6 py-3 rounded-full border border-[#2A3550] text-gray-400
                             hover:border-brand-orange hover:text-brand-orange transition-all font-condensed tracking-wider">
              Book Service
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
