# SC plaquiste — site vitrine et dashboard

Site vitrine pour présenter l'activité de Christopher, recueillir des demandes
de contact et de devis, et valoriser ses réalisations. Une seconde phase
prévoit un dashboard privé, conçu comme une **PWA installable sur mobile**.

## Informations artisan

| Information                           | Détail                                                    |
| ------------------------------------- | --------------------------------------------------------- |
| **Nom commercial**                    | SC plaquiste                                              |
| **Artisan**                           | Christopher                                               |
| **Activités**                         | Plaquiste, jointeur et isolation                          |
| **Zone d'intervention**               | Pyrénées-Atlantiques et Landes                            |
| **Téléphone**                         | 06 68 81 66 88                                            |
| **E-mail de contact et de réception** | [scplaquiste64@gmail.com](mailto:scplaquiste64@gmail.com) |

## Ressources de conception

- [Maquette HTML](./_docs/conception/ui/maquette-sc-plaquiste.html) — base de travail pour la
  conception et l'intégration du site.
- [Base HTML](./_docs/conception/integration/base-site-vitrine.html) et [CSS](./_docs/conception/integration/base-site-vitrine.css) — structure statique à découper en composants React.

## Fonctionnalités

### Site vitrine — structure initialisée

- Front Next.js initialisé avec une page d'accueil minimale ; l'intégration de la maquette reste à faire.
- Maquette approuvée disponible dans `_docs/conception/ui/`.
- Formulaire de contact et affichage des avis Google à intégrer puis à relier à leurs services.
- Mentions légales et politique de confidentialité à rédiger avant la mise en production.
- Référencement local à finaliser.

### Phase 2 — Dashboard PWA

- Dashboard privé installable depuis le navigateur sur téléphone.
- Gestion des photos et des réalisations.
- Calculateur de fournitures.

Le dashboard est prévu comme une **Progressive Web App (PWA)**. Une application
native séparée n'est pas dans le périmètre actuel.

## Stack envisagée

- **Front** : Next.js, React et TypeScript, avec export statique.
- **API** : Node.js, Express et TypeScript.
- **Base de données** : PostgreSQL hébergé sur Neon.
- **Photos** : Cloudinary ; l'ajout initial des photos à la galerie est manuel.
- **E-mails** : Resend pour envoyer les demandes du formulaire à
  `scplaquiste64@gmail.com`.
- **Avis** : Google Places API (New), sous réserve de configurer et protéger la
  clé selon son usage côté serveur ou navigateur.
- **Hébergement envisagé** : O2switch pour le site statique et l'API Node.js.

## Configuration des e-mails

Resend est le **service d'envoi**. L'artisan reçoit les demandes sur son adresse
Gmail `scplaquiste64@gmail.com`.

Dans la configuration de l'API :

```dotenv
RESEND_API_KEY=re_xxxxxxxxxxxx
MAIL_FROM=site@envoi.votre-domaine.fr
MAIL_TO=scplaquiste64@gmail.com
```

`MAIL_FROM` doit utiliser un domaine ou sous-domaine vérifié dans Resend et
configuré avec les enregistrements DNS demandés par le service. L'adresse Gmail
est le destinataire ; elle ne doit pas être utilisée comme expéditeur sauf si
son domaine est vérifié dans Resend. Les vraies clés et valeurs d'environnement
restent dans des fichiers ignorés par Git.

## Prérequis

- Node.js en version LTS et npm.
- Projet Neon avec une base PostgreSQL.
- Compte Cloudinary pour les photos.
- Compte Resend et domaine vérifié pour l'envoi des e-mails.
- Projet Google Cloud avec Places API (New).
- Accès à l'hébergement O2switch pour la mise en production.

## Démarrage

Le front-end Next.js est dans `front/` et l'API Express dans `api/`.

```bash
cd front
npm install
cp .env.example .env.local
npm run dev
```

Le site est configuré pour l'export statique. `npm run build` génère le dossier
`front/out/`, prêt à être déployé sur un hébergement statique.

Pour l'API, `src/app.ts` configure Express et exporte l'application sans ouvrir
de port. `src/server.ts` est le point d'entrée qui démarre le serveur. Cette
séparation permet de faire évoluer l'API et de tester l'application sans lancer
le serveur d'écoute.

```bash
cd api
npm install
cp .env.example .env
npm run dev
```

Renseigner au minimum `CORS_ORIGIN` dans `api/.env` avant de lancer l'API.

En production, `npm run build` compile l'API dans `dist/` et `npm start` démarre
`dist/server.js`.
