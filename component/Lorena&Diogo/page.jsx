"use client";

import { useEffect } from "react";
import styles from "./Lorena&Diogo.module.css";

export default function LorenaDiogo({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 10000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <section className={styles.Page}>
      <div className={styles.CenterContent}>
        <div className={styles.TextGro}>
          <h4>WE ARE</h4>
          <h1>Lorena & Diogo</h1>
        </div>

        <p className={styles.Description}>
          We make hotels and travel brands irresistible, through authentic,
          cinematic photo and video content.
        </p>
      </div>
    </section>
  );
}