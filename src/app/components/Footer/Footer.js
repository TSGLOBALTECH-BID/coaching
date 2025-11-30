// src/app/components/Footer/Footer.js
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>TutorPro</h3>
            <p>Personalized home tutoring services to help you achieve academic excellence.</p>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className={`${styles.socialIcon} fab fa-facebook-f`}></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className={`${styles.socialIcon} fab fa-twitter`}></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className={`${styles.socialIcon} fab fa-instagram`}></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className={`${styles.socialIcon} fab fa-linkedin-in`}></i>
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="#home" className={styles.footerLink}>Home</Link></li>
              <li><Link href="#subjects" className={styles.footerLink}>Subjects</Link></li>
              <li><Link href="#about" className={styles.footerLink}>About</Link></li>
              <li><Link href="#testimonials" className={styles.footerLink}>Testimonials</Link></li>
              <li><Link href="#contact" className={styles.footerLink}>Contact</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Contact Us</h4>
            <ul className={styles.contactInfo}>
              <li><i className={`${styles.contactIcon} fas fa-map-marker-alt`}></i> 123 Education St, Learning City</li>
              <li><i className={`${styles.contactIcon} fas fa-phone`}></i> +1 234 567 8900</li>
              <li><i className={`${styles.contactIcon} fas fa-envelope`}></i> info@tutorpro.com</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} TutorPro. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
            <span className={styles.divider}>|</span>
            <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;