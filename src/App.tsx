import React from 'react';
import { EPKHero } from './components/EPKHero';
import { AboutSection } from './components/AboutSection';
import { AlbumSection } from './components/AlbumSection';
import { PressPhotos } from './components/PressPhotos';
import { ContactSection } from './components/ContactSection';
import { StreamingLinks } from './components/StreamingLinks';

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
        }
        
        /* Noise texture */
        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.03;
          z-index: 1;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>
      
      <EPKHero />
      <AboutSection />
      <AlbumSection />
      <StreamingLinks />
      <PressPhotos />
      <ContactSection />
      
    </div>
  );
}