/** Composant de section : présente les coordonnées et le formulaire. */
import styles from "./ContactSection.module.css"

/** Affiche les coordonnées et le formulaire de demande de devis. */
export default function ContactSection() {
  return (
    <section className={styles["contact"]} id="contact" aria-labelledby="contact-title">
      <div className={styles["container"]}>
        <div className={styles["section-heading"]}>
          <h2 id="contact-title">Contact</h2>
          <span className={styles["section-divider"]} aria-hidden="true"></span>
          <p className={styles["contact__lead"]}>Vous souhaitez obtenir un devis ou échanger sur votre projet ?<br />Contactez-moi.</p>
        </div>
        <div className={styles["contact__content"]}>
          <div className={styles["contact__details"]}>
            <article>
              <h3>Téléphone</h3>
              <p><a href="tel:0668816688">06 68 81 66 88</a></p>
            </article>
            <article>
              <h3>E-mail</h3>
              <p><a href="mailto:scplaquiste64@gmail.com">scplaquiste64@gmail.com</a></p>
            </article>
            <article>
              <h3>Zone d&apos;intervention</h3>
              <p>Pyrénées-Atlantiques (64)<br />&amp; Landes (40)</p>
            </article>
            <article>
              <h3>Horaires</h3>
              <p>Lun–Ven, 8h–12h &amp; 13h–18h</p>
            </article>
          </div>

          <form aria-labelledby="contact-form-title">
            <h2 id="contact-form-title" className="visually-hidden">Formulaire de demande de devis</h2>
            <div className={styles["form-field"]}>
              <label htmlFor="full-name">Votre nom</label>
              <input type="text" id="full-name" name="fullName" autoComplete="name" required />
            </div>
            <div className={styles["form-field"]}>
              <label htmlFor="phone">Votre numéro</label>
              <input type="tel" id="phone" name="phone" autoComplete="tel" required />
            </div>
            <div className={styles["form-field"]}>
              <label htmlFor="email">Votre email</label>
              <input type="email" id="email" name="email" autoComplete="email" required />
            </div>
            <div className={styles["form-field"]}>
              <label htmlFor="service">Type de prestation</label>
              <select id="service" name="service">
                <option>Cloisons &amp; doublage</option>
                <option>Faux plafonds</option>
                <option>Jointoiement</option>
                <option>Ratissage</option>
                <option>Mur crépi intérieur</option>
                <option>Isolation</option>
                <option>Autre / je ne sais pas encore</option>
              </select>
            </div>
            <div className={styles["form-field"]}>
              <label htmlFor="message">Votre message</label>
              <textarea id="message" name="message" rows={4} required></textarea>
            </div>
            <button type="button" className={`${styles["button"]} ${styles["button-light"]}`}>Envoyer ma demande</button>
            <p className={styles["form-confirmation"]} role="status" hidden>Maquette — formulaire non connecté. Merci !</p>
          </form>
        </div>
      </div>
    </section>
  )
}
