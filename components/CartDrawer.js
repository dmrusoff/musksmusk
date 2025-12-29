'use client';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
    const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (!isCartOpen) return null;

    return (
        <div className={styles.overlay} onClick={() => setIsCartOpen(false)}>
            <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h2>Your Collection</h2>
                    <button className={styles.closeBtn} onClick={() => setIsCartOpen(false)}>&times;</button>
                </div>

                {cart.length === 0 ? (
                    <div className={styles.empty}>
                        <p>Your bag is empty.</p>
                        <button className={styles.shopBtn} onClick={() => setIsCartOpen(false)}>Continue Exploring</button>
                    </div>
                ) : (
                    <>
                        <div className={styles.items}>
                            {cart.map((item) => (
                                <div key={item.id} className={styles.item}>
                                    <div className={styles.itemImage}>
                                        <Image src={item.image} alt={item.name} width={80} height={80} />
                                    </div>
                                    <div className={styles.itemInfo}>
                                        <h3>{item.name}</h3>
                                        <p className={styles.itemTagline}>{item.tagline}</p>
                                        <div className={styles.quantityControls}>
                                            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                        </div>
                                    </div>
                                    <div className={styles.itemPrice}>
                                        <span>${item.price * item.quantity}</span>
                                        <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.footer}>
                            <div className={styles.summary}>
                                <span>Subtotal</span>
                                <span className={styles.total}>${cartTotal}</span>
                            </div>
                            <p className={styles.disclaimer}>Shipping calculated at departure to Mars.</p>
                            <button className={styles.checkoutBtn}>
                                Initiate Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
