/**
 * Configure et exporte l'application Express sans démarrer de serveur réseau.
 * Cette séparation permet d'importer l'application dans les tests sans ouvrir de port.
 */
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

// CORS limite les origines navigateur autorisées à lire les réponses de l'API.
// Ce mécanisme ne remplace pas l'authentification et ne bloque pas les appels directs.
const corsOrigin = process.env.CORS_ORIGIN;
if (!corsOrigin) {
  throw new Error('La variable CORS_ORIGIN doit être définie.');
}
app.use(cors({ origin: corsOrigin }));

// Lecture des corps JSON envoyés par le site et le futur dashboard.
app.use(express.json());

export { app };
