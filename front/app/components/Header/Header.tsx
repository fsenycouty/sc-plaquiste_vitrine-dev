"use client"

/** En-tête partagé : coordonnées, identité du site et navigation principale. */
import { useState } from "react"
import Image from "next/image"
import styles from "./Header.module.css"

/** Affiche l'en-tête et contrôle l'ouverture du menu sur mobile. */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  /** Ferme le menu après le choix d'une section. */
  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <span>Lun–Ven : 8h–12h &amp; 13h–18h</span>
          <a href="tel:0668816688">06 68 81 66 88</a>
        </div>
      </div>
      <header className={styles.siteHeader}>
        <div className={styles.siteHeaderNav}>
          <a href="#home" className={styles.logo} aria-label="SC Plaquiste — retour à l'accueil" onClick={closeMenu}>
            <span className={styles.logoBadge}>
              <Image src="/logo.png" alt="Logo SC Plaquiste — Plaquiste, Jointeur, Isolation" width={60} height={60} />
            </span>
          </a>

          <button
            className={styles.menuToggle}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            aria-label={isMenuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
          </button>

          <nav aria-label="Navigation principale">
            <ul id="primary-navigation" className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ""}`}>
              <li><a href="#about" onClick={closeMenu}>À propos</a></li>
              <li><a href="#commitments" onClick={closeMenu}>Engagements</a></li>
              <li><a href="#services" onClick={closeMenu}>Services</a></li>
              <li><a href="#projects" onClick={closeMenu}>Réalisations</a></li>
              <li><a href="#google-reviews" onClick={closeMenu}>Avis</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
          </nav>

          <a href="#contact" className={styles.navCta}>Devis gratuit</a>
        </div>
      </header>
    </>
  )
}
