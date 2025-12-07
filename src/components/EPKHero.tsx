import React from 'react';
import albumCover from '../assets/Nordic Slang - Guilty Ripple Art - Digital Cover Art.svg';
import NordicSlangLogo from '../assets/Nordic Slang - Horizontal.svg';
import GuiltyRippleArtLogo from '../assets/Guilty Ripple Art - Horizontal.svg';
import RipplesCombined from '../assets/ripples-combined.svg';

export function EPKHero() {
  return (
    <div className="relative overflow-hidden py-20 px-8 bg-white">
      {/* Ripple decorations */}
      <div className="pointer-events-none absolute top-0 left-0 bottom-0 w-[340px] opacity-15 flex justify-start">
        <img src={RipplesCombined} alt="" className="h-full w-auto object-cover" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* EPK Label */}
        <div className="mb-12">
          <span className="inline-block bg-[#283241] text-white px-8 py-3 rounded-full uppercase tracking-[0.3em] text-xs">
            Electronic Press Kit — 2025
          </span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Section */}
          <div className="order-2 lg:order-1">
            <div className="mb-10">
              <img src={NordicSlangLogo} alt="Nordic Slang" className="w-full max-w-[620px] h-auto" />
            </div>
            
            <div className="mb-10">
              <img src={GuiltyRippleArtLogo} alt="Guilty Ripple Art" className="w-full max-w-[480px] h-auto" />
            </div>
            
            <div className="bg-[#283241] text-white p-10 rounded-2xl mb-10 shadow-xl border border-white/10">
              <p className="text-xl leading-relaxed">
                An immersive sonic journey blending atmospheric soundscapes with intricate rhythms and evocative melodies. Ten tracks exploring consequence, connection, and the ripples we create.
              </p>
            </div>
            
            <div className="flex gap-4 flex-wrap">
              <span className="bg-[#8EB2BC]/10 border-2 border-[#8EB2BC] text-[#283241] px-6 py-3 rounded-full uppercase tracking-wider text-sm">Indie Rock</span>
              <span className="bg-[#3D5B80]/10 border-2 border-[#3D5B80] text-[#283241] px-6 py-3 rounded-full uppercase tracking-wider text-sm">Alternative</span>
              <span className="bg-[#283241]/10 border-2 border-[#283241] text-[#283241] px-6 py-3 rounded-full uppercase tracking-wider text-sm">Experimental</span>
            </div>
          </div>
          
          {/* Album Cover */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-black/5">
              <img 
                src={albumCover} 
                alt="Nordic Slang - Guilty Ripple Art"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}