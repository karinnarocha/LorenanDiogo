import Image from "next/image";
import styles from "./Collabs.module.css";

const firstRowImages = [
  "/images/GALLERY/arctic-aurora.webp",
  "/images/GALLERY/aurora-boreal.webp",
  "/images/GALLERY/autumn-mood-wooden-cabin.webp",
  "/images/GALLERY/bali-hotel-vibe.webp",
  "/images/GALLERY/boat-trip-indonesia.webp",
  "/images/GALLERY/christmas-north-pole-and-tourism-in-london.webp",
  "/images/GALLERY/cliff-bali-temple.webp",
  "/images/GALLERY/content-creator-editor.webp",
  "/images/GALLERY/creative-photo-shooting-hotel-pool.webp",
  "/images/GALLERY/doha-catar-hotel.webp",
  "/images/GALLERY/doha-hotel-almaha-island.webp",
  "/images/GALLERY/doha-qatar.webp",
  "/images/GALLERY/dubai-burj-khalifa.webp",
  "/images/GALLERY/edinburgh-scott-monument-hotel-view.webp",
  "/images/GALLERY/finland-north-pole-hotel-and-aurora.webp",
  "/images/GALLERY/foto-para-mobile.webp",
];

const secondRowImages = [
  "/images/GALLERY/getyourguide-arctic-snowmobile-local-guide.webp",
  "/images/GALLERY/hotel-arctic-aurora.webp",
  "/images/GALLERY/hotel-bali-nusa-penida-portal.webp",
  "/images/GALLERY/hotel-moodboard-bali.webp",
  "/images/GALLERY/hotel-room.webp",
  "/images/GALLERY/iceland-glacier-adventure.webp",
  "/images/GALLERY/iceland-vulcano-and-ice-island-for-columbia.webp",
  "/images/GALLERY/lake-bled-blejsko-jezero.webp",
  "/images/GALLERY/lake-bled-sunrise-edition-light-glow.webp",
  "/images/GALLERY/lake-di-misurina-dolomites-hotel.webp",
  "/images/GALLERY/lorena-and-diogo-brand-photo-shooting.webp",
  "/images/GALLERY/motorhome-trip-indie-campers-dolomite.webp",
  "/images/GALLERY/motorhome-trip-indie-campers.webp",
  "/images/GALLERY/ski-trip.webp",
  "/images/GALLERY/sunrise-north-pole-from-cabin.webp",
  "/images/GALLERY/wooden-cabin-aurora-arctic.webp",
];

export default function Collabs() {
  return (
    <section className={styles.container} >

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <Image
          src="/images/8.webp"
          alt="Travel content creation"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />

        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>
            LORENA &amp; DIOGO
          </p>

          <h1 className={styles.heroTitle}>
            Creating moments
            <br />
            your guests can't forget.
          </h1>
        </div>
      </section>


      {/* GALLERY SECTION */}
      <section className={styles.gallerySection} id="collabs">

        <div className={styles.galleryHeader}>
          <p className={styles.galleryEyebrow}>
            PREVIOUS COLLABORATIONS
          </p>

          <h2 className={styles.galleryTitle}>
            Where We've Created
          </h2>
        </div>


        <div className={styles.gallery}>

          {/* FIRST ROW */}
          <div className={`${styles.track} ${styles.trackRight}`}>

            {[...firstRowImages, ...firstRowImages].map(
              (image, index) => (
                <div
                  className={styles.galleryImage}
                  key={`first-${index}`}
                >
                  <Image
                    src={image}
                    alt="Previous collaboration"
                    fill
                    sizes="(max-width: 480px) 220px, (max-width: 768px) 260px, 22vw"
                    className={styles.galleryImageImg}
                  />
                </div>
              )
            )}

          </div>


          {/* SECOND ROW */}
          <div className={`${styles.track} ${styles.trackLeft}`}>

            {[...secondRowImages, ...secondRowImages].map(
              (image, index) => (
                <div
                  className={styles.galleryImage}
                  key={`second-${index}`}
                >
                  <Image
                    src={image}
                    alt="Previous collaboration"
                    fill
                    sizes="(max-width: 480px) 220px, (max-width: 768px) 260px, 22vw"
                    className={styles.galleryImageImg}
                  />
                </div>
              )
            )}

          </div>

        </div>

      </section>

    </section>
  );
}