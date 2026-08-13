import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.container} id="Contact">
      {/* BLOCO ESQUERDO: PRETO + IMAGEM */}
      <div className={styles.leftSide}>
        <div className={`${styles.photo} animate__animated animate__slideInLeft`} />
      </div>

      {/* BLOCO DIREITO: INFO DE CONTATO */}
      <div className={styles.rightSide}>
        <div className={`${styles.info} animate__animated animate__fadeIn`}>
          <h3 className={styles.line}>GET IN TOUCH</h3>

          <h2 className={styles.name}>
            Let's create something your guests can't stop sharing.
          </h2>

          <a
            href="mailto:hello@lorenandiogo.com"
            className={styles.text}
          >
            SEND AN EMAIL
          </a>

          <h3 className={styles.line}>hello@lorenandiogo.com</h3>
          <h3 className={styles.line}>+353 (83) 166-2258</h3>

          <div className={styles.social}>
            <span className={styles.instagramIcon}></span>
            <a
              href="https://www.instagram.com/lorenandiogo"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.text}
            >
              @lorenandiogo
            </a>
          </div>

          <h3 className={styles.line}>
            Dublin, Ireland — available worldwide
          </h3>
        </div>

        <h2 className={styles.contactTitle}>CONTACT</h2>
      </div>
    </section>
  );
}