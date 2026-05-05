---
title: Understanding/03_Use Cases/Live Realtime
type: reference
status: stable
created: '2026-01-27'
updated: '2026-01-27'
tags:
  - use-case
  - ai-media
  - understanding
  - live
  - realtime
  - gemini
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Use Case: Live & Realtime Vision

> Kamera als Echtzeit-Interface – interaktive, bidirektionale Vision-Anwendungen.

---

## Kernidee

Nicht "analysiere dieses Bild", sondern "schau mit mir zusammen und reagiere". Die Kamera wird zum dauerhaften Input-Kanal.

---

## Use Cases

### Umgebungs-Guide
Handy auf Gebäude, Kunstwerk, Produkt richten → sofortige Erklärung.

**Tools:** Gemini Live API  
**Setup:** Mobile App mit Kamera-Stream  
**Beispiel:** Tourist richtet Kamera auf Brandenburger Tor → Geschichte, Architektur, Kontext

### Live-Übersetzung
Schilder, Speisekarten, Dokumente in Echtzeit übersetzen.

**Tools:** Gemini Live, Google Lens  
**Setup:** Kamera-Overlay mit übersetztem Text  
**Beispiel:** Japanische Speisekarte → deutsche Übersetzung live eingeblendet

### Objekt-Identifikation
"Was ist das?" – Pflanzen, Produkte, Bauteile, Kunstwerke erkennen.

**Tools:** Gemini Live, GPT-4o  
**Beispiel:** Pflanze im Garten → Art, Pflegehinweise, Giftigkeit

### Screen-Share Review
Code, Designs, Dokumente live besprechen lassen.

**Tools:** Gemini Live  
**Setup:** Bildschirmfreigabe + Audio  
**Beispiel:** "Schau dir diesen Code an und sag mir wo der Bug ist"

---

## Technologie

**Gemini Live API** ist aktuell (Jan 2026) der Hauptspieler:
- Bidirektionaler Audio/Video-Stream
- Sub-Sekunden Latenz
- Multimodal (sieht + hört + spricht)

---

## Limitierungen

- Bandbreite/Latenz abhängig von Verbindung
- Datenschutz bei permanentem Kamera-Stream
- Noch nicht alle Sprachen gleich gut
- Halluzinationen bei unbekannten Objekten möglich

---

*Stand: Januar 2026*
