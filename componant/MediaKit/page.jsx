import Image from "next/image";
import styles from "./mediakit.module.css";

export default function MediaKit() {
  return (
    <section className={styles.Sectiondivisa}>
      <div className={styles.StatsMenu}>
        <article className={styles.Statsitems}>
          <strong className={styles.Numbers}>4+</strong>
          <span>Years of Experience</span>
        </article>
        <article className={styles.Statsitems}>
          <strong className={styles.Numbers}>4</strong>
          <span>Continents</span>
        </article>
        <article className={styles.Statsitems}>
          <strong className={styles.Numbers}>25+</strong>
          <span>Hotels & Brands</span>
        </article>
        <article className={styles.Statsitems}>
          <strong className={styles.Numbers}>20+</strong>
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
          <img src="/images/2.webp" alt="Lorena&Diogo mar" />
        </div>
      </div> 
    </section>
  );
};