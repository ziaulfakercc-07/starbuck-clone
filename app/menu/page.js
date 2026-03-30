'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

const categories = [
  { id: 'hot',    label: '☕ Hot Coffees' },
  { id: 'cold',   label: '🧊 Cold Coffees' },
  { id: 'frap',   label: '🥤 Frappuccino®' },
  { id: 'tea',    label: '🍵 Teas & Lemonade' },
  { id: 'food',   label: '🥐 Food & Snacks' },
  { id: 'season', label: '🌸 Seasonal' },
];

const items = {
  hot: [
    { name: 'Caffè Americano',        desc: 'Espresso shots with hot water for a rich, full-bodied brew.',           price: '$3.75', tag: 'Vegan',   tagClass: 'tag--vegan'    },
    { name: 'Cappuccino',             desc: 'Dark espresso beneath a thick layer of velvety steamed milk foam.',     price: '$4.45', tag: 'Popular', tagClass: 'tag--popular'  },
    { name: 'Flat White',             desc: 'Ristretto shots with a thin layer of velvety steamed whole milk.',      price: '$4.75', tag: '',        tagClass: ''              },
    { name: 'Caramel Macchiato',      desc: 'Freshly steamed milk with vanilla-flavored syrup, espresso & caramel.', price: '$5.25', tag: 'Popular', tagClass: 'tag--popular'  },
    { name: 'Caffè Mocha',            desc: 'Full-bodied espresso with bittersweet mocha sauce and creamy foam.',    price: '$4.95', tag: '',        tagClass: ''              },
    { name: 'Honey Oat Milk Latte',   desc: 'Blonde espresso, honey, and creamy oatmilk topped with oat foam.',     price: '$5.95', tag: 'New',     tagClass: 'tag--new'      },
  ],
  cold: [
    { name: 'Iced Caramel Macchiato', desc: 'Vanilla syrup, milk, ice, espresso, and caramel drizzle.',              price: '$5.95', tag: 'Popular', tagClass: 'tag--popular'  },
    { name: 'Cold Brew',              desc: 'Slow-steeped in cool water for 20 hours for a smooth, sweet flavor.',   price: '$4.25', tag: 'Vegan',   tagClass: 'tag--vegan'    },
    { name: 'Iced Flat White',        desc: 'Ristretto shots over ice with a splash of whole milk.',                 price: '$5.25', tag: '',        tagClass: ''              },
    { name: 'Iced Brown Sugar Oat',   desc: 'Blonde espresso, brown sugar, cinnamon, and oat milk over ice.',       price: '$5.95', tag: 'New',     tagClass: 'tag--new'      },
    { name: 'Iced White Mocha',       desc: 'White mocha sauce, espresso, milk, and ice.',                          price: '$5.75', tag: 'Popular', tagClass: 'tag--popular'  },
    { name: 'Nitro Cold Brew',        desc: 'Signature cold brew topped with a velvety froth of cold foam.',        price: '$4.95', tag: '',        tagClass: ''              },
  ],
  frap: [
    { name: 'Java Chip Frappuccino®', desc: 'Chocolate ships with Frappuccino® roast, topped with whipped cream.',  price: '$6.25', tag: 'Popular', tagClass: 'tag--popular'  },
    { name: 'Caramel Frappuccino®',   desc: 'Buttery caramel topped with whipped cream and caramel drizzle.',       price: '$5.95', tag: '',        tagClass: ''              },
    { name: 'Matcha Crème Frap',      desc: 'Sweetened matcha cream, milk, and ice — no coffee.',                   price: '$5.45', tag: 'New',     tagClass: 'tag--new'      },
    { name: 'Strawberry Creme',       desc: 'Made with fresh strawberry puree and milk, topped with whipped cream.',price: '$5.45', tag: 'Popular', tagClass: 'tag--popular'  },
  ],
  tea: [
    { name: 'Matcha Tea Latte',       desc: 'Smooth and creamy matcha sweetened just right with steamed milk.',     price: '$5.25', tag: 'Vegan',   tagClass: 'tag--vegan'    },
    { name: 'Chai Tea Latte',         desc: 'Black tea infused with cinnamon, cloves, and other warming spices.',   price: '$4.75', tag: 'Popular', tagClass: 'tag--popular'  },
    { name: 'Iced Passion Tango',     desc: 'A blend of hibiscus flowers, lemongrass and apple juice over ice.',    price: '$3.95', tag: 'Vegan',   tagClass: 'tag--vegan'    },
    { name: 'Lemon Iced Tea',         desc: 'Premium Teavana® black tea with fresh lemon over ice.',                price: '$3.45', tag: '',        tagClass: ''              },
  ],
  food: [
    { name: 'Butter Croissant',       desc: 'Classic French-style croissant baked to flaky, golden perfection.',    price: '$3.45', tag: '',        tagClass: ''              },
    { name: 'Bacon & Gouda Sandwich', desc: 'Smoked bacon and Gouda cheese on a soft artisan roll.',               price: '$5.25', tag: 'Popular', tagClass: 'tag--popular'  },
    { name: 'Blueberry Muffin',       desc: 'Moist muffin bursting with fresh blueberries and a crumble top.',     price: '$2.95', tag: '',        tagClass: ''              },
    { name: 'Protein Box',            desc: 'Cage-free eggs, cheddar, grapes, apples, and organic honey.',          price: '$6.45', tag: '',        tagClass: ''              },
  ],
  season: [
    { name: 'Pumpkin Spice Latte',    desc: 'A fall classic — espresso with pumpkin spice syrup and whipped cream.', price: '$6.45', tag: 'Seasonal', tagClass: 'tag--seasonal' },
    { name: 'Peppermint Mocha',       desc: 'Espresso meets chocolate and peppermint — holiday in a cup.',          price: '$6.25', tag: 'Seasonal', tagClass: 'tag--seasonal' },
    { name: 'Iced Lavender Oat',      desc: 'Lavender powder, oat milk, and blonde espresso over ice.',             price: '$5.95', tag: 'New',     tagClass: 'tag--new'      },
    { name: 'Dragon Drink',           desc: 'Sweet mango, dragon fruit, coconut milk, and a hint of caffeine.',     price: '$5.45', tag: 'Seasonal', tagClass: 'tag--seasonal' },
  ],
};

