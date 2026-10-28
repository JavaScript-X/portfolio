---
title: "NaviPort : relier Spotify à une stack musicale auto-hébergée"
published: true
description: "Un produit bilingue avec OAuth PKCE, export de liens et packaging pour ZimaOS et TrueNAS SCALE."
tags: javascript, spotify, selfhosted, docker
---

# Une passerelle, pas un téléchargeur

NaviPort permet de parcourir une bibliothèque Spotify, de sélectionner des albums ou titres et d’exporter les liens utiles à une chaîne musicale auto-hébergée. L’application ne télécharge pas l’audio et ne stocke pas les identifiants Spotify.

## Sécurité et authentification

Le flux OAuth PKCE fonctionne en lecture seule. L’assistant de première configuration évite l’utilisation d’un secret Spotify dans le navigateur et explique clairement les étapes nécessaires.

## Chaîne de traitement

1. Connexion Spotify avec PKCE.
2. Consultation de la bibliothèque.
3. Sélection des contenus.
4. Export texte des liens.
5. Traitement possible par Downtify.
6. Indexation dans Navidrome.

## Déploiement domestique

NaviPort fournit des images multi-architecture amd64 et arm64 ainsi que des manifests adaptés à ZimaOS et TrueNAS SCALE. Cette approche permet de déployer l’interface au plus près de la stack musicale sans transformer l’application en service difficile à maintenir.

[Voir le projet sur GitHub](https://github.com/JavaScript-X/NaviPort)

