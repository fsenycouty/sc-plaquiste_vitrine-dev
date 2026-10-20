/** Composant de section : présente l'artisan et son activité. */
import styles from "./AboutSection.module.css"

/** Affiche la présentation de l'artisan et ses repères. */
export default function AboutSection() {
  return (
    <section className={styles["about"]} id="about" aria-labelledby="about-title">
      <div className={styles["container"]}>
        <div className={styles["about__visual"]} role="img" aria-label="Emplacement réservé à une photo de l'artisan ou de chantier"></div>
        <div>
          <h2 id="about-title">À propos de SC&nbsp;Plaquiste</h2>
          <span className={styles["section-divider"]} aria-hidden="true"></span>
          <p className={styles["about__lead"]}>Un artisan qui place la confiance au cœur de vos travaux&nbsp;!</p>
          <p>Minutieux et appliqué dans mon travail, j&apos;accompagne les <strong>particuliers</strong> et les <strong>professionnels</strong> dans la réalisation de leurs travaux de plâtrerie dans les Pyrénées-Atlantiques et les Landes. Je vous fais profiter de mon savoir-faire pour vous conseiller de manière pertinente et concrétiser votre projet de construction.</p>
          <p>Que vous ayez un projet de <strong>construction neuve</strong> ou que vous souhaitiez procéder à une <strong>rénovation globale</strong> de votre habitat (mobil-home, maison, appartement, garage, corps de ferme…), je m&apos;adapte à vos besoins et réalise un travail propre et soigné. Tout au long du chantier, vous bénéficiez de retours réguliers et d&apos;un suivi global.</p>
          <p>Je me déplace dans tout le <strong>Béarn</strong> et sur la <strong>côte landaise</strong>. Vous souhaitez me confier l&apos;aménagement ou la rénovation de votre bien ? Contactez-moi dès maintenant et échangeons plus en détail.</p>
          <ul className={styles["stats"]} aria-label="Repères sur l'activité">
            <li><strong>2</strong><span>départements couverts</span></li>
            <li><strong>5</strong><span>savoir-faire complémentaires</span></li>
            <li><strong>48 h</strong><span>délai de réponse à un devis</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
