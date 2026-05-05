---
title: AI Image Editing - Capabilities Overview
type: moc
status: living
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - overview
  - index
  - capabilities
  - reference
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
audience:
  - praktiker
  - konzepter
  - entwickler
level: basic-to-advanced
intent:
  - verstehen
  - anwenden
contains:
  - framework
  - vocabulary
  - example
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# AI Image Editing - Capabilities Overview

## Einführung

Dieser Bereich dokumentiert die **konkreten Fähigkeiten** von AI Image Editing Tools. Während die [[01_Principles/_Overview|Principles]] erklären **wie** AI funktioniert und **warum** etwas funktioniert, zeigen die Capabilities **was** möglich ist und **wie du es nutzt**.

Jede Capability-Note enthält:
- ✅ Überblick der Möglichkeiten
- ✅ Praktische Beispiele mit Prompts
- ✅ Business Use Cases
- ✅ Wiederverwendbare Prompt-Patterns
- ✅ Typische Probleme & Lösungen

---

## Die 10 Kern-Capabilities

### 🎯 Business-Critical (Start hier)

Diese Capabilities sind für E-Commerce, Marketing und Produktentwicklung besonders relevant:

#### 1. [[Object-Manipulation]]
**Was:** Objekte entfernen, hinzufügen, ersetzen
**Warum wichtig:** Clean-up von Produktfotos, Retusche, störende Elemente entfernen
**Kernfähigkeiten:**
- Objekte entfernen (mit Pose-Erhaltung)
- Objekte ersetzen (z.B. Produktvarianten)
- Selektive Bearbeitung mit Markierungen

**Quick Example:** `remove the fish, keep the man in exactly the same pose`

---

#### 2. [[Character-Editing]]
**Was:** Personen bearbeiten, anpassen, transformieren
**Warum wichtig:** Charakterkonsistenz, Alterung/Verjüngung, Style-Anpassungen
**Kernfähigkeiten:**
- Charakterkonsistenz über mehrere Bilder
- Alterung/Verjüngung mit natürlichen Effekten
- Kleidung/Styling ändern
- Frisuren testen
- Professionelle Porträts erstellen

**Quick Example:** `keep this character's look identical, but place them in a coffee shop`

---

#### 3. [[Composition-Scene-Building]]
**Was:** Mehrere Quellen zu stimmigem Gesamtbild komponieren
**Warum wichtig:** Produktinszenierung, Marketing-Assets, komplexe Szenen ohne Shooting
**Kernfähigkeiten:**
- Multi-Source Composition (Person + Produkt + Szene → Gesamtbild)
- Layout Control (Mockup/Skizze als Positionsvorgabe)
- Element Integration (nahtloses Einfügen)
- Spatial Relationships (mehrere Objekte/Personen plausibel arrangieren)

**Quick Example:** `Place this product [Ref 1] into this hand [Ref 2] in this environment [Ref 3], match lighting and perspective naturally`

---

#### 4. [[Style-Materials]]
**Was:** Stile, Materialien, Ästhetik transformieren
**Warum wichtig:** Produktvarianten, Brand-Styles, kreative Exploration
**Kernfähigkeiten:**
- Kunststile anwenden (Picasso, Van Gogh, N64-Grafik, etc.)
- Selektive Stiländerung (nur Teile des Bildes)
- Materialwechsel (Marmor, Glas, Metall, etc.)
- Comic/Illustration-Stile

**Quick Example:** `change the banana into marble material` oder `convert to Van Gogh style while keeping composition`

---

#### 5. [[Light-Color-Optimization]]
**Was:** Licht, Farbe, Bildqualität optimieren
**Warum wichtig:** Produktfotos verbessern, einheitlicher Look, Bildqualität steigern
**Kernfähigkeiten:**
- Farbänderungen (Produktvarianten in verschiedenen Farben)
- Beleuchtungswechsel (Tag → Nacht, Studio-Licht)
- Belichtungskorrektur (überbelichtete Fotos retten)
- Schwarz-Weiß-Kolorierung

**Quick Example:** `repaint this car in matte black` oder `change lighting to night while maintaining mood`

---

