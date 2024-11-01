// components/sections/Contact.tsx
"use client";

import { useRef } from 'react';
import useInView from '@/hooks/useInView';
import styles from './Contact.module.css';

const Contact = () => {
  const ref = useRef(null);
  const isVisible = useInView(ref);

  return (
    <section ref={ref} className={`${styles.contact} ${isVisible ? styles.slideIn : ''}`}>
      <h2 className={styles.title}>Schedule an Appointment</h2>
      <p className={styles.description}>
        We’d love to connect! Use the scheduler below to book a convenient time with us.
      </p>
      <div className={styles.calendlyWrapper}>
        {/* Add your Calendly link here */}
      </div>
    </section>
  );
};

export default Contact;
