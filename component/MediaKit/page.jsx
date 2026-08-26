import Image from "next/image";
import styles from "./mediakit.module.css";
import CountUp from "./CountUp"; // adjust path to wherever it actually lives

export default function MediaKit() {
  return (
    <section className={styles.Sectiondivisa}>
      <div className={styles.StatsMenu}>
        <article className={styles.Statsitems}>
          <strong className={styles.Numbers}>
            <CountUp end={4} suffix="+" />
          </strong>
          <span>Years of Experience</span>
        </article>
        <article className={styles.Statsitems}>
          <strong className={styles.Numbers}>
            <CountUp end={4} />
          </strong>
          <span>Continents</span>
        </article>
        <article className={styles.Statsitems}>
          <strong className={styles.Numbers}>
            <CountUp end={25} suffix="+" />
          </strong>
          <span>Hotels & Brands</span>
        </article>
        <article className={styles.Statsitems}>
          <strong className={styles.Numbers}>
            <CountUp end={20} suffix="+" />
          </strong>
          <span>Countries</span>
        </article>
      </div>
      <div className={styles.PhotosDisplay}>
        <div className={styles.PhotoCard}>
          <img src="/images/11.webp" alt="Lorena&Diogo mar" />
        </div>
        <div className={styles.PhotoCard}>
          <img src="/images/8.webp" alt="Lorena&Diogo mar" />
        </div>
        <div className={styles.PhotoCard}>
          <img src="/images/GALLERY/arctic-aurora.webp" alt="Lorena&Diogo mar" />
        </div>
      </div>
    </section>
  );
}