import React from 'react';
import svgPaths from '../imports/svg-ie59loq9ej';

function RipplesDark() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 67 292" style={{ display: 'block' }}>
      <path d={svgPaths.p341d6180} fill="#283241" />
      <path d={svgPaths.p2898ad70} fill="#283241" />
      <path d={svgPaths.p3519f700} fill="#283241" />
      <path d={svgPaths.p13ee7700} fill="#283241" />
      <path d={svgPaths.p30800f80} fill="#283241" />
      <path d={svgPaths.p39efb800} fill="#283241" />
    </svg>
  );
}

export function AlbumSection() {
  const tracks = [
    { number: 1, title: "Guilty Ripple Art", duration: "2:52" },
    { number: 2, title: "Clever Cliché", duration: "3:26" },
    { number: 3, title: "Beware the Man", duration: "3:59" },
    { number: 4, title: "My Fear", duration: "4:05" },
    { number: 5, title: "Use Me", duration: "3:25" },
    { number: 6, title: "Small Talk Rain", duration: "2:46" },
    { number: 7, title: "Nothing In My Head", duration: "3:05" },
    { number: 8, title: "Doom", duration: "3:34" },
    { number: 9, title: "Without a Prayer", duration: "3:22" },
    { number: 10, title: "Broken Gun", duration: "5:15" }
  ];

  return (
    <div className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Background accent spanning full height (left aligned, like About) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 left-4 w-[110px] opacity-8 h-full">
          <RipplesDark />
        </div>
      </div>

      <div className="py-20 px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-16 mb-16">
          {/* Track listing takes 2 columns */}
          <div className="lg:col-span-2">
            <h2 className="heading-tratt text-7xl mb-12 tracking-tighter text-white">
              TRACK LISTING
            </h2>
            
            <div className="space-y-0">
              {tracks.map((track, index) => (
                <div 
                  key={track.number}
                  className={`group flex justify-between items-center py-6 border-b border-white/10 hover:border-[#8EB2BC] transition-all ${
                    index % 2 === 0 ? 'hover:translate-x-4' : 'hover:translate-x-2'
                  }`}
                >
                  <div className="flex items-baseline gap-6">
                    <span className="text-[#3D5B80] text-3xl tabular-nums w-12">
                      {String(track.number).padStart(2, '0')}
                    </span>
                    <span className="text-2xl text-white group-hover:italic transition-all">{track.title}</span>
                  </div>
                  <span className="text-xl text-white opacity-50 group-hover:opacity-100 tabular-nums">{track.duration}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-[#8EB2BC]/20 to-transparent rounded-full"></div>
              <div className="text-3xl text-white">35:49</div>
              <div className="flex-1 h-0.5 bg-gradient-to-l from-[#8EB2BC]/20 to-transparent rounded-full"></div>
            </div>
          </div>
          
          {/* Album details sidebar */}
          <div className="space-y-8">
            <div className="bg-white text-[#283241] p-8 rounded-xl shadow-lg border border-black/5">
              <h3 className="text-2xl mb-4 uppercase tracking-wider">Release</h3>
              <p className="mb-2">February 19, 2026</p>
              <p className="opacity-70">
                <a 
                  href="https://amusementcorecords.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline hover:text-[#8EB2BC] transition-colors"
                >
                  Amusement Co. Records
                </a>
                </p>
            </div>
            
            <div className="bg-[#283241] text-white p-8 rounded-xl shadow-lg border border-white/10">
              <h3 className="text-2xl mb-4 uppercase tracking-wider">Format</h3>
              <p className="mb-2">
                Digital&nbsp;
                <a
                  href="https://distrokid.com/hyperfollow/nordicslang/guilty-ripple-art-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#8EB2BC] transition-colors"
                >
                  (Pre-save)
                </a>
              </p>
              <p className="mb-2">
                Vinyl&nbsp; coming soon
              </p>
              <p className="opacity-90">10 Tracks</p>
            </div>
            
            <div className="bg-[#1f2533] text-white p-8 rounded-xl shadow-lg border border-white/10">
              <h3 className="text-2xl mb-4 uppercase tracking-wider">Production</h3>
              <p className="mb-2">Produced by Nordic Slang</p>
              <p className="mb-1 opacity-90 text-sm">Recorded at The Studio at Amusement Co Records and Redtoquer Studios</p>
              <p className="mb-1 opacity-90 text-sm">Mixed by Nate Torgerson</p>
              <p className="opacity-90 text-sm">Mastered by The Bit Farm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}