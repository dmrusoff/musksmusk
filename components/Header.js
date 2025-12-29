'use client';
import Link from 'next/link';
import styles from './Header.module.css';
import { useCart } from '@/context/CartContext';

export default function Header() {
    const { cartCount, setIsCartOpen } = useCart();

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.brand}>
                    <div className={styles.logoWrapper}>
                        <svg viewBox="0 0 320 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoSvg}>
                            {/* Abstract Orbit Icon */}
                            <circle cx="25" cy="30" r="18" stroke="var(--color-accent)" strokeWidth="0.5" opacity="0.3" />
                            <circle cx="25" cy="30" r="12" stroke="#fff" strokeWidth="1" />
                            <path d="M40 30C40 30 35 15 25 15C15 15 10 30 10 30C10 30 15 45 25 45C35 45 40 30 40 30Z" stroke="var(--color-accent)" strokeWidth="1" />
                            <circle cx="40" cy="30" r="2" fill="#fff" />

                            {/* Premium Typography */}
                            <text x="65" y="38" fill="#fff" style={{ font: '300 28px var(--font-heading)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>MUSKS</text>
                            <text x="185" y="38" fill="var(--color-accent)" style={{ font: '300 28px var(--font-heading)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>MUSK</text>
                        </svg>
                    </div>
                </Link>
                <nav className={styles.nav}>
                    <Link href="#products" className={styles.link}>Collection</Link>
                    <Link href="#" className={styles.link}>The Mission</Link>
                    <button className={styles.cartBtn} onClick={() => setIsCartOpen(true)}>
                        Bag ({cartCount})
                    </button>
                </nav>
            </div>
        </header>
    );
}
