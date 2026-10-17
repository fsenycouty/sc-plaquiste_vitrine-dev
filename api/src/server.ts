/**
 * Point d'entrée de l'API : démarre l'application Express sur le port configuré.
 * La configuration des middlewares et des routes reste dans app.ts.
 */
import { app } from './app.js';

const port = Number(process.env.PORT) || 4000;

app.listen(port, () => {
  console.log(`API démarrée sur http://localhost:${port}`);
});
