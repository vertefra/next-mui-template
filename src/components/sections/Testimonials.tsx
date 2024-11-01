// components/sections/Testimonials.tsx
"use client";

import { useRef } from 'react';
import useInView from '@/hooks/useInView';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const ref = useRef(null);
  const isVisible = useInView(ref);

  return (
    <section ref={ref} className={`${styles.testimonials} ${isVisible ? styles.slideIn : ''}`}>
      <h2 className={styles.title}>What Our Clients Say</h2>
      <div className={styles.testimonialList}>
        {/* List your testimonials here */}
      </div>
    </section>
  );
};

export default Testimonials;
