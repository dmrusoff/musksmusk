import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.brand}>
                    <div className={styles.logoIcon}>
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoSvg}>
                            <circle cx="20" cy="20" r="9" fill="#fff" />
                            <path d="M6 23C6 23 12 28 20 28C28 28 34 23 34 23" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                            <path d="M34 23C34 23 28 18 20 18C12 18 6 23 6 23" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className={styles.logoText}>
                        <span>MUSKS</span>
                        <span className={styles.logoSubtitle}>MUSK</span>
                    </div>
                </Link>
                <nav className={styles.nav}>
                    <Link href="#products" className={styles.link}>Collection</Link>
                    <Link href="#" className={styles.link}>The Mission</Link>
                    <button className={styles.cartBtn}>
                        Bag (0)
                    </button>
                </nav>
            </div>
        </header>
    );
}
