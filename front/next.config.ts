/**
 * Configuration Next.js : export statique pour un hébergement Apache (O2switch).
 * Aucune fonctionnalité serveur n'est disponible après le build.
 */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Masque le badge de développement ; les erreurs restent visibles.
  devIndicators: false,
  // Génère des fichiers HTML/CSS/JS statiques dans out/
  output: 'export',
  // Une page = un dossier contenant index.html (servi tel quel par Apache)
  trailingSlash: true,
  // Pas de serveur d'optimisation d'images en statique ; les fichiers sont servis tels quels
  images: { unoptimized: true },
};

export default nextConfig;
