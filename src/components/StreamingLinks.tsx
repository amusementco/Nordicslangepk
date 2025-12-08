import { Icon } from '@iconify/react';

export function StreamingLinks() {
  const platforms = [
    { name: 'Spotify', icon: 'mdi:spotify', color: '#1DB954', url: 'https://open.spotify.com/artist/2twfzRlhB1IFqTZJZrSGIz' },
    { name: 'Apple Music', icon: 'mdi:apple', color: '#000000', url: 'https://music.apple.com/us/artist/nordic-slang/1688383708' },
    { name: 'Bandcamp', icon: 'simple-icons:bandcamp', color: '#629AA9', url: 'https://nordicslang.bandcamp.com/album/call-it-art' },
    { name: 'YouTube', icon: 'mdi:youtube', color: '#FF0000', url: 'https://www.youtube.com/channel/UC6RGoWOTG7OCmSLwX1iAf7g' }
  ];

  return (
    <div className="py-20 px-8 bg-[#fff5d1] text-[#283241]">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-tratt text-7xl lg:text-8xl mb-16 tracking-tighter uppercase">
          Listen Now
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              className="bg-white text-[#283241] p-8 rounded-xl hover:bg-[#8EB2BC] hover:text-white transition-all duration-300 transform hover:scale-105 no-print shadow-lg border border-black/5 flex flex-col items-start gap-4"
            >
              <Icon icon={platform.icon} color={platform.color} width={48} height={48} />
              <div className="text-xl uppercase tracking-wider">{platform.name}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}