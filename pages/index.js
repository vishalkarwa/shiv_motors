/**
 * pages/index.js
 * Homepage: assembles all section components in order.
 */

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MarqueeStrip from '../components/MarqueeStrip';
import SignatureExperience from '../components/SignatureExperience';
import Services from '../components/Services';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import Testimonials from '../components/Testimonials';
import MapContact from '../components/MapContact';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { SEO_DESCRIPTION, SITE_DETAILS } from '../lib/siteDetails';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          {SITE_DETAILS.workshopName} - {SITE_DETAILS.tagline}
        </title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <meta property="og:title" content={`${SITE_DETAILS.workshopName} - ${SITE_DETAILS.tagline}`} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <MarqueeStrip />
        <SignatureExperience />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Reviews />
        <MapContact />
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
