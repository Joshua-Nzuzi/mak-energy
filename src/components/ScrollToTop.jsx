import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          target.classList.add('highlighted');
          setTimeout(() => target.classList.remove('highlighted'), 2000);
          return true;
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return true;
      }
      return false;
    };

    // Essaie jusqu’à 10 fois max si la cible n’existe pas encore
    let attempts = 0;
    const tryScroll = () => {
      const success = handleScroll();
      if (!success && attempts < 10) {
        attempts++;
        setTimeout(tryScroll, 200);
      }
    };

    tryScroll();
  }, [pathname, hash]);

  return null;
}
