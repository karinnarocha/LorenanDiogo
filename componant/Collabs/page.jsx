import styles from "./Collabs.module.css";

const firstRowImages = [
  "/images/1e6.webp",
  "/images/7.webp",
  "/images/8.webp",
  "/images/1e6.webp",
  "/images/9.webp",
  "/images/10.webp",
];

const secondRowImages = [
  "/images/11.webp",
  "/images/9.webp",
  "/images/10.webp",
  "/images/7.webp",
  "/images/8.webp",
  "/images/1e6.webp",
];

export default function Collabs() {
  return (
    <section className={styles.container} id="Collabs">
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>LORENA &amp; DIOGO</p>
          <h1 className={styles.heroTitle}>
            Creating moments
            <br />
            your guests can't forget.
          </h1>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryHeader}>
          <p className={styles.galleryEyebrow}>PREVIOUS COLLABORATIONS</p>
          <h2 className={styles.galleryTitle}>Where We've Created</h2>
        </div>

        <div className={styles.gallery}>
          <div className={`${styles.track} ${styles.trackRight}`}>
            {[...firstRowImages, ...firstRowImages].map((image, index) => (
              <div className={styles.galleryImage} key={`first-${index}`}>
                <img src={image} alt="Previous collaboration" />
              </div>
            ))}
          </div>

          <div className={`${styles.track} ${styles.trackLeft}`}>
            {[...secondRowImages, ...secondRowImages].map((image, index) => (
              <div className={styles.galleryImage} key={`second-${index}`}>
                <img src={image} alt="Previous collaboration" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}