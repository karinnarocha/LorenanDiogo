import styles from "./Testimonial.module.css";

const testimonials = [
  {
    quote:
      "Guests keep mentioning your video in DMs! The reel you made went viral locally. Hope to host you again soon. Thanks so much.",
    name: "Jellyfish Villa",
    location: "BALI, INDONESIA",
  },
  {
    quote:
      "Working with Lorena and Diogo was such a wonderful experience! They delivered stunning photos and videos that perfectly captured the essence of our boutique hotel and professionalism.",
    name: "Tentacle Bali Cottage",
    location: "BALI, INDONESIA",
  },
  {
    quote:
      "I can say that it was a pleasure working with this couple, and the fact that they handled the material even before leaving our hotel surprised us.",
    name: "Ubud",
    location: "UBUD, INDONESIA",
  },
];

export default function Testimonial() {
  return (
    <section className={styles.container} id="Testimonials">
      <div className={styles.header}>
        <p className={styles.eyebrow}>REVIEWS</p>
        <h2 className={styles.title}>What Brands Say</h2>
      </div>

      <div className={styles.cardsWrapper}>
        {testimonials.map((testimonial) => (
          <article className={styles.card} key={testimonial.name}>
            <span className={styles.quoteMark}>"</span>

            <p className={styles.cardText}>{testimonial.quote}</p>

            <div className={styles.divider} />

            <div className={styles.cardFooter}>
              <h3 className={styles.cardTitle}>{testimonial.name}</h3>
              <p className={styles.location}>{testimonial.location}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}