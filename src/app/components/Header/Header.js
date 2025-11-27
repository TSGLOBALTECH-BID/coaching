// src/app/components/Header/Header.js
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logo}>TutorPro</Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="#home" className={styles.navLink}>Home</Link></li>
            <li><Link href="#subjects" className={styles.navLink}>Subjects</Link></li>
            <li><Link href="#about" className={styles.navLink}>About</Link></li>
            <li><Link href="#testimonials" className={styles.navLink}>Testimonials</Link></li>
            <li><Link href="#contact" className={`${styles.ctaButton} ${styles.primary}`}>Contact Me</Link></li>
          </ul>
          <button className={styles.menuButton} aria-label="Toggle menu">
            <span className={styles.menuIcon}></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;