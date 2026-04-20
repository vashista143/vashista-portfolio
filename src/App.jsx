import React from 'react'
import Particles from './components/Particles';
import { useState, useEffect } from 'react';
import Hatsune from './components/Hatsune'
import NavBar from './components/NavBar';
import './App.css'
import TextType from "./components/TextType";
import TrueFocus from './components/FocusText';
import TimelineSection from './components/Timeline';
import StackedProjects from './components/StackedProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <>
  <div className="relative flex flex-col h-screen
    bg-[linear-gradient(180deg,#050a1f_0%,#0d1b4d_100%)]
    before:content-[''] before:absolute before:w-[600px] before:h-[600px] 
    before:top-1/2 before:right-[10%] before:-translate-y-1/2
    before:bg-[radial-gradient(circle,rgba(99,102,241,0.5)_0%,rgba(99,102,241,0)_70%)]
    before:blur-[80px] before:z-0">
    
    <Particles
      className="absolute inset-0 z-0" 
      particleCount={300}
      particleSpread={15}
      speed={0.1}
      particleColors={['#ffffff', '#6366f1', '#a855f7']}
      moveParticlesOnHover={true}
      particleHoverFactor={2}
      alphaParticles={true}
    />

    <NavBar />
<section id="home" className="relative md:flex md:flex-1 md:pl-16 w-full overflow-hidden z-10">

  {/* ================= MOBILE VIEW ================= */}
  <div className="flex flex-col gap-6 px-4 py-10 md:hidden">

    <h1 className="text-4xl font-bold text-white my-font">
      Vashista Dara
    </h1>

    <p className="text-sm text-white">
      Full Stack Developer building fast, scalable web applications that solve real problems. Focused on MERN stack and SaaS products.
    </p>

    <p className="text-lg text-white whitespace-nowrap overflow-hidden">
      I’m a{" "}
      <TextType
        text={[
          "Full Stack Developer",
          "Frontend Developer",
          "Backend Developer",
        ]}
        typingSpeed={70}
        deletingSpeed={40}
        pauseDuration={1200}
        className="text-blue-400 font-semibold"
      />
    </p>
    <div className=" h-full md:hidden items-center justify-center relative z-10">
    <Hatsune mouse={mouse} />
  </div>
    <div className="flex justify-center mt-4 text-white text-lg">
      <TrueFocus
        sentence="LinkedIn GitHub Instagram"
        manualMode={false}
        blurAmount={2}
        borderColor="#3b82f6"
        glowColor="rgba(59,130,246,0.6)"
        animationDuration={0.3}
        pauseBetweenAnimations={1.5}
      />
    </div>

  </div>

  {/* ================= DESKTOP VIEW ================= */}
  <div className="w-1/2 hidden md:flex flex-col justify-center relative z-10">

    <h1 className="text-3xl md:text-8xl font-bold text-white my-font">
      Vashista
    </h1>

    <div className="flex gap-5 ">
      <p className="text-m text-white max-w-[100%] md:max-w-[50%]">
        Full Stack Developer building fast, scalable web applications that solve real problems. Focused on MERN stack and SaaS products. I build scalable full stack applications with clean UI, solid backend, and real world impact.
      </p>

      <p className="text-3xl md:text-8xl font-bold text-white my-font">
        Dara
      </p>
    </div>

    <p className="text-xl pt-10 text-white">
      I’m a{" "}
      <TextType
        text={[
          "Full Stack Developer",
          "Frontend Developer",
          "Backend Developer",
        ]}
        typingSpeed={70}
        deletingSpeed={40}
        pauseDuration={1200}
        className="text-blue-400 text-2xl font-semibold"
      />
    </p>

<div className="absolute bottom-5 left-0 flex gap-7 text-white text-xl">
        <TrueFocus
  sentence="LinkedIn GitHub Gmail"
  manualMode={false}   
  blurAmount={2}
  borderColor="#3b82f6"
  glowColor="rgba(59,130,246,0.6)"
  animationDuration={0.3}
  pauseBetweenAnimations={1.5}   
/>
    </div>

  </div>

  <div className="w-1/2 h-full hidden md:flex items-center justify-center relative z-10">
    <Hatsune mouse={mouse} />
  </div>

</section>
  
  </div>
<TimelineSection lineColor="rgba(59,130,246,0.3)" />
<div id='projects'>
<StackedProjects title="My Projects" direction="horizontal" />
</div>
<div id='contact'>
<Contact />
</div>
<Footer/>
  </>
  )
}

export default App
