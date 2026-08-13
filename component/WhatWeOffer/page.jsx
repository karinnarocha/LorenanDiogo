"use client";

import "animate.css";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./WhatWeOffer.module.css";

import { BiWorld } from "react-icons/bi";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaCamera } from "react-icons/fa6";
import { BsCameraReelsFill } from "react-icons/bs";

const services = [
  {
    title: "Video Content",
    description:
      "Short-form and long-form video with drone footage, tailored for social media and campaigns.",
    movie: "/images/ServisesSection/Video-Content-Hotels.mov",
    icon: BsCameraReelsFill,
  },
  {
    title: "Photography",
    description:
      "Editorial-style photography designed to showcase hotels, spaces, lifestyle, and brand atmosphere.",
    image: "/images/5.webp",
    icon: FaCamera,
  },
  {
    title: "Social Media Reels",
    description:
      "High-impact vertical content created for Instagram, TikTok, and short-form brand storytelling.",
    movie: "/images/ServisesSection/Social-Media-Reels.mov", icon: BiWorld,
  },
  {
    title: "On-Location Worldwide",
    description:
      "Available for destination shoots, hotel campaigns, and travel brand content around the world.",
    image: "/images/7.webp",
    icon: GiCommercialAirplane,
  },
];

export default function WhatWeOffer() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setShow(entry.isIntersecting);
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.CentrilizingContent} id="AboutYou">
      <div
        ref={sectionRef}
        className={`${styles.FirstSection} ${show ? "animate__animated animate__rotateIn animate__slow" : ""
          }`}
      >
        <div className={styles.HeroImage}></div>

        <div className={styles.PlacementText}>
          <p>Aerial · Drone · Pool</p>
          <h2>"Every angle tells a story."</h2>
        </div>
      </div>

      <div className={styles.SecondSection} id="Services" >
        <div className={styles.SectionHeader}>
          <p>What We Offer</p>
          <h2>Services for Brands & Hotels</h2>
        </div>

        <div className={styles.ServicesGrid}>
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className={styles.ServiceCard} key={service.title}>
                {service.movie ? (
                  <video
                    className={styles.ServiceImage}
                    src={service.movie}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className={styles.ServiceImage}
                  />
                )}

                <div className={styles.ServiceOverlay} />

                <div className={styles.ServiceContent}>
                  <div className={styles.ServiceIcon}>
                    <Icon />
                  </div>

                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <button className={styles.QuoteButton}>Request a Quote</button>
      </div>
    </section>
  );
}