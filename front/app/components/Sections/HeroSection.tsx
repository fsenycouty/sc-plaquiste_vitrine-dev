/** Composant de section : introduit l'activité et l'appel à l'action. */
import styles from "./HeroSection.module.css"

/** Affiche le titre d'accueil et les informations clés. */
export default function HeroSection() {
  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-title">
      <div className={styles["container"]}>
        <div className={styles["hero__card"]}>
          <h1 id="hero-title">Travaux de plaquisterie et d&apos;isolation dans le 64 et le 40, par <span>SC&nbsp;Plaquiste</span></h1>
          <p className={styles["hero__subtitle"]}>De la cloison à l&apos;isolation jusqu&apos;au ratissage, je vous accompagne dans tout votre aménagement !</p>
          <div className={styles["hero__actions"]}>
            <a href="#contact" className={`${styles.button} ${styles["button--outline"]}`}>Demandez un devis gratuit</a>
          </div>
          <ul className={styles["hero__badges"]}>
            <li><span className={styles.checkmark}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg></span>Devis gratuit</li>
            <li><span className={styles.checkmark}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg></span>Gestion de votre projet</li>
            <li><span className={styles.checkmark}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg></span>Respect des délais</li>
            <li><span className={styles.checkmark}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg></span>Étude et conseil</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
