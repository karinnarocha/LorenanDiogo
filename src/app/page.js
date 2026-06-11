import styles from "./page.module.css";
//import { useEffect, useRef }  from "react";

import LorenaDiogo from "../../componant/Lorena&Diogo/page";
import ContentCreator from "../../componant/ContentCreator/page";
import MediaKit from "../../componant/MediaKit/page";
import AboutUs from "../../componant/AboutUs/page";
import AboutYou from "../../componant/AboutYou/page";
import Collabs from "../../componant/Collabs/page";
import Testimonial from "../../componant/Testimonial/page";
import HowWeWork from "../../componant/HowWeWork/page";
import Contact from "../../componant/Contact/page";
import NavBar from "../../componant/NavBar/page"
import PartnerWithUs from "../../componant/PartnerWithUs/page"


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
        <LorenaDiogo/>
        <NavBar/>
        <ContentCreator />
        <MediaKit />
        <AboutUs />
        <AboutYou />
        <Collabs />
        <Testimonial />
        <HowWeWork />
        <PartnerWithUs />
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
