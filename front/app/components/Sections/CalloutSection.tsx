/** Composant de section : invite le visiteur à contacter l'artisan. */
import Link from "next/link"
import styles from "./CalloutSection.module.css"

/** Affiche les actions d'appel et de prise de contact. */
export default function CalloutSection() {
  return (
    <section className={styles["callout"]} id="callout" aria-labelledby="callout-title">
      <div className={styles["container"]}>
        <h2 id="callout-title">Besoin de mes services ?</h2>
        <span className={styles["section-divider"]} aria-hidden="true"></span>
        <p>Je vous propose un rendez-vous sur place pour évaluer vos besoins puis établir un devis gratuit.</p>
        <div className={styles["callout__actions"]}>
          <Link href="tel:0668816688" className={`${styles["button"]} ${styles["button-light"]}`}>06 68 81 66 88</Link>
          <Link href="#contact" className={`${styles["button"]} ${styles["button-outline"]}`}>Écrivez-moi</Link>
        </div>
      </div>
    </section>
  )
}
