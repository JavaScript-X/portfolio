---
title: "Mon homelab avec ZimaOS, TrueNAS et des services auto-hébergés"
published: true
description: "Stockage ZFS, conteneurs, accès distant, DNS filtré, médias, jeux et méthode de dépannage dans mon laboratoire personnel."
tags: homelab, selfhosted, docker, truenas
---

# Un laboratoire pour apprendre en construisant

Mon homelab me permet de travailler sur toute la chaîne, du stockage à l’expérience utilisateur. J’utilise ZimaOS et TrueNAS pour expérimenter avec ZFS, les snapshots, les permissions, les sauvegardes, les conteneurs et les services réseau.

Les captures présentées dans mon portfolio viennent des documentations publiques officielles afin de ne révéler aucune adresse, aucun nom d’hôte et aucune donnée personnelle de mon installation.

## Stack principale

- ZimaOS et TrueNAS SCALE
- ZFS, pools, snapshots, ACL et suivi de la santé du stockage
- Docker et Docker Compose
- Portainer
- Nginx Proxy Manager
- Tailscale pour l’accès distant
- AdGuard Home pour le DNS filtré
- Immich pour les photos
- Navidrome et Stremio pour les médias
- RomM pour les bibliothèques de jeux
- AMP Server Manager et Playit pour certains serveurs de jeu

## Réseau et résolution d’incidents

J’ai travaillé sur la configuration IPv4, le Wi-Fi, la résolution DNS, les domaines internes, les permissions, les chemins de volumes et la connectivité entre conteneurs. Chaque incident devient une note, un test reproductible ou une amélioration de l’architecture.

## Méthode

1. Décrire précisément le symptôme.
2. Séparer réseau, stockage, permissions et application.
3. Reproduire avec le minimum de composants.
4. Observer les logs et l’état des services.
5. Corriger la cause, pas seulement le symptôme.
6. Documenter la solution et le test de non-régression.

## Réparation et homebrew

Le laboratoire prolonge aussi mon intérêt pour le matériel : diagnostic, démontage, nettoyage, remplacement de composants, récupération firmware, réparation de consoles et homebrew responsable.

