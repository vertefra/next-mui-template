'use client'

// components/sections/Services.tsx
import { useRef } from 'react';
import styles from './Services.module.css';
import useInView from '@/hooks/useInView';

const servicesData = [
  { title: 'Service One', description: 'Description of service one.' },
  { title: 'Service Two', description: 'Description of service two.' },
  { title: 'Service Three', description: 'Description of service three.' },
];

const Services = () => {
  const ref = useRef(null);
  const isVisible = useInView(ref);

  return (
    <section ref={ref} className={`${styles.contact} ${isVisible ? styles.slideIn : ''}`}>
      <h2 className={styles.title}>Our Services</h2>
      <div className={styles.serviceList}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
