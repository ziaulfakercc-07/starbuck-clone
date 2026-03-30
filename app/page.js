'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Coffee, Leaf, Heart, Star, ArrowRight, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

const features = [
  {
    icon: <Leaf size={32} color="#00704a"/>,
    title: 'Ethically Sourced',
    desc: 'We work directly with farmers across 30 countries to ensure the highest quality beans and fair trade practices.',
  },
  {
    icon: <Coffee size={32} color="#00704a"/>,
    title: 'Master Roasters',
    desc: 'Our expert roasters craft every blend to bring out rich, complex flavors you can taste in every single cup.',
  },
  {
    icon: <Heart size={32} color="#00704a"/>,
    title: 'Community First',
    desc: 'Every purchase supports local communities, environmental sustainability, and our partners worldwide.',
  },
];

const featuredDrinks = [
  { name: 'Iced Caramel Macchiato', desc: 'Vanilla-flavored syrup, milk, Ice and bold espresso with a caramel drizzle.', price: '$5.95', tag: 'Popular', tagClass: 'tag--popular' },
  { name: 'Matcha Tea Latte', desc: 'Smooth, creamy blend of our premium matcha with steamed milk. A fan favorite.', price: '$5.25', tag: 'New', tagClass: 'tag--new'  },
  { name: 'Pumpkin Spice Latte', desc: 'Espresso, steamed milk, and a harvest of warming spices — fall in a cup.', price: '$6.45', tag: 'Seasonal', tagClass: 'tag--seasonal' },
];

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: (i=0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' } }) };

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <Image src="/hero-bg.png" alt="Starbucks café interior" fill priority style={{objectFit:'cover'}} quality={85}/>
        <div className={styles.heroOverlay}/>
        <div className={`container ${styles.heroContent}`}>
          <motion.p className={styles.heroKicker} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:.6}}>
            Good morning ☕
          </motion.p>
          <motion.h1 initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:.65, delay:.1}}>
            It's a great day<br/>for coffee
          </motion.h1>
          <motion.p className={styles.heroSub} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.6, delay:.25}}>
            Discover handcrafted drinks made with love, ethically sourced beans, and a whole lot of warmth.
          </motion.p>
          <motion.div className={styles.heroBtns} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:.6, delay:.38}}>
            <Link href="/menu" className="btn btn--primary">Order Now</Link>
            <Link href="/rewards" className="btn btn--outline-white">Join Rewards</Link>
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className={styles.marqueeWrap} aria-hidden="true">
        {['Hot Coffees','Cold Brews','Frappuccino®','Teavana® Teas','Refreshers®','Seasonal Specials','Bakery','Snacks'].map(t => (
          <span key={t} className={styles.marqueeItem}>— {t}</span>
        ))}
        {['Hot Coffees','Cold Brews','Frappuccino®','Teavana® Teas','Refreshers®','Seasonal Specials','Bakery','Snacks'].map(t => (
          <span key={t+'_dup'} className={styles.marqueeItem}>— {t}</span>
        ))}
      </div>

      {/* ── FEATURES ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__kicker">Why Starbucks</span>
            <h2 className="section-header__title">More than a cup of coffee</h2>
            <p className="section-header__subtitle">We believe in the extraordinary power of human connection through great coffee.</p>
          </div>
          <div className="grid-3">
            {features.map((f, i) => (
              <motion.div key={f.title} className={styles.featureCard} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{once:true, amount:.25}}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED MENU ── */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header">
            <span className="section-header__kicker">Menu Highlights</span>
            <h2 className="section-header__title">Customer Favorites</h2>
          </div>
          <div className="grid-3">
            {featuredDrinks.map((d, i) => (
              <motion.article key={d.name} className={`card ${styles.menuCard}`} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{once:true, amount:.2}}>
                <div className={styles.menuCardImg}>
                  <Image src="/featured-drink.png" alt={d.name} fill style={{objectFit:'cover'}}/>
                </div>
                <div className={styles.menuCardBody}>
                  <span className={`tag ${d.tagClass}`}>{d.tag}</span>
                  <h3 style={{marginTop:'.5rem'}}>{d.name}</h3>
                  <p style={{fontSize:'.9rem',marginTop:'.4rem'}}>{d.desc}</p>
                  <div className={styles.menuCardFooter}>
                    <span className={styles.price}>{d.price}</span>
                    <Link href="/menu" className="btn btn--primary btn--sm">Add to order</Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:'2.5rem'}}>
            <Link href="/menu" className="btn btn--outline" style={{display:'inline-flex', gap:'.5rem', color:'#1e1e1e'}}>
              See Full Menu <ArrowRight size={18}/>
            </Link>
          </div>
        </div>
      </section>

      {/* ── REWARDS BANNER ── */}
      <section className={`section ${styles.rewardSection}`}>
        <div className="container" style={{textAlign:'center'}}>
          <motion.div initial={{scale:.95, opacity:0}} whileInView={{scale:1, opacity:1}} viewport={{once:true}} transition={{duration:.6}}>
            <Star size={48} color="#d4a853" style={{marginBottom:'1rem'}}/>
            <h2 className="text-white" style={{marginBottom:'.8rem'}}>The new Starbucks® Rewards is here</h2>
            <p style={{color:'rgba(255,255,255,.75)', maxWidth:'500px', margin:'0 auto 2rem'}}>
              Earn Stars every time you spend. Redeem for free food and drinks. Plus unlock exclusive member benefits.
            </p>
            <div style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap'}}>
              <Link href="/rewards" className="btn btn--primary">Join Now — It&apos;s Free</Link>
              <Link href="/rewards" className="btn btn--outline-white">Learn More</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STORE LOCATOR STRIP ── */}
      <section className="section section--light">
        <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'1.5rem'}}>
          <div>
            <div style={{display:'flex', alignItems:'center', gap:'.5rem', marginBottom:'.4rem'}}>
              <MapPin color="#00704a" size={22}/>
              <span className="section-header__kicker" style={{margin:0}}>Find a Store</span>
            </div>
            <h2>A Starbucks near you,<br/>always.</h2>
            <p style={{marginTop:'.5rem'}}>With over 35,000 stores in 80 countries — there&apos;s always a spot to settle in.</p>
          </div>
          <Link href="/contact" className="btn btn--primary" style={{flexShrink:0}}>Locate a Store</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
