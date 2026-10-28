---
title: "Linux Integrity Vanguard : explorer l’intégrité système sans opacité"
published: true
description: "Un prototype de recherche combinant contrôles utilisateur, eBPF facultatif, rapports signés et évaluation serveur."
tags: linux, ebpf, cybersecurity, research
---

# Le problème

Les systèmes anti-triche sont souvent difficiles à auditer et peuvent demander des privilèges très élevés. Linux Integrity Vanguard explore une approche différente : définir explicitement les frontières de confiance, limiter la collecte et documenter les signaux qui participent à une décision côté serveur.

![Tux accompagné de deux pingouins aventuriers](https://raw.githubusercontent.com/JavaScript-X/linux-integrity-vanguard/main/docs/images/linux-integrity-vanguard.png)

## Architecture étudiée

- Contrôles d’intégrité en espace utilisateur
- Observabilité eBPF facultative pour certains événements système
- Rapport client structuré et signé
- Vérification de l’authenticité du rapport
- Évaluation de confiance côté serveur
- Journalisation explicable pour faciliter l’analyse

## Principes de conception

### Transparence

Les contrôles et leurs objectifs doivent pouvoir être documentés. Un signal ne doit pas devenir automatiquement une sanction sans contexte.

### Collecte minimale

L’outil vise les événements nécessaires à l’évaluation de l’intégrité et évite de collecter des données sans relation claire avec le risque étudié.

### Défense en profondeur

La confiance ne repose pas sur un unique contrôle. Les signaux utilisateur, les événements système, la signature et la validation serveur se complètent.

### Dégradation maîtrisée

L’observabilité eBPF est facultative. Le système doit conserver un comportement compréhensible lorsque certaines capacités ne sont pas disponibles.

## Limites

Ce dépôt est un prototype de recherche et une référence de portfolio. Il ne prétend pas résoudre seul les problèmes de triche ni remplacer une stratégie de sécurité complète.

[Voir le dépôt](https://github.com/JavaScript-X/linux-integrity-vanguard)

