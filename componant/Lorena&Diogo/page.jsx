"use client";

import { useState, useEffect } from "react";
import styles from "./Lorena&Diogo.module.css";

export default function LorenaDiogo() {
  const [showIntro, setShowIntro] = useState(true);

  // Optional: auto-close after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!showIntro) return null;

  return (
    <section className={styles.Page}>
      <div className={styles.MainContent}>
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