import React from 'react';
import svgPaths from '../imports/svg-ie59loq9ej';

function RipplesLight() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 78 293" style={{ display: 'block' }}>
      <path d={svgPaths.p2c7e46f0} fill="#8EB2BC" />
      <path d={svgPaths.p3623900} fill="#8EB2BC" />
      <path d={svgPaths.p12c9c300} fill="#8EB2BC" />
      <path d={svgPaths.p20489df0} fill="#8EB2BC" />
      <path d={svgPaths.pbb1f000} fill="#8EB2BC" />
      <path d={svgPaths.p29474a0} fill="#8EB2BC" />
    </svg>
  );
}

export function AboutSection() {
  return (
    <div className="py-20 px-8 bg-white text-[#283241] relative overflow-hidden">
      {/* Ripple decoration */}
      <div className="absolute top-0 right-8 w-[150px] opacity-10">
        <RipplesLight />
      </div>
      <div className="absolute bottom-0 left-8 w-[100px] opacity-8">
        <RipplesLight />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-7xl lg:text-8xl mb-12 leading-[0.9] tracking-tighter">
              THE<br/>
              <span className="italic">STORY</span>
            </h2>
            
            <div className="space-y-6 text-xl leading-relaxed">
              <p>
                Nordic Slang emerged from the convergence of experimental soundscapes and 
                traditional songwriting, creating a unique voice in the contemporary music scene.
              </p>
              <p>
                Drawing inspiration from the stark beauty of Nordic landscapes and the complexity 
                of modern life, the band crafts music that is both introspective and expansive.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-br from-[#283241] to-[#3D5B80] text-white p-10 mb-10 rounded-3xl shadow-xl">
              <h3 className="text-3xl mb-6 uppercase tracking-wider">The Album</h3>
              <p className="text-lg leading-relaxed">
                With "Guilty Ripple Art," Nordic Slang explores themes of consequence, connection, 
                and the waves we create in the world around us. Each track represents 
                a different ripple—some subtle, some dramatic—all interconnected in unexpected ways.
              </p>
            </div>
            
            <div className="space-y-4 text-lg">
              <div className="flex items-start gap-4">
                <span className="text-4xl text-[#8EB2BC]">●</span>
                <p>Breakthrough performances at major indie festivals</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-4xl text-[#8EB2BC]">●</span>
                <p>Featured on leading indie music playlists</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-4xl text-[#3D5B80]">●</span>
                <p>Critical acclaim for innovative sound design</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-4xl text-[#3D5B80]">●</span>
                <p>Growing international fanbase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}