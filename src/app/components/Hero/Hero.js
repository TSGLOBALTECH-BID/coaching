// src/app/components/Hero/Hero.js
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <h1>Personalized Learning for Academic Success</h1>
          <p>Expert private tutoring tailored to your learning style and pace. Achieve your academic goals with our one-on-one tutoring sessions.</p>
          <div className={styles.ctaContainer}>
            <Link href="#contact" className={`${styles.ctaButton} ${styles.primary}`}>Book a Free Session</Link>
            <Link href="#subjects" className={`${styles.ctaButton} ${styles.secondary}`}>View Subjects</Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img 
            src="/learning-illustration.svg" 
            alt="Learning illustration" 
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;