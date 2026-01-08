import { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

export function useTiltEffect() {
  useEffect(() => {
    const elements = document.querySelectorAll('.js-tilt');
    if (elements.length > 0) {
      VanillaTilt.init(elements, {
        max: 4,
        glare: true,
        'max-glare': 0.5
      });
    }

    // Cleanup function
    return () => {
      elements.forEach((element) => {
        if (element.vanillaTilt) {
          element.vanillaTilt.destroy();
        }
      });
    };
  }, []);
}

