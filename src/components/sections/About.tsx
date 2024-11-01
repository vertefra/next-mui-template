'use client'
// components/sections/About.tsx
import { useRef } from 'react';
import useInView from '@/hooks/useInView';
import styles from './About.module.css';

const About = () => {
  const ref = useRef(null);
  const isVisible = useInView(ref);

  return (
    <section ref={ref} className={`${styles.about} ${isVisible ? styles.slideIn : ''}`}>
      <h2 className={styles.title}>About Us</h2>
      <p className={styles.description}>
        Our mission is to provide high-quality services tailored to your needs. With years of experience,
        we ensure professionalism and dedication in every project.
      </p>
    </section>
  );
};

export default About;
