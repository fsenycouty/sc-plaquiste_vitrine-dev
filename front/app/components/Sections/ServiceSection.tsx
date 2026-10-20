/** Composant de section : présente les prestations de l'artisan. */
import styles from "./ServiceSection.module.css"

/** Affiche les prestations dans une galerie horizontale. */
export default function ServiceSection() {
  return (
    <section className={styles["services"]} id="services" aria-labelledby="services-title">
      <div className={styles["container"]}>
        <div className={styles["section-heading"]}>
          <h2 id="services-title">La gamme de services de SC&nbsp;Plaquiste</h2>
          <span className={styles["section-divider"]} aria-hidden="true"></span>
          <p className={styles["section-heading__lead"]}>Je vous accompagne du sol au plafond :</p>
        </div>
        <div className={styles["carousel"]}>
          <button type="button" className={`${styles["carousel__arrow"]} ${styles["carousel__arrow--previous"]}`} aria-label="Prestation précédente">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div className={styles["carousel__track"]} id="services-track" tabIndex={0} aria-label="Liste des prestations, défilement horizontal">
            <article className={styles["service-card"]}>
              <div className={styles["service-card__photo"]} role="img" aria-label="Photo de chantier — cloisons à intégrer"></div>
              <h3>Cloisons &amp; doublage</h3>
              <p>Montage des rails, <strong>doublage des cloisons</strong> existantes ou construction de nouveaux espaces.</p>
            </article>
            <article className={styles["service-card"]}>
              <div className={styles["service-card__photo"]} role="img" aria-label="Photo de chantier — faux plafond à intégrer"></div>
              <h3>Faux plafonds</h3>
              <p>Vous souhaitez faire installer un <strong>faux plafond</strong> ou repeindre celui-ci ? Je me charge de tous les travaux en autonomie.</p>
            </article>
            <article className={styles["service-card"]}>
              <div className={styles["service-card__photo"]} role="img" aria-label="Photo de chantier — jointoiement à intégrer"></div>
              <h3>Jointoiement</h3>
              <p>Installation des <strong>plaques de plâtre</strong> selon la méthode de pose choisie et application des <strong>bandes à joint</strong>.</p>
            </article>
            <article className={styles["service-card"]}>
              <div className={styles["service-card__photo"]} role="img" aria-label="Photo de chantier — ratissage à intégrer"></div>
              <h3>Ratissage</h3>
              <p>Préparation et lissage des surfaces pour obtenir des murs réguliers et prêts à recevoir leur finition.</p>
            </article>
            <article className={styles["service-card"]}>
              <div className={styles["service-card__photo"]} role="img" aria-label="Photo de chantier — mur crépi intérieur à intégrer"></div>
              <h3>Mur crépi intérieur</h3>
              <p>Réalisation ou rénovation de crépi intérieur pour donner du relief et une finition soignée à vos murs.</p>
            </article>
            <article className={styles["service-card"]}>
              <div className={styles["service-card__photo"]} role="img" aria-label="Photo de chantier — isolation à intégrer"></div>
              <h3>Isolation</h3>
              <p>Amélioration des <strong>performances énergétiques</strong> : je vous conseille sur le choix du matériau isolant, en intérieur comme en extérieur.</p>
            </article>
          </div>
          <button type="button" className={`${styles["carousel__arrow"]} ${styles["carousel__arrow--next"]}`} aria-label="Prestation suivante">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
