// components/sections/Hero.tsx
import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Welcome to Our Site</h1>
        <p>Your short, compelling tagline goes here.</p>
        <Button href="/contact">Book an Appointment</Button>
      </div>
    </section>
  );
};

export default Hero;
