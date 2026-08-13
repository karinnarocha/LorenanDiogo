import styles from "./page.module.css";
//import { useEffect, useRef }  from "react";

import LorenaDiogo from "../../component/Lorena&Diogo/page";
import ContentCreator from "../../component/ContentCreator/page";
import MediaKit from "../../component/MediaKit/page";
import AboutUs from "../../component/AboutUs/page";
import WhatWeOffer from "../../component/WhatWeOffer/page";
import Collabs from "../../component/Collabs/page";
import Testimonial from "../../component/Testimonial/page";
import HowWeWork from "../../component/HowWeWork/page";
import Contact from "../../component/Contact/page";
import NavBar from "../../component/NavBar/page"
import PartnerWithUs from "../../component/PartnerWithUs/page"


export default function Home() {
  /*  const ref = useRef(null);
  
    useEffect(() => {
      const section = ref.current;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("active");
        }
      });
      observer.observe(section);
    },
    []);*/

  return (
    <div>
      <main >
        <LorenaDiogo />
        <NavBar />
        <ContentCreator />
        <MediaKit />
        <AboutUs />
        <WhatWeOffer />
        <Collabs />
        <HowWeWork />
        <PartnerWithUs />
        <Testimonial />
        <Contact />
        <div className={styles.WebsiteFooter}>
          <p>©Copyright Lorena & Diogo  - Website powered by{" "}
            <a
              href="https://www.linkedin.com/in/karinnarocha/"
              target="_blank"
              rel="noopener noreferrer">Karinna Rocha - 2025</a>.
          </p>
        </div>
      </main>
    </div>
  );
}
