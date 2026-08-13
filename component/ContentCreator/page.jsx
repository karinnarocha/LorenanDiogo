import styles from "./ContentCreator.module.css";

export default function ContentCreator() {
  return (
    <section className={styles.Page}>
      <div className={styles.MainContent}>
        <span className={styles.SubTitle}>
          Travel Content Creators for Hotels, Resorts & Hospitality Brands
        </span>
        <h1 className={styles.heroTitle}>
          Lorena <span className={styles.heroAmpersand}>&</span>
          <br />
          Diogo
        </h1>
        <div className={styles.ButtonDiv}>
          <a href="#WorkWithUs" className={styles.HeroButtonWork}>
            WORK WITH US
          </a>
          <a href="#collabs" className={styles.HeroButtonPortifolio}>
            VIEW PORTFOLIO
          </a>
        </div>
      </div>
    </section>
  );
}