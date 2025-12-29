import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <span className={styles.script}>Ad Astra Per Aspera</span>
                <h1 className={styles.title}>
                    Beyond the <br />
                    <span className="gradient-text">Horizon</span>
                </h1>
                <p className={styles.subtitle}>
                    A collection of fragrances inspired by the indomitable <br />
                    human spirit to explore the unknown.
                </p>
                <a href="#products" className={styles.cta}>
                    Explore Collection
                </a>
            </div>
            <div className={styles.background}>
                <div className={styles.planet}></div>
                <div className={styles.stars}></div>
            </div>
        </section>
    );
}
