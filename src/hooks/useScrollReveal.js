import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ScrollReveal) {
      const sr = window.ScrollReveal();
      
      // Reset any previous instances
      sr.clean('.load-hidden');
      
      // Reveal all elements with load-hidden class
      const elements = document.querySelectorAll('.load-hidden');
      elements.forEach((element) => {
        sr.reveal(element, {
          distance: '60px',
          duration: 1000,
          delay: 200,
          easing: 'ease-out',
          origin: 'bottom',
          reset: false
        });
      });
    }
  }, []);
}

