// components/ui/Button.tsx
import Link from 'next/link';
import styles from './Button.module.css';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

const Button = ({ href, children }: ButtonProps) => {
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
};

export default Button;
