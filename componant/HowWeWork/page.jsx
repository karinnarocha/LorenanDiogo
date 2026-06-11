import Image from "next/image";
import styles from "./HowWeWork.module.css";

export default function HowWeWork() {
    return (
      <section className={styles.container} id="Collabs">
 
        <section className={styles.processSection}>
          <div className={styles.processImage}>
            <img src="/images/12.webp" alt="Resort pool production location" />
          </div>
  
          <div className={styles.processContent}>
            <p className={styles.processEyebrow}>OUR PROCESS</p>
  
            <h2 className={styles.processTitle}>How We Work</h2>
  
            <div className={styles.processList}>
              <div className={styles.processItem}>
                <span className={styles.processNumber}>01</span>
                <div>
                  <h3>Planning &amp; Scripting</h3>
                  <p>
                    Before arrival, we study your property, social presence, and
                    goals. We arrive with a full shot list so every minute on-site
                    counts.
                  </p>
                </div>
              </div>
  
              <div className={styles.processItem}>
                <span className={styles.processNumber}>02</span>
                <div>
                  <h3>On-Site Production</h3>
                  <p>
                    We shoot photo and video across your property, capturing
                    spaces, experiences, and atmosphere with professional gear.
                  </p>
                </div>
              </div>
  
              <div className={styles.processItem}>
                <span className={styles.processNumber}>03</span>
                <div>
                  <h3>Editing &amp; Delivery</h3>
                  <p>
                    Edited, branded content delivered via Google Drive or Notion —
                    ready to post. Often delivered before we even leave.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }