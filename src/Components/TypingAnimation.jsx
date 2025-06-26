import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingAnimation = () => {
  const el = useRef(null); // DOM reference

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["", "Frontend Developer", "Web Developer", "Software Engineer"],
      typeSpeed: 120,
      backSpeed: 70,
      loop: true
    });

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span ref={el}></span>
  );
};

export default TypingAnimation;
