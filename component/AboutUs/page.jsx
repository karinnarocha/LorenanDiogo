import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section className={styles.AboutUS} id="About">
      <div className={styles.AboutUsPhotoSection}>
        <img src="/images/3.webp" alt="Wedding decor" />
      </div>
      <div className={styles.textSection}>
        <h4 className={styles.subTitle}>ABOUT US</h4>
        <h2 className={styles.title}>A couple who lives to capture the world</h2>

        <p className={styles.description}>
          We're Lorena and Diogo, a couple specializing in content creation for the travel and hospitality industry.
        </p>
        <p className={styles.description}>
          We focus on creating content designed to make people want to experience what we are showing through authentic, aesthetic, and emotionally engaging content.
        </p>
        <p className={styles.description}>
          We value a fast and efficient workflow, thanks to detailed planning and scripting before we even arrive at the property.
        </p>
        <p className={styles.description}>
          We've created content across Europe, Asia, Middle East and South America, including iconic locations like Raffles, McGallery, and many boutique hotels.
        </p>
        <p className={styles.description}>
          More than just delivering strategy and visuals, we aim to build trust and long-term partnerships, through clear communication and reliable delivery.
        </p>
        <p className={styles.location}>
          — Based in Dublin — Available to travel worldwide
        </p>
      </div>
    </section>
  );
}