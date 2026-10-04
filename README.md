# Atelier Pierre & Joint — Site Vitrine Artisan Carreleur

Site web moderne, haute performance et ultra-interactif conçu pour un artisan carreleur d'exception (Normandie : Caen, Calvados, Pays d'Auge, Bocage).

## Déploiement automatique sur GitHub Pages

Ce projet est configuré pour se déployer automatiquement et sans effort sur **GitHub Pages** grâce au workflow GitHub Actions inclus (`.github/workflows/deploy.yml`).

### Activation en 2 clics sur GitHub :
1. Poussez votre code sur votre dépôt GitHub (branche `main` ou `master`).
2. Sur votre dépôt GitHub, allez dans **Settings** (Paramètres) > **Pages** (dans le menu de gauche).
3. Sous **Build and deployment** > **Source**, sélectionnez **GitHub Actions**.
4. C'est tout ! Dès chaque nouveau push, le workflow compile le site et publie automatiquement la version à jour avec tous les assets optimisés.

### Caractéristiques techniques pour GitHub Pages :
- **Chemins relatifs (`base: './'`)** : Compatibilité totale qu'il soit déployé à la racine (`https://username.github.io`) ou dans un sous-dossier (`https://username.github.io/mon-repo/`).
- **Fichier `.nojekyll`** : Désactivation du moteur Jekyll pour garantir le chargement sans restriction de tous les dossiers d'assets et scripts.
- **Fichier `404.html`** : Redirection élégante pour la gestion des accès directs en Single Page Application.
- **Images packagées & optimisées** : Toutes les photographies haute résolution sont importées et minifiées dans le bundle de production `dist/assets/`.
