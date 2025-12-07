import React from 'react';
import { Music, Radio, Headphones, Disc } from 'lucide-react';
import svgPaths from '../imports/svg-ie59loq9ej';

function RipplesMedium() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 96 292" style={{ display: 'block' }}>
      <path d={svgPaths.p2bd17838} fill="#3D5B80" />
      <path d={svgPaths.p157860f0} fill="#3D5B80" />
      <path d={svgPaths.p36a67d00} fill="#3D5B80" />
      <path d={svgPaths.p3f15c500} fill="#3D5B80" />
      <path d={svgPaths.p15f08d00} fill="#3D5B80" />
      <path d={svgPaths.p16e9c000} fill="#3D5B80" />
      <path d={svgPaths.p250b6000} fill="#3D5B80" />
      <path d={svgPaths.p1d34a280} fill="#3D5B80" />
    </svg>
  );
}

export function StreamingLinks() {
  const platforms = [
    { name: 'Spotify', icon: Music, url: '#' },
    { name: 'Apple Music', icon: Headphones, url: '#' },
    { name: 'Bandcamp', icon: Disc, url: '#' },
    { name: 'SoundCloud', icon: Radio, url: '#' }
  ];

  return (
    <div className="py-20 px-8 bg-gradient-to-br from-[#3D5B80] to-[#283241] text-white relative overflow-hidden">
      {/* Ripple decorations */}
      <div className="absolute top-0 left-1/4 w-[180px] opacity-10">
        <RipplesMedium />
      </div>
      <div className="absolute bottom-0 right-1/4 w-[150px] opacity-10">
        <RipplesMedium />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-7xl lg:text-8xl mb-16 tracking-tighter uppercase">
          Listen Now
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <a
                key={platform.name}
                href={platform.url}
                className="bg-white text-[#283241] p-8 rounded-3xl hover:bg-[#8EB2BC] hover:text-white transition-all duration-300 transform hover:scale-105 no-print shadow-xl"
              >
                <Icon className="w-16 h-16 mb-4" />
                <div className="text-xl uppercase tracking-wider">{platform.name}</div>
              </a>
            );
          })}
        </div>
        
        <div className="mt-16 text-center text-2xl opacity-0 h-0 overflow-hidden print:opacity-100 print:h-auto print:overflow-visible">
          <p>Spotify • Apple Music • Bandcamp • SoundCloud</p>
          <p className="mt-4 uppercase tracking-wider">www.nordicslang.com</p>
        </div>
      </div>
    </div>
  );
}