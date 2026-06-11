import styles from "./PartnerWithUs.module.css";

export default function PartnerWithUs() {
  const benefits = [
    {
      title: "Expectation Alignment",
      text: "We align on your goals — conversion, branding, or inspiration — before we arrive.",
    },
    {
      title: "Preliminary Analysis",
      text: "We review your current content and social presence to identify what can be improved.",
    },
    {
      title: "Creative Flexibility",
      text: "Direct commercial content or subtle emotional visuals — tailored to your brand positioning.",
    },
    {
      title: "True Partnership",
      text: "Our focus is content that aligns with your goals and delivers measurable results.",
    },
  ];

  return (
    <section className={styles.partnerSection}>
      <div className={styles.partnerImage}>
        <img
          src="/images/7.webp"
          alt="Northern lights content production"
        />
      </div>

      <div className={styles.partnerContent}>
        <p className={styles.partnerEyebrow}>FOR YOUR BRAND</p>

        <h2 className={styles.partnerTitle}>Why partner with us</h2>

        <p className={styles.partnerIntro}>
          We don't just show up and shoot. We become a strategic partner
          invested in your brand's growth.
        </p>

        <div className={styles.partnerList}>
          {benefits.map((benefit) => (
            <div className={styles.partnerItem} key={benefit.title}>
              <span className={styles.checkIcon}>✓</span>

              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}