'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled]  = useState(false);
  const [open, setOpen]          = useState(false);
  const pathname                  = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/',        label: 'Home'    },
    { href: '/menu',    label: 'Menu'    },
    { href: '/rewards', label: 'Rewards' },
    { href: '/about',   label: 'About'   },
    { href: '/contact', label: 'Find a Store' },
  ];

  return (
    <>
      <div className={styles.rewardBar}>
        ✨ Join <strong>Starbucks® Rewards</strong> and earn free drinks.{' '}
        <Link href="/rewards">Learn more</Link>
      </div>

      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Starbucks Home">
            <svg viewBox="0 0 92 92" className={styles.logoSvg} aria-hidden="true">
              <circle cx="46" cy="46" r="46" fill="#00704a"/>
              <path d="M46 12c-18.78 0-34 15.22-34 34s15.22 34 34 34 34-15.22 34-34S64.78 12 46 12zm0 63c-16.02 0-29-12.98-29-29S29.98 17 46 17 75 29.98 75 46 62.02 75 46 75zm0-48c-10.49 0-19 8.51-19 19s8.51 19 19 19 19-8.51 19-19-8.51-19-19-19zm0 34c-8.27 0-15-6.73-15-15s6.73-15 15-15 15 6.73 15 15-6.73 15-15 15z" fill="#fff"/>
              <text x="46" y="51" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="serif" fontStyle="italic">STARBUCKS</text>
            </svg>
            <span className={styles.logoWordmark}>Starbucks</span>
          </Link>

          {/* Desktop nav */}
          <nav className={styles.nav}>
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`${styles.navLink} ${pathname === l.href ? styles.active : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            <button className={styles.iconBtn} aria-label="Search"><Search size={20}/></button>
            <button className={styles.iconBtn} aria-label="Cart"><ShoppingBag size={20}/></button>
            <Link href="/rewards" className="btn btn--primary btn--sm">Sign in</Link>
            <button className={styles.hamburger} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
              {open ? <X size={24}/> : <MenuIcon size={24}/>}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className={styles.drawer}>
            {links.map(l => (
              <Link key={l.href} href={l.href} className={styles.drawerLink} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/rewards" className="btn btn--primary" style={{marginTop:'1rem'}} onClick={() => setOpen(false)}>
              Sign in
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
