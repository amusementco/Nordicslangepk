import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import composite from '../assets/nordic-slang-composite.jpg';
import outdoors from '../assets/nordic-slang-outdoors.jpg';
import posing from '../assets/nordic-slang-posing.jpg';
import seated from '../assets/nordic-slang-seated.jpg';

export function PressPhotos() {
  const [selected, setSelected] = useState<{ url: string; caption: string } | null>(null);

  useEffect(() => {
    if (selected) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [selected]);

  const photos = [
    { url: composite, caption: '' },
    { url: outdoors, caption: '' },
    { url: posing, caption: '' },
    { url: seated, caption: '' },
  ];

  return (
    <div className="py-20 px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex items-center gap-8">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#8EB2BC]"></div>
            <div className="w-3 h-3 rounded-full bg-[#3D5B80]"></div>
            <div className="w-3 h-3 rounded-full bg-[#283241]"></div>
          </div>
          <h2 className="text-7xl tracking-tighter uppercase text-white">Press Photos</h2>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
              onClick={() => setSelected(photo)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={photo.url} 
                  alt={photo.caption}
                  className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                {/* Overlay with album colors */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3D5B80]/40 to-[#8EB2BC]/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
              
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#283241] to-transparent p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-2xl uppercase tracking-widest text-white">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <Lightbox
          open={!!selected}
          close={() => setSelected(null)}
          slides={photos.map((p) => ({ src: p.url, description: p.caption }))}
          index={selected ? photos.findIndex((p) => p.url === selected.url) : 0}
          carousel={{ finite: true }}
          controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        />

        <div className="mt-12 text-center border-2 border-[#8EB2BC] p-8 rounded-full inline-block w-full">
          <p className="text-xl uppercase tracking-wider text-white">
            High-res photos available on request
          </p>
        </div>
      </div>
    </div>
  );
}