### 🎨 Creative & Content (Erweiterte Möglichkeiten)

#### 6. [[Environment-Scenes]]
**Was:** Umgebungen, Hintergründe, Szenen gestalten
**Warum wichtig:** Location-unabhängige Shootings, Seasonal Content, Szenenwechsel
**Kernfähigkeiten:**
- Hintergrundwechsel (Joker auf Achterbahn)
- Innenraumgestaltung (Renovierung, Möbel hinzufügen)
- Wettereffekte (Sommer, Regen, Schnee, Nebel)
- Epochenwechsel (50er bis 3000)
- Kamerawinkel ändern (Ground → Aerial)

**Quick Example:** `change the background to a coffee shop, maintain warm lighting`

---

#### 7. [[Text-Graphics]]
**Was:** Text, Logos, Grafiken bearbeiten
**Warum wichtig:** Branding, Logo-Varianten, Text-Anpassungen
**Kernfähigkeiten:**
- Textbearbeitung (Neonschilder, Beschriftungen ändern)
- Logo-Redesign (Jaguar → eigenes Logo)
- Marketing-Anzeigen aus Produktfotos

**Quick Example:** `change the logo to say 'ATOMIC GAINS' instead of Jaguar, change animal to chrome banana`

**⚠️ Limitation:** Text ist oft nicht 100% perfekt, bei kritischem Text nachbearbeiten

---

#### 8. [[Photo-Restoration]]
**Was:** Alte/beschädigte Fotos reparieren und modernisieren
**Warum wichtig:** Archiv-Aufbereitung, Vintage-Content modernisieren
**Kernfähigkeiten:**
- Beschädigte Fotos reparieren
- Schwarz-Weiß kolorieren
- Alte Fotos modernisieren
- In neue Kontexte setzen

**Quick Example:** `restore this damaged vintage family photo` oder `colorize and modernize this black and white photo`

**⚠️ Wichtig:** AI synthetisiert plausible Details, nicht Original-Details

---

#### 9. [[Special-Effects]]
**Was:** Spezialeffekte, Dynamik, visuelle Tricks
**Warum wichtig:** Eye-Catching Content, Social Media, kreative Produktdarstellung
**Kernfähigkeiten:**
- Reflexionen erstellen (Spiegel-Boden, Wasser-Reflexion)
- Bewegungseffekte (Motion Blur, Speed Lines)
- Menschenmengen kontrollieren (Personen entfernen/hinzufügen)
- Dekonstruierte Shots (z.B. schwebende Burger-Zutaten)

**Quick Example:** `add motion blur trails to the person running fast` oder `turn the floor into a mirror`

---

#### 10. [[Advanced-Experimental]]
**Was:** Fortgeschrittene und experimentelle Techniken
**Warum wichtig:** Innovation, neue Möglichkeiten entdecken, Grenzen austesten
**Kernfähigkeiten:**
- Skizzen als Kompositionsvorlage
- Location-Based AR (Google Maps → Straßenansicht)
- Informations-Annotation
- Intelligenz-Tests (komplexe Anfragen)

**Quick Example:** `draw a ground view of this red pin location` (Google Maps Screenshot)

---

## Lernpfad-Empfehlungen

### Für E-Commerce/Marketing (Business Focus)
```
Start → Object-Manipulation (Clean-up)
     → Composition-Scene-Building (Produktinszenierung)
     → Light-Color-Optimization (Qualität steigern)
     → Style-Materials (Varianten erstellen)
     → Character-Editing (People in Scenes)
```

### Für Content Creator (Creative Focus)
```
Start → Character-Editing (Personen-Arbeit)
     → Environment-Scenes (Backgrounds)
     → Special-Effects (Eye-Candy)
     → Style-Materials (Ästhetik)
     → Advanced-Experimental (Innovation)
```

### Für Komplette Übersicht (Systematisch)
```
Arbeite alle 10 Capabilities der Reihe nach durch
→ Build vollständiges Verständnis aller Möglichkeiten
```

---

## Capability-Kombinationen

Viele professionelle Workflows nutzen **mehrere Capabilities** zusammen:

