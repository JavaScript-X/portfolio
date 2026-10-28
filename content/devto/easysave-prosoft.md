---
title: "EasySave ProSoft : orchestrer des sauvegardes fiables avec .NET 8"
published: true
description: "Architecture MVVM, jobs parallèles, chiffrement, priorités et journalisation centralisée pour une application WPF de sauvegarde."
tags: dotnet, csharp, wpf, docker
---

# Objectif

EasySave ProSoft automatise des sauvegardes complètes et différentielles tout en donnant une visibilité en temps réel sur leur progression. Le projet associe une interface WPF bilingue, une architecture MVVM et un moteur de jobs capable de gérer plusieurs opérations en parallèle.

## Fonctionnalités

- Nombre illimité de jobs configurables
- Sauvegarde complète et différentielle
- Actions Play, Pause et Stop
- Priorité de certains fichiers
- Limitation des gros transferts simultanés
- Chiffrement avec CryptoSoft
- Journaux JSON ou XML
- Utilisation en interface graphique ou en ligne de commande

## Architecture

Les stratégies de sauvegarde isolent les différences entre les modes complets et différentiels. L’orchestration parallèle tient compte des priorités, de la concurrence et des commandes utilisateur. La journalisation peut être centralisée dans un service conteneurisé afin d’améliorer la traçabilité.

## Points d’attention

Une application de sauvegarde doit traiter les interruptions, les fichiers indisponibles, les conflits de destination et les états partiels. Le modèle de progression doit rester cohérent même lorsque plusieurs jobs sont actifs.

[Voir le projet sur GitHub](https://github.com/JavaScript-X/EasySave_ProSoft)

