import React from 'react';
import { Mail, Globe } from 'lucide-react';
import { Icon } from '@iconify/react';

export function ContactSection() {
  return (
    <div className="py-20 px-8 bg-white text-[#283241] relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="heading-tratt text-7xl lg:text-8xl mb-12 tracking-tighter uppercase text-center">
          Get In Touch
        </h2>
        
        <div className="text-[#283241] p-10 rounded-2xl space-y-6 text-center">
          <div className="flex justify-center items-center">
            <Mail className="w-7 h-7 text-[#283241] mr-2" />
            <div className="text-2xl font-semibold tracking-tight">amusementcorecords@gmail.com</div>
          </div>
          <div className="text-sm uppercase tracking-wider text-[#555]">Press / Booking / General</div>
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            <a href="https://instagram.com/nordicslang" className="flex items-center gap-2 hover:text-[#3D5B80] transition-colors">
              <Icon icon="mdi:instagram" width={22} height={22} /> Instagram
            </a>
            <a href="https://www.facebook.com/profile.php?id=100082040966236" className="flex items-center gap-2 hover:text-[#3D5B80] transition-colors">
              <Icon icon="mdi:facebook" width={22} height={22} /> Facebook
            </a>
            <a href="https://www.youtube.com/channel/UC6RGoWOTG7OCmSLwX1iAf7g" className="flex items-center gap-2 hover:text-[#3D5B80] transition-colors">
              <Icon icon="mdi:youtube" width={22} height={22} /> YouTube
            </a>
            <a href="https://www.tiktok.com/@nordicslang" className="flex items-center gap-2 hover:text-[#3D5B80] transition-colors">
              <Icon icon="simple-icons:tiktok" width={22} height={22} /> TikTok
            </a>
            <a href="https://nordicslang.com" className="flex items-center gap-2 hover:text-[#3D5B80] transition-colors">
              <Globe className="w-5 h-5" /> Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}