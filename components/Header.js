'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { useCart } from '@/context/CartContext';

export default function Header() {
    const { cartCount, setIsCartOpen } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.brand} onClick={closeMenu}>
                    <div className={styles.logoWrapper}>
                        <svg viewBox="0 0 320 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoSvg}>
                            {/* Abstract Orbit Icon */}
                            <circle cx="25" cy="30" r="18" stroke="var(--color-accent)" strokeWidth="0.5" opacity="0.3" />
                            <circle cx="25" cy="30" r="12" stroke="#fff" strokeWidth="1" />
                            <path d="M40 30C40 30 35 15 25 15C15 15 10 30 10 30C10 30 15 45 25 45C35 45 40 30 40 30Z" stroke="var(--color-accent)" strokeWidth="1" />
                            <circle cx="40" cy="30" r="2" fill="#fff" />

                            {/* Premium Typography */}
                            <text x="65" y="38" className={styles.logoText} fill="#fff" style={{ font: '300 28px var(--font-heading)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>MUSKS</text>
                            <text x="185" y="38" className={styles.logoText} fill="var(--color-accent)" style={{ font: '300 28px var(--font-heading)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>MUSK</text>
                        </svg>
                    </div>
                </Link>

                {/* Hamburger Toggle */}
                <button className={`${styles.menuToggle} ${isMenuOpen ? styles.menuActive : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </button>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <Link href="#" className={styles.link} onClick={closeMenu}>Mission</Link>
                    <Link href="#products" className={styles.link} onClick={closeMenu}>Collection</Link>
                    <Link href="#vision" className={styles.link} onClick={closeMenu}>Vision</Link>
                    <Link href="#ritual" className={styles.link} onClick={closeMenu}>Ritual</Link>
                </nav>

                <button className={styles.cartBtn} onClick={() => { setIsCartOpen(true); closeMenu(); }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.bagIcon}>
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <span className={styles.cartText}>Bag</span>
                    <span className={styles.cartCount}>[{cartCount}]</span>
                </button>
            </div>
        </header>
    );
}
