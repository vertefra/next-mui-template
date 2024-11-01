// components/sections/About.tsx
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.description}>
          Our mission is to provide high-quality services tailored to your needs. With years of
          experience, we ensure professionalism and dedication in every project.
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <img src="/path-to-your-image.jpg" alt="About us" className={styles.image} />
      </div>
    </section>
  );
};

export default About;
