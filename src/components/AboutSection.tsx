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
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="relative bg-[#f9f3eb] text-[#283241] overflow-hidden">
      {/* Ripple decoration spanning full height */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 left-4 w-[90px] opacity-8 h-full">
        <RipplesLight />
        </div>
      </div>
      
      <div className="py-20 px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="heading-tratt text-7xl lg:text-8xl mb-12 leading-[0.9] tracking-tighter">
              THE STORY
            </h2>
            
            <div className="space-y-6 text-xl leading-relaxed">
              <p>
              Emerging from Southern Utah, Nordic Slang are an indie rock band with a distinctive, and often ambiguous  style. Their music is a compelling alloy of surprisingly disparate genres. From indie to emo, alternative rock, to new wave, Americana to punk rock, post-hardcore to classic country; both separately and collectively Nordic Slang have played and been influenced by their varied collections of musical influences, and life experiences. This varied influence, combined with their unique interpretation, have resulted in a sound that effortlessly combines intriguing melodies, with clever and thoughtful lyrics. Nordic Slang's unique and dynamic sound offers an engaging and immersive listening experience that captivates their audience.
              </p>
              {expanded && (
                <>
                  <p>
                  Founded by long-time Nate Torgerson (Erik The Red, The Trigger Locks), Juddy Anderson (The Fumbling Planets, Sundive) & Matt Fitzell (Erik the Red, Slydell, The Watson Twins, Whiskey Tooth Revival) all of whom were member of  Erik The Red; a now defunct Southern Utah band active from 2007-2015. After a hiatus, the three found the desire to play together again and Nordic Slang was born in 2021, at the end of the global pandemic amongst a surge of pent up creativity.  Joined by long-time collaborator and local multi-instrumental and iconoclast, Tyler Sevy (Whiskey Tooth Revival, Paris Greene), and shortly thereafter by local and longtime musical advocate and contributor Bucky Flowers (Meg & Dia, The Late Shakers). This potent combination quickly endeared Nordic Slang to their local music scene, earning them a devoted fanbase.
                  </p>
                  <p>
                  Anderson and Flowers, with their past experience of founding and operating The Electric Theater, a revered live music venue in St. George, UT, took their passion for music a step further In early 2023 they, along with bandmate Nate Torgerson, launched Amusement Co. Records, bringing their focus to the production side of the music industry. The label became the vehicle for Nordic Slang to channel the creativity found in the preceding quiet years, and it quickly became their self produced debut album “Call it Art” (2023) which overflowed into a fast-following EP “Kisser Cloud” (2023). Amusement Co. Records have also fostered some other local talent, and with these brilliant artists they have curated and recorded an impressive catalog of diverse, high quality eclectic releases in 2023. 
                  </p>
                  <p>
                  Besides delivering dynamic live performances in promotion of their recent releases, which include a notable appearance alongside the legendary indie band The Mother Hips, the band is once again immersing themselves in the creative process. They released their new single "Sick of You" in late 2023 and are busy crafting their next set of new songs set to be released in 2024. With a steadfast dedication to creating resonant music, and fostering the dormant Southern Utah music scene, Nordic Slang, alongside Amusement Co. Records are unceasingly exploring new sonic frontiers and pioneering fresh musical paths.
                  </p>
                </>
              )}
              <button
                className="mt-4 text-sm uppercase tracking-wider underline"
                onClick={() => setExpanded((v) => !v)}
              >
                {expanded ? 'Read less' : 'Read more'}
              </button>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-[#fff5d1] text-[#283241] p-10 mb-10 rounded-2xl border border-black/5">
              <h3 className="text-3xl mb-6 uppercase tracking-wider">The Album</h3>
              <p className="text-lg leading-relaxed">
                With "Guilty Ripple Art," Nordic Slang explores themes of consequence, connection, 
                and the waves we create in the world around us. Each track represents 
                a different ripple—some subtle, some dramatic—all interconnected in unexpected ways.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}