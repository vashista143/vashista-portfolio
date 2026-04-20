import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0d1b4d] text-white px-6 md:px-16 py-6">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Vashista Dara. All rights reserved.
        </p>

        {/* Center (optional nav) */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-[#00ff88] transition-colors">Home</a>
          <a href="#projects" className="hover:text-[#00ff88] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#00ff88] transition-colors">Contact</a>
        </div>

        {/* Right (socials) */}
        <div className="flex gap-4">
          <a href="https://github.com/vashista143" target="_blank">
            <span className="hover:text-[#00ff88]">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/vashista-dara/" target="_blank">
            <span className="hover:text-[#00ff88]">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/v_ista143" target="_blank">
            <span className="hover:text-[#00ff88]">Instagram</span>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;