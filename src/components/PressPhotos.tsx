import React from 'react';

export function PressPhotos() {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1677957855684-866bda07805e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMGJhbmQlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjUwMTM5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'LIVE'
    },
    {
      url: 'https://images.unsplash.com/photo-1682372182177-9f8b9d9a59cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTA2MDUxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'STUDIO'
    },
    {
      url: 'https://images.unsplash.com/photo-1739051261848-fdf6c43fe0d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5kJTIwcHJvbW8lMjBwaG90b3xlbnwxfHx8fDE3NjUwNjA1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'PROMO'
    }
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
        
        <div className="grid md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl shadow-2xl"
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
        
        <div className="mt-12 text-center border-2 border-[#8EB2BC] p-8 rounded-full inline-block w-full">
          <p className="text-xl uppercase tracking-wider text-white">
            High-res photos available on request
          </p>
        </div>
      </div>
    </div>
  );
}