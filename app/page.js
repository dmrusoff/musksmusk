import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import CartDrawer from '@/components/CartDrawer';
import styles from './page.module.css';
import { products } from '@/data/products';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <CartDrawer />
      <Hero />

      <section id="products" className={styles.productSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The <span className="gradient-text">Collection</span></h2>
            <div className={styles.separator}></div>
          </div>

          <div className={styles.grid}>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
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
    </main>
  );
}
