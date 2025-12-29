import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.brand}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/images/logo.png"
                            alt="MusksMusk Logo"
                            width={160}
                            height={50}
                            className={styles.logoImage}
                            priority
                        />
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
