import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import CartDrawer from '@/components/CartDrawer';
import ScrollToTop from '@/components/ScrollToTop';
import styles from './page.module.css';
import { products } from '@/data/products';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <CartDrawer />
      <ScrollToTop />
      <Hero />

      <section id="products" className={styles.productSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}><span className="gradient-text">Collection</span></h2>
            <p className={styles.sectionSubtitle}>Precise. Powerful. Personal.</p>
            <div className={styles.separator}></div>
          </div>

          <div className={styles.grid}>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="vision" className={styles.visionSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}><span className="gradient-text">Vision</span></h2>
            <p className={styles.sectionSubtitle}>Born for the Stars.</p>
            <div className={styles.separator}></div>
          </div>
          <div className={styles.visionContent}>
            <p className={styles.visionText}>
              Every scent in our collection is a tribute to the human legacy of exploration.
              From the iron-rich dust of Mars to the cold vacuum of the outer rim,
              we capture the essence of what it means to go further.
            </p>
            <div className={styles.visionGrid}>
              <div className={styles.visionItem}>
                <h3>Sustainable Extraction</h3>
                <p>Derived from synthetic molecules that mirror the vacuum of space, reducing terrestrial impact.</p>
              </div>
              <div className={styles.visionItem}>
                <h3>Infinite Cycle</h3>
                <p>Every bottle is designed for a refillable lifecycle, built to travel across lifespans.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.landscapeImageSection}>
        <div className={styles.parallaxBg}></div>
        <div className={styles.landscapeOverlay}>
          <div className="container">
            <h2 className={styles.landscapeText}>The Frontier is Yours</h2>
          </div>
        </div>
      </section>

      <section id="ritual" className={styles.ritualSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}><span className="gradient-text">Ritual</span></h2>
            <p className={styles.sectionSubtitle}>Enhance your presence.</p>
            <div className={styles.separator}></div>
          </div>
          <div className={styles.ritualGrid}>
            <div className={styles.ritualCard}>
              <span className={styles.step}>01</span>
              <h3>Acquire</h3>
              <p>Select your essence based on your current mission profile.</p>
            </div>
            <div className={styles.ritualCard}>
              <span className={styles.step}>02</span>
              <h3>Apply</h3>
              <p>Apply to pulse points. Heat activates the interstellar molecules.</p>
            </div>
            <div className={styles.ritualCard}>
              <span className={styles.step}>03</span>
              <h3>Venture</h3>
              <p>Leave a trail that inspires those who follow.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>

        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <h3>MUSKSMUSK</h3>
              <p>For the species that reaches for the stars.</p>
            </div>
            <div className={styles.footerLinks}>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Mars Colonization Plan</a>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} MusksMusk. All rights reserved.</p>
            <p className={styles.disclaimer}>Not officially affiliated with Elon Musk. Just inspired by the musk of greatness.</p>
          </div>
        </div>
      </footer>
    </main >
  );
}
