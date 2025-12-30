'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.css';
import { useCart } from '@/context/CartContext';
import ProductModal from './ProductModal';

export default function ProductCard({ product }) {
    const { addToCart } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className={styles.card} onClick={() => setIsModalOpen(true)}>
                <div className={styles.imageContainer}>
                    <div className={styles.halo} style={{ borderColor: product.glow }}></div>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={600}
                        height={600}
                        className={styles.image}
                    />
                    <div className={styles.overlay}>
                        <span className={styles.discover}>Discover the Notes</span>
                    </div>
                </div>
                <div className={styles.details}>
                    <h3 className={styles.name}>{product.name}</h3>
                    <p className={styles.tagline}>{product.tagline}</p>
                    <div className={styles.separator}></div>
                    <div className={styles.footer}>
                        <span className={styles.price}>${product.price}</span>
                        <button
                            className={styles.btn}
                            onClick={(e) => {
                                e.stopPropagation();
                                addToCart(product);
                            }}
                        >
                            Acquire
                        </button>
                    </div>
                </div>
            </div>

            <ProductModal
                product={product}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}

