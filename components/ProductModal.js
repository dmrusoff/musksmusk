'use client';
import { useCart } from '@/context/CartContext';
import styles from './ProductModal.module.css';
import Image from 'next/image';

export default function ProductModal({ product, isOpen, onClose }) {
    const { addToCart } = useCart();

    if (!isOpen || !product) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>&times;</button>

                <div className={styles.container}>
                    <div className={styles.imageSection}>
                        <div className={styles.halo} style={{ borderColor: product.glow }}></div>
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={800}
                            height={800}
                            className={styles.image}
                        />
                    </div>

                    <div className={styles.infoSection}>
                        <span className={styles.tagline}>{product.tagline}</span>
                        <h2 className={styles.name}>{product.name}</h2>
                        <div className={styles.intensity}>
                            <span>Intensity</span>
                            <div className={styles.dots}>
                                {[...Array(5)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`${styles.dot} ${i < product.intensity ? styles.active : ''}`}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        <p className={styles.description}>{product.description}</p>

                        <div className={styles.notes}>
                            <div className={styles.noteItem}>
                                <span className={styles.noteLabel}>Top Notes</span>
                                <span className={styles.noteValue}>{product.notes.top}</span>
                            </div>
                            <div className={styles.noteItem}>
                                <span className={styles.noteLabel}>Heart Notes</span>
                                <span className={styles.noteValue}>{product.notes.heart}</span>
                            </div>
                            <div className={styles.noteItem}>
                                <span className={styles.noteLabel}>Base Notes</span>
                                <span className={styles.noteValue}>{product.notes.base}</span>
                            </div>
                        </div>

                        <div className={styles.footer}>
                            <span className={styles.price}>${product.price}</span>
                            <button
                                className={styles.addBtn}
                                onClick={() => {
                                    addToCart(product);
                                    onClose();
                                }}
                            >
                                Add to Bag
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
