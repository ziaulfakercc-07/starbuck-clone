'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Gift, Smartphone, Coffee, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

const tiers = [
  { name: 'Green',        stars: '0–299★',  perks: ['Customize your drink','Free birthday reward','Pay by app'] },
  { name: 'Gold',         stars: '300+★',   perks: ['All Green benefits','Earn 1★ per $1 spent', 'Exclusive member offers', 'Double Star Days'] },
];

const faqs = [
  { q: 'How do I earn Stars?',                  a: 'You earn 1 Star for every $1 you spend at Starbucks when you pay with your registered Starbucks Card or through the app.'                 },
  { q: 'When do my Stars expire?',             a: 'Stars expire 6 months after the month in which they were earned if you make no purchases during that period.'                             },
  { q: 'Can I transfer Stars?',                 a: 'Stars are non-transferable and cannot be combined with another member\'s Stars.'                                                          },
  { q: 'Is Starbucks® Rewards free to join?',   a: 'Yes! Joining is completely free. Simply download the app or create an account online to start earning Stars today.'                       },
];

export default function RewardsPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className={styles.pageHero}>
        <div className="container" style={{textAlign:'center', maxWidth:680}}>
          <motion.div initial={{scale:.8, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:.5}}>
            <Star size={56} color="#d4a853" style={{margin:'0 auto 1rem'}}/>
          </motion.div>
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:.15}}>
            The new Starbucks® Rewards
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.28}} style={{color:'rgba(255,255,255,.75)', marginTop:'.75rem', fontSize:'1.1rem'}}>
            Earn Stars, get rewarded. Free drinks, birthday treats, and member-only perks.
          </motion.p>
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:.4}} style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap', marginTop:'1.5rem'}}>
            <Link href="/" className="btn btn--primary">Join Now — It&apos;s Free</Link>
            <Link href="/" className="btn btn--outline-white">Sign In</Link>
          </motion.div>
        </div>
      </div>

      {/* How it works */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__kicker">How It Works</span>
            <h2 className="section-header__title">Earn. Redeem. Repeat.</h2>
          </div>
          <div className="grid-3">
            {[
              { icon:<Smartphone size={36} color="#00704a"/>, step:'01', title:'Create an Account', desc:'Download the Starbucks® app or sign up at starbucks.com to get started in minutes.' },
              { icon:<Coffee      size={36} color="#00704a"/>, step:'02', title:'Pay & Earn Stars',  desc:'Pay with your registered card or app. Earn 1 Star for every $1 spent automatically.' },
              { icon:<Gift        size={36} color="#00704a"/>, step:'03', title:'Redeem Rewards',    desc:'Redeem Stars for free food and drinks, starting at just 25 Stars for a customization.' },
            ].map((s, i) => (
              <motion.div key={s.step} className={styles.stepCard} initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*.12, duration:.5}}>
                <div className={styles.stepNum}>{s.step}</div>
                <div className={styles.stepIcon}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header">
            <span className="section-header__kicker">Member Tiers</span>
            <h2 className="section-header__title">Choose your level</h2>
          </div>
          <div className="grid-2" style={{maxWidth:800, margin:'0 auto'}}>
            {tiers.map((t, i) => (
              <motion.div key={t.name} className={`${styles.tierCard} ${i===1?styles.tierGold:''}`} initial={{opacity:0, scale:.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{delay:i*.1}}>
                <div className={styles.tierName}>{t.name}</div>
                <div className={styles.tierStars}>{t.stars}</div>
                <ul className={styles.tierPerks}>
                  {t.perks.map(p => <li key={p}><Star size={14} style={{flexShrink:0}}/> {p}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{maxWidth:720}}>
          <div className="section-header">
            <span className="section-header__kicker">FAQs</span>
            <h2 className="section-header__title">Got Questions?</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((f, i) => (
              <div key={i} className={styles.faqItem}>
                <button className={styles.faqQ} onClick={() => setOpenFaq(openFaq===i ? null : i)}>
                  {f.q} {openFaq===i ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
                </button>
                {openFaq===i && <motion.p className={styles.faqA} initial={{opacity:0, height:0}} animate={{opacity:1, height:'auto'}}>{f.a}</motion.p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
