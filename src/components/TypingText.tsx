import { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

const TypingText = ({ 
  text, 
  speed = 50, 
  className = "", 
  onComplete,
  showCursor = true 
}: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsComplete(false);
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && !isComplete && <span className="terminal-cursor">█</span>}
    </span>
  );
};

export default TypingText;
