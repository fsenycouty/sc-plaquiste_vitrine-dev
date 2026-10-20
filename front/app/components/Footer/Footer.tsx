/** Pied de page partagé : identité du site, liens de navigation et mentions. */
import styles from "./Footer.module.css"
import Image from "next/image"

/** Affiche les liens de pied de page et les informations légales. */
export default function Footer() {
  return (
    <footer>
      <div className={styles.footerNavigation}>
        <div className={styles.footerNavigationContainer}>
          <div className={styles.footerBrand}>
            <span className={styles.logoBadge}>
              <Image src="/logo.png" alt="" width={48} height={48} />
            </span>
            <strong>SC&nbsp;Plaquiste</strong>
          </div>
          <nav aria-label="Navigation du pied de page">
            <ul className={styles.footerLinks}>
              <li><a href="#about">À propos</a></li>
              <li>
                <a href="#commitments" aria-label="Voir les engagements">
                  <span className={styles.labelLong}>Engagements</span>
                  <span className={styles.labelShort}>Atouts</span>
                </a>
              </li>
              <li><a href="#services">Services</a></li>
              <li>
                <a href="#projects" aria-label="Voir les réalisations">
                  <span className={styles.labelLong}>Réalisations</span>
                  <span className={styles.labelShort}>Projets</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContainer}>
          <span>© SC&nbsp;Plaquiste</span>
          <span className={styles.legalLinks}>
            <a href="#">Mentions légales</a>
            <span aria-hidden="true">·</span>
            <a href="#">Politique de confidentialité</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