### Produkt-Katalog erstellen
```
1. Object-Manipulation: Störende Elemente entfernen
2. Composition-Scene-Building: Produkt in Szene platzieren
3. Light-Color-Optimization: Einheitliche Beleuchtung
4. Style-Materials: Farbvarianten erstellen
```

### Marketing-Campaign Assets
```
1. Character-Editing: Model-Konsistenz
2. Composition-Scene-Building: Szenen komponieren
3. Environment-Scenes: Backgrounds variieren
4. Text-Graphics: Branding hinzufügen
```

### Social Media Content
```
1. Special-Effects: Eye-Catching Effekte
2. Style-Materials: Distinctive Look
3. Environment-Scenes: Dynamische Backgrounds
4. Character-Editing: Konsistente Protagonisten
```

---

## Quick-Reference: Problem → Capability

Welche Capability brauchst du für dein Problem?

| Problem | Capability | Priorität |
|---------|-----------|-----------|
| Störende Elemente im Foto | Object-Manipulation | 🔥 Critical |
| Produkt in verschiedenen Farben | Style-Materials + Light-Color | 🔥 Critical |
| Produkt realistisch in Szene setzen | Composition-Scene-Building | 🔥 Critical |
| Gleiche Person in verschiedenen Szenen | Character-Editing | 🔥 Critical |
| Foto zu dunkel/überbelichtet | Light-Color-Optimization | 🔥 Critical |
| Hintergrund ändern/austauschen | Environment-Scenes | ⚡ Important |
| Altes Foto aufbereiten | Photo-Restoration | ⚡ Important |
| Logo/Text anpassen | Text-Graphics | ⚡ Important |
| Dynamische/auffällige Effekte | Special-Effects | 💡 Creative |
| Innovative/experimentelle Ideen | Advanced-Experimental | 💡 Creative |

---

## Status & Ausbaupläne

**✅ ALLE 10 CAPABILITIES DOKUMENTIERT:**
- ✅ [[Object-Manipulation]] - Objekte entfernen, ersetzen, bearbeiten
- ✅ [[Character-Editing]] - Personen konsistent über Bilder bearbeiten
- ✅ [[Composition-Scene-Building]] - Multi-Source Szenen komponieren
- ✅ [[Style-Materials]] - Stile und Materialien transformieren
- ✅ [[Light-Color-Optimization]] - Licht, Farbe, Qualität optimieren
- ✅ [[Environment-Scenes]] - Backgrounds, Umgebungen, Atmosphäre
- ✅ [[Text-Graphics]] - Text, Logos, Grafiken (mit Limitations)
- ✅ [[Photo-Restoration]] - Alte/beschädigte Fotos reparieren
- ✅ [[Special-Effects]] - VFX, Eye-Candy, visuelle Dramatik
- ✅ [[Advanced-Experimental]] - Innovation, komplexe Workflows

**Status:** Knowledge Base komplett! Alle Capabilities folgen konsistentem Format mit Beispielen, Prompts, Use Cases und Best Practices.

---

## Verwandte Bereiche

### Principles (Grundlagen)
Verstehe erst die [[01_Principles/_Overview|Grundlagen]], bevor du tief in Capabilities einsteigst:
- [[Mental-Models]] - Wie denkt AI?
- [[How-AI-Image-Editing-Works]] - Technisches Verständnis
- [[Common-Pitfalls]] - Fehler vermeiden

### Workflows (Anwendungen)
Nach den Capabilities: Lerne komplexe [[04_Applications/_Overview|Workflows]], die mehrere Capabilities kombinieren.

### Patterns (Best Practices)
Wiederverwendbare [[03_Patterns/_Overview|Lösungsmuster]] für typische Probleme.

---

## Nächste Schritte

**Neu in AI Image Editing?**
1. Lies [[01_Principles/Mental-Models|Mental Models]]
2. Lies [[01_Principles/How-AI-Image-Editing-Works|How AI Image Editing Works]]
3. Starte mit den 🔥 Critical Capabilities

**Schon Erfahrung?**
→ Springe direkt zu spezifischen Capabilities die du brauchst

**Willst du komplexe Workflows bauen?**
→ Erst Capabilities verstehen, dann [[04_Applications/_Overview|Applications]]
