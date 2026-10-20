/** Composant de section : présente la zone d'intervention. */
import styles from "./ServiceAreaSection.module.css"

/** Affiche les départements desservis et les principales villes. */
export default function ServiceAreaSection() {
  return (
    <section
      className={styles["service-area"]}
      aria-labelledby="service-area-title"
      id="service-area"
    >
      <div className={styles["container"]}>
        <div className={styles["service-area__map"]} aria-hidden="true">
          <svg
            className={styles["house-icon"]}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M3 11 12 2l9 9" />
            <path d="M5 10v11h14V10" />
          </svg>
          <span className={`${styles["area-badge"]} ${styles["area-badge--64"]}`}>
            64
          </span>
          <span className={`${styles["area-badge"]} ${styles["area-badge--40"]}`}>
            40
          </span>
        </div>

        <div>
          <h2 id="service-area-title">
            Pyrénées-Atlantiques<br />&amp; Landes
          </h2>
          <span className={styles["section-divider"]} aria-hidden="true" />
          <p>
            Je me déplace dans tout le Béarn et sur la côte landaise pour vos
            travaux de plâtrerie et d&apos;isolation.
          </p>
          <ul className={styles["town-list"]} aria-label="Villes desservies">
            <li>Pau</li>
            <li>Orthez</li>
            <li>Mourenx</li>
            <li>Arthez-de-Béarn</li>
            <li>Dax</li>
            <li>Mont-de-Marsan</li>
            <li>Peyrehorade</li>
            <li>Bayonne</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
