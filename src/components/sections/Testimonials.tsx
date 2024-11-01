// components/sections/Testimonials.tsx
import styles from './Testimonials.module.css';

const testimonialsData = [
  { name: 'Client One', feedback: 'This service was exceptional and exceeded all my expectations!' },
  { name: 'Client Two', feedback: 'A fantastic experience with remarkable attention to detail.' },
  { name: 'Client Three', feedback: 'Professional and reliable - highly recommended!' },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>What Our Clients Say</h2>
      <div className={styles.testimonialList}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className={styles.card}>
            <p className={styles.feedback}>{testimonial.feedback}</p>
            <p className={styles.clientName}>- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
