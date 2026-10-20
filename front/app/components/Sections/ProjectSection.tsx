/** Composant de section : présente les réalisations de l'artisan. */
import styles from "./ProjectSection.module.css"

/** Affiche les exemples de chantiers dans une galerie horizontale. */
export default function ProjectSection() {
  return (
    <section className={styles["projects"]} id="projects" aria-labelledby="projects-title">
      <div className={styles["container"]}>
        <div className={styles["section-heading"]}>
          <h2 id="projects-title">Le travail de SC&nbsp;Plaquiste en images</h2>
          <span className={styles["section-divider"]} aria-hidden="true"></span>
          <p className={styles["section-heading__lead"]}>Parce qu&apos;il n&apos;y a de plus belle preuve de mon travail que des exemples — emplacements réservés, à remplacer par de vraies photos de chantier.</p>
        </div>
        <div className={styles["carousel"]}>
          <button type="button" className={`${styles["carousel__arrow"]} ${styles["carousel__arrow--previous"]}`} aria-label="Réalisation précédente">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div className={styles["carousel__track"]} id="projects-track" tabIndex={0} aria-label="Galerie de réalisations, défilement horizontal">
            <div className={styles["project-card"]}><span>Cloisons — avant/après</span></div>
            <div className={styles["project-card"]}><span>Faux plafond</span></div>
            <div className={styles["project-card"]}><span>Isolation combles</span></div>
            <div className={styles["project-card"]}><span>Jointoiement</span></div>
            <div className={styles["project-card"]}><span>Doublage cloison</span></div>
            <div className={styles["project-card"]}><span>Chantier professionnel</span></div>
          </div>
          <button type="button" className={`${styles["carousel__arrow"]} ${styles["carousel__arrow--next"]}`} aria-label="Réalisation suivante">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
