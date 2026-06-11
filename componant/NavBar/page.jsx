"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.NavbarContainer} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <a href="#" className={styles.Logo}>
        L&amp;D
      </a>

      <nav className={styles.MenuLinks}>
        <a href="#About">About Us</a>
        <a href="#Services">Services</a>
        <a href="#Portfolio">Portfolio</a>
        <a href="#Testimonials">Testimonials</a>
        <a href="#Contact">Contact</a>
      </nav>

      <div className={styles.RightSide}>
        <a href="#Contact" className={styles.NavButton}>
          WORK WITH US
        </a>
      </div>
    </header>
  );
}