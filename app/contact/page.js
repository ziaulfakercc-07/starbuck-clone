'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

const hours = [
  { day: 'Monday – Friday', time: '5:30 AM – 10:00 PM' },
  { day: 'Saturday',         time: '6:00 AM – 10:30 PM' },
  { day: 'Sunday',           time: '6:30 AM – 9:30 PM'  },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className={styles.pageHero}>
        <div className="container">
          <h1>Find a Store & Contact Us</h1>
          <p>We&apos;d love to hear from you. Visit us in-store or drop us a message.</p>
        </div>
      </div>

      {/* Main grid */}
      <section className="section">
        <div className="container">
          <div className={styles.mainGrid}>
            {/* Contact form */}
            <motion.div initial={{opacity:0, x:-30}} animate={{opacity:1, x:0}} transition={{duration:.55}}>
              <h2 style={{marginBottom:'1.5rem'}}>Send Us a Message</h2>
              {sent ? (
                <div className={styles.successBox}>
                  <CheckCircle size={48} color="#00704a"/>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <button className="btn btn--primary" onClick={() => { setSent(false); setForm({name:'',email:'',subject:'',message:''}); }}>Send Another</button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className="grid-2" style={{gap:'1rem'}}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" placeholder="Jane Doe" required value={form.name} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" placeholder="jane@email.com" required value={form.email} onChange={handleChange}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                      <option value="">Select a topic…</option>
                      <option>Feedback</option>
                      <option>Order Issue</option>
                      <option>Starbucks® Rewards</option>
                      <option>Accessibility</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" rows={5} placeholder="Tell us how we can help…" required value={form.message} onChange={handleChange}/>
                  </div>
                  <button type="submit" className="btn btn--primary" style={{alignSelf:'flex-start'}}>Send Message</button>
                </form>
              )}
            </motion.div>

            {/* Info panel */}
            <motion.div className={styles.infoPanel} initial={{opacity:0, x:30}} animate={{opacity:1, x:0}} transition={{duration:.55}}>
              <h2 style={{marginBottom:'1.5rem'}}>Visit Us</h2>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}><MapPin size={22} color="#00704a"/></div>
                <div>
                  <strong>Address</strong>
                  <p>2401 Utah Ave S, Seattle,<br/>Washington 98134, USA</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}><Phone size={22} color="#00704a"/></div>
                <div>
                  <strong>Phone</strong>
                  <p>+1 (800) 782-7282</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}><Mail size={22} color="#00704a"/></div>
                <div>
                  <strong>Email</strong>
                  <p>customerservice@starbucks.com</p>
                </div>
              </div>

              <div className={styles.infoCard} style={{alignItems:'flex-start'}}>
                <div className={styles.infoIcon}><Clock size={22} color="#00704a"/></div>
                <div style={{flex:1}}>
                  <strong>Opening Hours</strong>
                  <table className={styles.hoursTable}>
                    <tbody>
                      {hours.map(h => (
                        <tr key={h.day}>
                          <td>{h.day}</td>
                          <td>{h.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Map placeholder */}
              <div className={styles.mapPlaceholder}>
                <MapPin size={40} color="#00704a"/>
                <p>Seattle, WA — Starbucks Support Center</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
