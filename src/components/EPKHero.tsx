import React from 'react';
import albumCover from 'figma:asset/54f8ea0259191a7db8817a32386834ebfbff8864.png';
import svgPaths from '../imports/svg-ie59loq9ej';

function NordicSlangLogo() {
  return (
    <svg className="w-full max-w-[600px]" fill="none" viewBox="0 0 429 43" style={{ display: 'block' }}>
      <path d={svgPaths.p2d2cd180} fill="#283241" />
      <path d={svgPaths.p9221000} fill="#283241" />
      <path d={svgPaths.p1ac1f200} fill="#283241" />
      <path d={svgPaths.p2b268880} fill="#283241" />
      <path d={svgPaths.p1847bf00} fill="#283241" />
      <path d={svgPaths.p38d4ec80} fill="#283241" />
      <path d={svgPaths.pde5e780} fill="#283241" />
      <path d={svgPaths.p2f878480} fill="#283241" />
      <path d={svgPaths.pb5ce300} fill="#283241" />
      <path d={svgPaths.p5c166c0} fill="#283241" />
      <path d={svgPaths.p3b07ac90} fill="#283241" />
    </svg>
  );
}

function GuiltyRippleArtLogo() {
  return (
    <svg className="w-full max-w-[450px]" fill="none" viewBox="0 0 313 23" style={{ display: 'block' }}>
      <path d={svgPaths.p24cac600} fill="#8EB2BC" />
      <path d={svgPaths.p38c49400} fill="#8EB2BC" />
      <path d={svgPaths.p2cdd4f0} fill="#8EB2BC" />
      <path d={svgPaths.p3b34800} fill="#8EB2BC" />
      <path d={svgPaths.p27f1fc00} fill="#8EB2BC" />
      <path d={svgPaths.p3d20e100} fill="#8EB2BC" />
      <path d={svgPaths.p3dc55080} fill="#8EB2BC" />
      <path d={svgPaths.p38fe6e00} fill="#8EB2BC" />
      <path d={svgPaths.p3d1a0e00} fill="#8EB2BC" />
      <path d={svgPaths.p229f1f80} fill="#8EB2BC" />
      <path d={svgPaths.p32ff8700} fill="#8EB2BC" />
      <path d={svgPaths.p628980} fill="#8EB2BC" />
      <path d={svgPaths.p3c2702f1} fill="#8EB2BC" />
      <path d={svgPaths.p2e7e2100} fill="#8EB2BC" />
      <path d={svgPaths.pe64ea80} fill="#8EB2BC" />
    </svg>
  );
}

function RipplesDecoration() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 201 294" style={{ display: 'block' }}>
      <path d={svgPaths.p18b16f00} fill="#3D5B80" opacity="0.4" />
      <path d={svgPaths.p10740f00} fill="#3D5B80" opacity="0.4" />
      <path d={svgPaths.p17121400} fill="#3D5B80" opacity="0.4" />
      <path d={svgPaths.p27b10a00} fill="#3D5B80" opacity="0.4" />
      <path d={svgPaths.p38184fd0} fill="#3D5B80" opacity="0.4" />
      <path d={svgPaths.p13216580} fill="#3D5B80" opacity="0.4" />
      <path d={svgPaths.p25e8b880} fill="#3D5B80" opacity="0.4" />
      <path d={svgPaths.p30be80} fill="#3D5B80" opacity="0.4" />
      <path d={svgPaths.p2e803300} fill="#8EB2BC" opacity="0.6" />
      <path d={svgPaths.pd97c80} fill="#8EB2BC" opacity="0.6" />
      <path d={svgPaths.p13cdd100} fill="#8EB2BC" opacity="0.6" />
      <path d={svgPaths.p4011900} fill="#8EB2BC" opacity="0.6" />
      <path d={svgPaths.p2f6cf840} fill="#8EB2BC" opacity="0.6" />
      <path d={svgPaths.p2946c000} fill="#8EB2BC" opacity="0.6" />
    </svg>
  );
}

export function EPKHero() {
  return (
    <div className="relative overflow-hidden py-20 px-8 bg-white">
      {/* Ripple decorations */}
      <div className="absolute top-0 right-0 w-[400px] opacity-15">
        <RipplesDecoration />
      </div>
      <div className="absolute bottom-0 left-0 w-[300px] opacity-10">
        <RipplesDecoration />
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
              <NordicSlangLogo />
            </div>
            
            <div className="my-10 relative flex gap-3 items-center">
              <div className="h-1 w-32 bg-[#3D5B80] rounded-full"></div>
              <div className="h-1 w-20 bg-[#8EB2BC] rounded-full"></div>
              <div className="h-1 w-12 bg-[#283241] rounded-full"></div>
            </div>
            
            <div className="mb-10">
              <GuiltyRippleArtLogo />
            </div>
            
            <div className="bg-gradient-to-br from-[#283241] to-[#3D5B80] text-white p-10 rounded-3xl mb-10 shadow-xl">
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
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