/**
 * pages/_document.js
 * Custom Next.js Document for shared metadata and early theme bootstrapping.
 */

import { Html, Head, Main, NextScript } from 'next/document';
import { SEO_DESCRIPTION, SITE_DETAILS } from '../lib/siteDetails';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={SEO_DESCRIPTION} />
        <meta
          name="keywords"
          content="car workshop, vehicle repair, oil change, car service, Shiv Motors, Chitawa workshop, Kuchman City workshop"
        />
        <meta name="author" content={SITE_DETAILS.owner.name} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${SITE_DETAILS.workshopName} - ${SITE_DETAILS.tagline}`} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:image" content="/og-image.jpg" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <meta name="theme-color" content="#F97316" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var theme=localStorage.getItem('shiv_theme')||'dark';document.documentElement.dataset.theme=theme;}catch(e){document.documentElement.dataset.theme='dark';}})();`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
