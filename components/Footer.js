import Link from 'next/link';
import styles from './Footer.module.css';

// Inline SVG social icons (brand icons were removed from lucide-react v1+)
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const IconTwitter = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.03 4.388 11.023 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.018 1.79-4.687 4.532-4.687 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.929-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.096 24 18.103 24 12.073z"/>
  </svg>
);
const IconYoutube = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const cols = [
  {
    heading: 'About Us',
    links: [
      { label: 'Our Company',   href: '/about'   },
      { label: 'Our Coffee',    href: '/about'   },
      { label: 'Social Impact', href: '/about'   },
      { label: 'Careers',       href: '/about'   },
    ],
  },
  {
    heading: 'Menu',
    links: [
      { label: 'Hot Coffees',  href: '/menu' },
      { label: 'Cold Coffees', href: '/menu' },
      { label: 'Frappuccino®', href: '/menu' },
      { label: 'Food',         href: '/menu' },
      { label: 'Seasonal',     href: '/menu' },
    ],
  },
  {
    heading: 'Rewards',
    links: [
      { label: 'Starbucks® Rewards', href: '/rewards' },
      { label: 'Gift Cards',          href: '/rewards' },
      { label: 'Order & Pick Up',     href: '/contact' },
    ],
  },
  {
    heading: 'Business',
    links: [
      { label: 'Business Partners', href: '/' },
      { label: 'Investor Relations', href: '/' },
      { label: 'Customer Service', href: '/contact' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Columns */}
        <div className={styles.cols}>
          {cols.map(col => (
            <div key={col.heading} className={styles.col}>
              <h4 className={styles.colHead}>{col.heading}</h4>
              <ul>
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link href={l.href} className={styles.colLink}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className={styles.bottom}>
          <p className={styles.copy}>© {new Date().getFullYear()} Starbucks Coffee Company. All rights reserved.</p>

          <div className={styles.socials}>
            <a href="https://instagram.com" aria-label="Instagram" className={styles.socialLink}><IconInstagram /></a>
            <a href="https://twitter.com"   aria-label="Twitter"   className={styles.socialLink}><IconTwitter /></a>
            <a href="https://facebook.com"  aria-label="Facebook"  className={styles.socialLink}><IconFacebook /></a>
            <a href="https://youtube.com"   aria-label="Youtube"   className={styles.socialLink}><IconYoutube /></a>
          </div>

          <div className={styles.legal}>
            <Link href="/">Privacy Notice</Link>
            <Link href="/">Terms of Use</Link>
            <Link href="/">CA Supply Chain Act</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
