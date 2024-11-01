// components/sections/Contact.tsx
import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Schedule an Appointment</h2>
      <p className={styles.description}>
        We’d love to connect! Use the scheduler below to book a convenient time with us.
      </p>
      <div className={styles.calendlyWrapper}>
        {/* <InlineWidget url="https://calendly.com/your-calendly-link" /> */}
        Calendly Here
      </div>
    </section>
  );
};

export default Contacts;
