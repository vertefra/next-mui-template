// components/sections/Services.tsx
import styles from './Services.module.css';

const servicesData = [
  { title: 'Service One', description: 'Description of service one.' },
  { title: 'Service Two', description: 'Description of service two.' },
  { title: 'Service Three', description: 'Description of service three.' },
];

const Services = () => {
  return (
    <section className={styles.services}>
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
