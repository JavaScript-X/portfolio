---
title: "Construire un client Stremio natif pour PlayStation 4"
published: true
description: "Architecture, navigation manette, lecture vidéo matérielle et build reproductible d’un client Stremio pour PS4 jailbreakée."
tags: cpp, gamedev, docker, playstation
---

# Pourquoi porter Stremio sur PS4 ?

Stremio for PlayStation 4 est une expérience native, pensée dès le départ pour la télévision et la DualShock 4. Le défi principal est de proposer une interface moderne dans un environnement fermé, avec peu de bibliothèques prêtes à l’emploi et des contraintes fortes sur la mémoire, le décodage vidéo et le packaging.

## Architecture

- **C++ et OpenOrbis** pour l’application native
- **Videodec2** pour la lecture H.264 accélérée matériellement
- **Serveur Stremio local** pour le catalogue et les flux disponibles sur le réseau
- **Cache média borné** pour préserver les ressources de la console
- **Docker** pour rendre le build et la création du PKG reproductibles

## Expérience utilisateur

La navigation est entièrement pensée pour la manette : déplacement cohérent du focus, accès au catalogue, recherche, fiches détaillées, saisons, épisodes et retour prévisible entre les écrans. La liaison d’appareil évite de saisir un mot de passe complexe à la manette.

## Validation sur matériel réel

Le projet est testé sur une vraie PlayStation 4 afin de vérifier la lisibilité en 1080p, la stabilité, la fluidité de la navigation et le comportement du décodage vidéo. Les tests sur matériel sont indispensables car les contraintes réelles ne sont pas toutes visibles dans un environnement de développement classique.

## Principes retenus

1. Réduire les dépendances non indispensables.
2. Documenter les limites de la plateforme.
3. Garder un build reproductible.
4. Valider chaque évolution importante sur console.
5. Concevoir l’interface pour la distance et la manette.

[Voir le projet sur GitHub](https://github.com/JavaScript-X/stremio-ps4)

