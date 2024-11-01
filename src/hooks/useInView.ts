// hooks/useInView.ts
import { useEffect, useState } from 'react';

export default function useInView(ref: React.RefObject<HTMLElement>, threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, threshold]);

  return isVisible;
}
