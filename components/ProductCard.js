'use client';
import Image from 'next/image';
import styles from './ProductCard.module.css';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <div className={styles.halo} style={{ borderColor: product.glow }}></div>
                <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={600}
                    className={styles.image}
                />
            </div>
            <div className={styles.details}>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.tagline}>{product.tagline}</p>
                <div className={styles.separator}></div>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.footer}>
                    <span className={styles.price}>${product.price}</span>
                    <button className={styles.btn} onClick={() => addToCart(product)}>
                        Acquire
                    </button>
                </div>
            </div>
        </div>
    );
}