export default function MenuPage() {
  const [active, setActive] = useState('hot');
  const currentItems = items[active] || [];

  return (
    <>
      <Navbar />
      {/* Page hero */}
      <div className={styles.pageHero}>
        <div className="container">
          <h1>Our Menu</h1>
          <p>Handcrafted beverages and food, made with care.</p>
        </div>
      </div>

      {/* Category tabs */}
      <div className={styles.tabsRow}>
        <div className={`container ${styles.tabsInner}`}>
          {categories.map(c => (
            <button
              key={c.id}
              className={`${styles.tab} ${active === c.id ? styles.tabActive : ''}`}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Items grid */}
      <section className="section section--gray">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className={styles.itemsGrid}
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              exit={{opacity:0, y:-10}}
              transition={{duration:.3}}
            >
              {currentItems.map((item) => (
                <article key={item.name} className={`card ${styles.itemCard}`}>
                  <div className={styles.itemImg}>
                    <Image src="/featured-drink.png" alt={item.name} fill style={{objectFit:'cover'}}/>
                    {item.tag && <span className={`tag ${item.tagClass} ${styles.itemTag}`}>{item.tag}</span>}
                  </div>
                  <div className={styles.itemBody}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemDesc}>{item.desc}</p>
                    <div className={styles.itemFooter}>
                      <span className={styles.itemPrice}>{item.price}</span>
                      <button className="btn btn--primary btn--sm">Add to Order</button>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{textAlign:'center'}}>
        <h2>Customize to your taste</h2>
        <p style={{marginTop:'.75rem', color:'var(--gray-500)', maxWidth:'480px', margin:'.75rem auto 1.5rem'}}>
          Every drink can be tailored with your choice of milk, sweetener, and extras. Order in-app for the fastest experience.
        </p>
        <Link href="/rewards" className="btn btn--primary">Download the App</Link>
      </section>

      <Footer />
    </>
  );
}
