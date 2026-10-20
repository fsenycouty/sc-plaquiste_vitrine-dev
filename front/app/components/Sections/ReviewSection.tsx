/** Composant de section : présente les avis Google. */
import styles from "./ReviewSection.module.css"

/** Affiche les avis dans une galerie horizontale. */
export default function ReviewSection() {
  return (
    <section className={styles["google-reviews"]} id="google-reviews" aria-labelledby="google-reviews-title">
      <div className={styles["container"]}>
        <div className={styles["section-heading"]}>
          <div className={styles["google-reviews__heading"]}>
            <span className={styles["google-reviews__source"]}><span className={styles["google-reviews__mark"]} aria-hidden="true">G</span>Avis Google</span>
            <h2 id="google-reviews-title">Les avis de mes clients</h2>
          </div>
          <span className={styles["section-divider"]} aria-hidden="true"></span>
          <p className={styles["section-heading__lead"]}>Les avis publiés sur Google seront affichés ici.</p>
        </div>
        <div className={styles["carousel"]}>
          <button type="button" className={`${styles["carousel__arrow"]} ${styles["carousel__arrow--previous"]}`} aria-label="Avis précédent">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div className={`${styles["carousel__track"]} ${styles["google-reviews__track"]}`} tabIndex={0} aria-label="Avis Google, défilement horizontal">
            <article className={styles["google-review-card"]}>
              <div className={styles["google-review-stars"]} aria-hidden="true">☆☆☆☆☆</div>
              <p className={styles["google-review-placeholder"]}>Avis Google à intégrer</p>
              <p className={styles["google-review-author"]}>Nom du client</p>
            </article>
            <article className={styles["google-review-card"]}>
              <div className={styles["google-review-stars"]} aria-hidden="true">☆☆☆☆☆</div>
              <p className={styles["google-review-placeholder"]}>Avis Google à intégrer</p>
              <p className={styles["google-review-author"]}>Nom du client</p>
            </article>
            <article className={styles["google-review-card"]}>
              <div className={styles["google-review-stars"]} aria-hidden="true">☆☆☆☆☆</div>
              <p className={styles["google-review-placeholder"]}>Avis Google à intégrer</p>
              <p className={styles["google-review-author"]}>Nom du client</p>
            </article>
          </div>
          <button type="button" className={`${styles["carousel__arrow"]} ${styles["carousel__arrow--next"]}`} aria-label="Avis suivant">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
