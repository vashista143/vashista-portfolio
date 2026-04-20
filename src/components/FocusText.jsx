import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
const TrueFocus = ({
  sentence = 'True Focus',
  pauseBetweenAnimations = 1.5,
  separator = ' ',
  manualMode = false,
  blurAmount = 5,
  borderColor = 'green',
  glowColor = 'rgba(0, 255, 0, 0.6)',
  animationDuration = 0.5,
}) => {
  const words = sentence.split(separator);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, pauseBetweenAnimations * 1000);

      return () => clearInterval(interval);
    }
  }, [manualMode, pauseBetweenAnimations, words.length]);
  
  const links = [
  "https://www.linkedin.com/in/vashista-dara/",
  "https://github.com/vashista143/",
  "https://www.instagram.com/v_ista143",
];

useEffect(() => {
  if (!wordRefs.current[currentIndex] || !containerRef.current) return;

  requestAnimationFrame(() => {
    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height
    });
  });
}, [currentIndex]);
  return (
    <div
  className="focus-container flex items-center gap-3 whitespace-nowrap 
             text-sm sm:text-base md:text-lg leading-none"
  ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <a
            key={index}
            href={links[index]}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => (wordRefs.current[index] = el)}
            className={`focus-word ${isActive ? 'active' : ''}`}
            style={{
              filter: isActive ? `blur(0px)` : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s ease`
            }}
            onMouseEnter={() => setCurrentIndex(index)}
          >
            {word}
          </a>
        );
      })}

      <motion.div
        className="focus-frame"
        animate={focusRect}
        transition={{ duration: animationDuration }}
      >
        <span className="corner top-left"></span>
        <span className="corner top-right"></span>
        <span className="corner bottom-left"></span>
        <span className="corner bottom-right"></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;
