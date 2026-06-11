import Image from "next/image";
import styles from "./ContentCreator.module.css";

export default function ContentCreator() {
  return (
    <section className={styles.Page}>
      <div className={styles.MainContent}>
        <span className={styles.SubTitle}>TRAVEL CONTENT CREATORS</span>
        <h1 className={styles.heroTitle}>
          Lorena <span className={styles.heroAmpersand}>&</span>
          <br />
          Diogo
          </h1>
        <p className={styles.heroDescription}>We make hotels and travel brands irresistible, through authentic, cinematic photo and video content.</p>
        <div className={styles.ButtonDiv}>
          <button className={styles.HeroButtonWork}>WORK WITH US</button>
          <button className={styles.HeroButtonPortifolio}>VIEW PORTFOLIO</button>
        </div>
      </div>
      
    </section>
  );
};