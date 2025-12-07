import React from 'react';
import SpotifyIcon from '../assets/spotify.svg';
import AppleIcon from '../assets/apple-music.svg';
import BandcampIcon from '../assets/bandcamp.svg';
import YoutubeIcon from '../assets/youtube.svg';

export function StreamingLinks() {
  const platforms = [
    { name: 'Spotify', icon: SpotifyIcon, url: '#' },
    { name: 'Apple Music', icon: AppleIcon, url: '#' },
    { name: 'Bandcamp', icon: BandcampIcon, url: '#' },
    { name: 'YouTube', icon: YoutubeIcon, url: '#' }
  ];

  return (
    <div className="py-20 px-8 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-7xl lg:text-8xl mb-16 tracking-tighter uppercase">
          Listen Now
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              className="bg-white text-[#283241] p-8 rounded-xl hover:bg-[#8EB2BC] hover:text-white transition-all duration-300 transform hover:scale-105 no-print shadow-lg border border-black/5 flex flex-col items-start gap-4"
            >
              <img src={platform.icon} alt={platform.name} className="w-12 h-12" />
              <div className="text-xl uppercase tracking-wider">{platform.name}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}