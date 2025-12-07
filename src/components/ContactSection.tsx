import React from 'react';
import { Mail, Globe, Phone } from 'lucide-react';

export function ContactSection() {
  return (
    <div className="py-20 px-8 bg-white text-[#283241] relative overflow-hidden">
      {/* Organic flowing background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8EB2BC] to-transparent rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#3D5B80] to-transparent rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-7xl lg:text-8xl mb-16 tracking-tighter uppercase">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#283241] to-[#3D5B80] text-white p-10 rounded-3xl shadow-xl hover:scale-105 transition-transform">
            <h3 className="text-3xl mb-8 uppercase tracking-wider">Press</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#8EB2BC]" />
                <a href="mailto:press@nordicslang.com" className="text-lg hover:text-[#8EB2BC] transition-colors">
                  press@nordicslang.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#8EB2BC]" />
                <a href="tel:+1234567890" className="text-lg hover:text-[#8EB2BC] transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#3D5B80] to-[#8EB2BC] text-white p-10 rounded-3xl shadow-xl hover:scale-105 transition-transform">
            <h3 className="text-3xl mb-8 uppercase tracking-wider">Booking</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <a href="mailto:booking@nordicslang.com" className="text-lg hover:text-white/80 transition-colors">
                  booking@nordicslang.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white border-4 border-[#8EB2BC] text-[#283241] p-10 rounded-3xl shadow-xl hover:scale-105 transition-transform">
            <h3 className="text-3xl mb-8 uppercase tracking-wider">Online</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Globe className="w-6 h-6" />
                <a href="https://nordicslang.com" className="text-lg hover:text-[#3D5B80] transition-colors">
                  nordicslang.com
                </a>
              </div>
            </div>
            <div className="mt-8">
              <p className="uppercase tracking-wider text-sm mb-4 opacity-70">Follow</p>
              <div className="space-y-2">
                <a href="#" className="block hover:text-[#3D5B80] transition-colors">Instagram</a>
                <a href="#" className="block hover:text-[#3D5B80] transition-colors">Twitter</a>
                <a href="#" className="block hover:text-[#3D5B80] transition-colors">Facebook</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center text-xl">
          <div className="inline-block bg-gradient-to-r from-[#8EB2BC]/10 to-[#3D5B80]/10 rounded-full py-6 px-16">
            © 2025 NORDIC SLANG — ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </div>
  );
}