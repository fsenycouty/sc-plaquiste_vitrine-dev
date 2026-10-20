/**
 * Page d'accueil de SC Plaquiste, point de départ de l'intégration du site.
 */
import AboutSection from './components/Sections/AboutSection';
import CalloutSection from './components/Sections/CalloutSection';
import CommitmentSection from './components/Sections/CommitmentSection';
import ContactSection from './components/Sections/ContactSection';
import HeroSection from './components/Sections/HeroSection';
import ProjectSection from './components/Sections/ProjectSection';
import ReviewSection from './components/Sections/ReviewSection';
import ServiceAreaSection from './components/Sections/ServiceAreaSection';
import ServiceSection from './components/Sections/ServiceSection';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.page} id="main-content">
      <HeroSection />
      <AboutSection />
      <CommitmentSection />
      <ServiceSection />
      <CalloutSection />
      <ServiceAreaSection />
      <ProjectSection />
      <ReviewSection />
      <ContactSection />
    </main>
  );
}
