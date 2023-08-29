'use client'
import React, { useEffect, useState } from 'react';
import anime from 'animejs';

const FullScreenDiv = () => {
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  useEffect(() => {
    console.log(lastScrollTop);
}, [lastScrollTop]);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      //when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop) {
      anime({
        targets: '.animateMe',
        scale: [1, 1.5],
        duration: 1500,
        easing: 'easeOutQuint',
      });
    } else {
      anime({
        targets: '.animateMe',
        scale: [1.5,1],
        duration: 1500,
        easing: 'easeOutQuint'
      })
    }

    setLastScrollTop(currentScrollTop);
    console.log(lastScrollTop)
  }

  return (
    <div className="animateMe w-full h-screen bg-blue-500 flex items-center justify-center">
      Scroll to Animate - Scroll to Animate - Scroll to Animate
    </div>
  );
}

export default FullScreenDiv;
