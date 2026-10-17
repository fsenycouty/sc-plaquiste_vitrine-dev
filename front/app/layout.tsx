/**
 * Layout racine : métadonnées et structure HTML communes aux pages du site.
 */
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'SC Plaquiste | Plâtrerie et isolation dans le 64 et le 40',
  description:
    'Travaux de plâtrerie, jointoiement et isolation dans les Pyrénées-Atlantiques et les Landes.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
