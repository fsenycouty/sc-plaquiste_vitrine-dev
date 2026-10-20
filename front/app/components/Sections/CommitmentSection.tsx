/** Composant de section : présente les engagements de l'artisan. */
import styles from "./CommitmentSection.module.css"

/** Affiche les quatre engagements et leur texte de conclusion. */
export default function CommitmentSection() {
  return (
    <section className={styles["commitments"]} id="commitments" aria-labelledby="commitments-title">
      <div className={styles["container"]}>
        <div className={styles["section-heading"]}>
          <h2 id="commitments-title">Pourquoi choisir SC&nbsp;Plaquiste ?</h2>
          <span className={styles["section-divider"]} aria-hidden="true"></span>
          <p className={styles["section-heading__lead"]}>Parce que votre satisfaction prime sur tout le reste, je m&apos;engage :</p>
        </div>
        <div className={styles["commitments__grid"]}>
          <div className={styles["commitment-card"]}>
            <span className={styles["commitment-card__icon"]}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg></span>
            <h3>Devis gratuit</h3>
            <p>Une visite sur place, une estimation claire, sans engagement.</p>
          </div>
          <div className={styles["commitment-card"]}>
            <span className={styles["commitment-card__icon"]}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="1" /><path d="M3 9h18" /></svg></span>
            <h3>Gestion de votre projet</h3>
            <p>Du premier échange à la réception du chantier, un seul interlocuteur.</p>
          </div>
          <div className={styles["commitment-card"]}>
            <span className={styles["commitment-card__icon"]}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></span>
            <h3>Respect des délais</h3>
            <p>Un planning annoncé au devis, et tenu sur le chantier.</p>
          </div>
          <div className={styles["commitment-card"]}>
            <span className={styles["commitment-card__icon"]}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg></span>
            <h3>Étude et conseil</h3>
            <p>Un conseil pertinent sur les matériaux et méthodes de pose adaptés.</p>
          </div>
        </div>
        <p className={styles["commitments__outro"]}>Passer par <strong>SC&nbsp;Plaquiste</strong>, c&apos;est faire le choix d&apos;un artisan plaçant votre satisfaction au cœur du processus. Minutieux et investi, je vous rends systématiquement un chantier nettoyé et clé en main, correspondant à ce qui a été convenu lors du devis.</p>
      </div>
    </section>
  )
}
