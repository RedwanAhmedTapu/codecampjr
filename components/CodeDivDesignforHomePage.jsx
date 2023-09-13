"use client"
import React, { useState, useEffect } from 'react';
 

const CodeDivDesignforHomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scaleValue = 1 + (scrollY / 1000); // Adjust the scale factor as needed
  const translateY = scrollY / 5; // Adjust the translation factor as needed

  return (
    <div
      className={`w-80vw h-48 bg-black text-green-500 rounded-lg shadow-lg flex items-center justify-center transform scale-${scaleValue} translate-y-${translateY}`}
    >
      Your Neon Light Content
    </div>
  );
};

export default CodeDivDesignforHomePage;
