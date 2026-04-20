import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import data from '../projects';
gsap.registerPlugin(ScrollTrigger);

const Card = ({ item, index }) => (
  <div 
    className="item absolute w-[92%] sm:w-[85%] h-[80%] sm:h-[75%] text-white overflow-hidden shadow-2xl origin-top
               bg-white/10 border border-white/10 rounded-[20px] NeueMetanaMonobold-font sm:rounded-[24px] 
               flex flex-col group transition-all duration-500"
    style={{ zIndex: index + 1 }}
  >
    {/* Header Section */}
    <div className='w-full flex flex-col md:flex-row md:items-start md:justify-between p-4 sm:p-6 md:p-10 gap-4'>
        
        {/* Left Side */}
        <div className='flex gap-4 sm:gap-6 items-start'>
          
          {/* Background Number */}
          <p className='text-[3rem] sm:text-[4rem] md:text-[6rem] font-bold leading-none opacity-10 select-none'>
            {String(index + 1).padStart(2, '0')}
          </p>
          
          {/* Text Content */}
          <div className='flex flex-col fade-content'>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-[2px] md:tracking-[4px]">
              {item.title}
            </h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {item.techStack?.map((tech, i) => (
                <span 
                  key={i}
                  className="text-[10px] sm:text-xs px-2 py-1 bg-white/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-xs NeueMetanaMonolight-font sm:text-sm md:text-md text-gray-300  mt-2 md:mt-4 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>

        {/* Links */}
        <div className='flex flex-row md:flex-col gap-3 fade-content'>

          {item.livelink && (
            <a 
              href={item.livelink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm sm:text-base flex items-center gap-2 hover:text-[#00ff88] transition-colors"
            >
              <span>LIVE</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          )}

          {item.gitlink && (
            <a 
              href={item.gitlink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm sm:text-base text-white/60 hover:text-white flex items-center gap-2 transition-colors"
            >
              <span>GITHUB</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          )}
        </div>
    </div> 

    {/* Preview Section */}
    <a 
  href={item.livelink || "#"} 
  target="_blank" 
  rel="noopener noreferrer"
  className="h-[55%] sm:h-[60%] md:h-[65%]
  mx-4 sm:mx-6 md:mx-8 mb-4 sm:mb-6 md:mb-8 
  rounded-lg sm:rounded-xl overflow-hidden bg-white/5 border border-white/5 
  relative group-hover:border-[#00ff88]/30 transition-all duration-300 
  flex items-center justify-center cursor-pointer"
>

  {item.imagesrc ? (
    <img 
      src={item.imagesrc} 
      alt={item.title}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  ) : (
    <div className="text-white/20 uppercase tracking-widest text-xs sm:text-sm">
      Project Preview
    </div>
  )}

  {/* Optional overlay effect */}
  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
    <span className="text-white text-sm tracking-widest">VIEW PROJECT</span>
  </div>

</a>  </div>
);
const ScrollSection = ({ data, direction = "vertical", title }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const items = gsap.utils.toArray(containerRef.current.querySelectorAll('.item'));
    
    // Initial Setup
    items.forEach((item, i) => {
      if (i !== 0) {
        gsap.set(item, { 
          yPercent: direction === "vertical" ? 100 : 0,
          xPercent: direction === "horizontal" ? 100 : 0
        });
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start: "top top",
        end: () => `+=${items.length * 60}%`, // Longer scroll for more "sticky" time
        scrub: 0.3,
      },
      defaults: { ease: "none" }
    });

items.forEach((item, index) => {
  const isLast = index === items.length - 1;
  const nextCard = items[index + 1];
  const fadeElements = item.querySelectorAll('.fade-content');

  if (!isLast) {
    // 1. Create a unique label for this transition
    const label = `step-${index}`;
    tl.add(label);

    // 2. Shrink the CURRENT card
    tl.to(item, {
  scale: 0.92,
  y: -20,
  duration: 0.6,
  ease: "power2.out"
}, label);

    // 3. Fade the TEXT of the current card
    tl.to(fadeElements, {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.5
    }, label);
    
    // 4. Slide the NEXT card up (Starting slightly AFTER the shrink begins)
    tl.to(nextCard, {
      yPercent: 0,
      xPercent: 0,
      duration: 1,
      ease: "power2.out" 
    }, label); // The 0.2 delay prevents the "collision"
    
  }
});
tl.fromTo(".view-more-btn", 
  { opacity: 0, y: 30 }, 
  { opacity: 1, y: 0, duration: 0.5 },
  ">"
);
  }, { scope: sectionRef });
  

  return (
  <div className="relative z-10 w-full bg-gradient-to-b from-[#0D1B4D] to-[#0d1b4d]">
        <section className="pl-30">
        <h1 className="text-5xl text-white my-font font-bold">My Work</h1>
      </section>

      <section ref={sectionRef} className="relative h-screen w-full overflow-hidden ">
        <div ref={containerRef} className="relative h-full w-full flex items-center justify-center">
          {data.map((item, idx) => (
            <Card key={idx} item={item} index={idx} />
          ))}
        </div>
        <div className="absolute bottom-6 left-0 w-full flex justify-center z-[999]">
    <a 
      href="https://github.com/vashista143/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-white font-semibold view-more-btn"
    >
      View more...
    </a>
  </div>
      </section>
    </div>
  );
};

export default function StackedProjects() {
  

  return (
    <main className="relative bg-gradient-to-b from-[#0D1B4D] to-[#0d1b4d]
    before:content-[''] before:absolute before:w-[600px] before:h-[600px] 
    before:top-1/2 before:right-[10%] before:-translate-y-1/2
    before:bg-[radial-gradient(circle,rgba(99,102,241,0.5)_0%,rgba(99,102,241,0)_70%)]
    before:blur-[80px] before:z-0">
      <ScrollSection title="Sticky Card Stack" data={data} />
    </main>
  );
}