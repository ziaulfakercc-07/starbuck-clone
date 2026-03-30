'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Coffee, Globe, Users, Leaf, Award, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

const timeline = [
  { year: '1971', text: 'First Starbucks store opens in Seattle\'s Pike Place Market.' },
  { year: '1987', text: 'Howard Schultz purchases the company and begins national expansion.' },
  { year: '1992', text: 'Starbucks goes public on the NASDAQ stock exchange.' },
  { year: '2003', text: 'Starbucks acquires Seattle\'s Best Coffee and Torrefazione Italia.' },
  { year: '2008', text: 'Starbucks launches the mobile app, revolutionizing ordering.' },
  { year: '2023', text: 'Over 35,000 stores across 80+ countries worldwide.' },
];

const values = [
  { icon: <Leaf size={28} color="#00704a"/>,  title: 'Sustainability', desc: 'Committed to reducing our environmental footprint through 100% ethically sourced coffee and reusable packaging.' },
  { icon: <Users size={28} color="#00704a"/>, title: 'Community',      desc: 'We invest in the communities we serve through youth opportunities, farmer support, and local initiatives.' },
  { icon: <Globe size={28} color="#00704a"/>, title: 'Global Impact',  desc: 'Our C.A.F.E. Practices program ensures fair working conditions for hundreds of thousands of coffee farmers.' },
  { icon: <Award size={28} color="#00704a"/>, title: 'Quality',        desc: 'Every blend is expertly roasted and crafted to deliver a consistently extraordinary cup, every time.' },
  { icon: <Heart size={28} color="#00704a"/>, title: 'Inclusion',      desc: 'We create a culture of belonging where everyone is welcome, every day, in every store around the world.' },
  { icon: <Coffee size={28} color="#00704a"/>,title: 'Innovation',     desc: 'From Nitro Cold Brew to mobile ordering, we continuously push the boundaries of the coffee experience.' },
];

const team = [
  { name: 'Laxman Narasimhan', role: 'Chief Executive Officer',     initial: 'L' },
  { name: 'Rachel Ruggeri',    role: 'Chief Financial Officer',     initial: 'R' },
  { name: 'Brady Brewer',      role: 'Chief Marketing Officer',     initial: 'B' },
];

const fadeUp = { hidden:{opacity:0,y:30}, visible:(i=0)=>({opacity:1,y:0,transition:{delay:i*.1,duration:.5}}) };

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Page hero */}
      <div className={styles.pageHero}>
        <div className="container" style={{maxWidth:700}}>
          <motion.span className="section-header__kicker text-white" style={{color:'rgba(255,255,255,.7)'}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.5}}>
            Our Story
          </motion.span>
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:.1, duration:.55}}>
            More than coffee.<br/>It&apos;s connection.
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.25, duration:.5}} style={{color:'rgba(255,255,255,.78)', marginTop:'.75rem', fontSize:'1.1rem', maxWidth:580}}>
            Inspiring and nurturing the human spirit — one person, one cup, and one neighborhood at a time.
          </motion.p>
        </div>
      </div>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className={styles.storyGrid}>
            <div>
              <span className="section-header__kicker">Our Beginning</span>
              <h2>A humble beginning in Seattle</h2>
              <p style={{marginTop:'1rem'}}>
                In 1971, three friends — Jerry Baldwin, Zev Siegl, and Gordon Bowker — opened a small shop called Starbucks in Seattle&apos;s Pike Place Market.
                Named after the first mate in Herman Melville&apos;s Moby Dick, the store sold freshly roasted whole-bean coffees.
              </p>
              <p style={{marginTop:'1rem'}}>
                It was Howard Schultz, inspired by the espresso bars of Italy, who envisioned Starbucks as a &ldquo;third place&rdquo; — a gathering spot between home and work.
                That vision has grown into a global community of coffee lovers across 80+ countries.
              </p>
              <Link href="/menu" className="btn btn--primary" style={{marginTop:'1.5rem', display:'inline-flex'}}>
                Explore Our Coffee
              </Link>
            </div>
            <div className={styles.timelineCol}>
              {timeline.map((t, i) => (
                <motion.div key={t.year} className={styles.timelineItem} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{once:true, amount:.2}}>
                  <div className={styles.timelineYear}>{t.year}</div>
                  <p className={styles.timelineText}>{t.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header">
            <span className="section-header__kicker">What We Stand For</span>
            <h2 className="section-header__title">Our Values</h2>
          </div>
          <div className="grid-3">
            {values.map((v, i) => (
              <motion.div key={v.title} className={styles.valueCard} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{once:true, amount:.2}}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__kicker">Leadership</span>
            <h2 className="section-header__title">The Team Behind the Cup</h2>
          </div>
          <div className="grid-3">
            {team.map((m, i) => (
              <motion.div key={m.name} className={styles.teamCard} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{once:true}}>
                <div className={styles.teamAvatar}>{m.initial}</div>
                <h3 style={{marginTop:'.75rem'}}>{m.name}</h3>
                <p style={{color:'var(--green-primary)', fontWeight:700, fontSize:'.9rem'}}>{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark" style={{textAlign:'center'}}>
        <div className="container">
          <h2 className="text-white">Join the Starbucks family</h2>
          <p style={{color:'rgba(255,255,255,.7)', maxWidth:480, margin:'.75rem auto 1.5rem'}}>
            Whether as a partner, customer, or community member — there&apos;s a place for you in our story.
          </p>
          <div style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap'}}>
            <Link href="/contact" className="btn btn--primary">Find a Store</Link>
            <a href="https://careers.starbucks.com" target="_blank" rel="noreferrer" className="btn btn--outline-white">Explore Careers</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
