import { useEffect, useState } from "react";

const TextType = ({
  text = [],
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 1500,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = text[index];
    let timeout;

    if (!isDeleting) {
      // Typing
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + currentText[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      // Deleting
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, deletingSpeed);
      } else {
        // Move to next word
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % text.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, text, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {displayedText}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
};

export default TextType;