import { useEffect } from 'react';

export const useScroll = (fn: () => void) => {
  useEffect(() => {
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, [fn]);
};
