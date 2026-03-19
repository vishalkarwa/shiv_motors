/**
 * pages/_app.js
 * Global wrapper: imports global CSS, provides theme state, and renders toast notifications.
 */

import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider, useTheme } from '../components/ThemeProvider';

function AppContent({ Component, pageProps }) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <>
      <Component {...pageProps} />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: isLight ? 'rgba(255,255,255,0.92)' : '#1A2235',
            color: isLight ? '#1F2937' : '#E5E7EB',
            border: isLight ? '1px solid #D8C6AD' : '1px solid #2A3550',
            fontFamily: 'Barlow, sans-serif',
          },
          success: {
            iconTheme: { primary: '#F97316', secondary: isLight ? '#FFF8EF' : '#1A2235' },
          },
          error: {
            iconTheme: { primary: '#EF4444', secondary: isLight ? '#FFF8EF' : '#1A2235' },
          },
        }}
      />
    </>
  );
}

export default function App(props) {
  return (
    <ThemeProvider>
      <AppContent {...props} />
    </ThemeProvider>
  );
}
