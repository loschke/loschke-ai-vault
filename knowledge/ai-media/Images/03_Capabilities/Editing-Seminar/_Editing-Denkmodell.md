---
title: AI Image Editing – Denkmodell für Seminare
type: framework
status: stable
created: '2026-05-05'
updated: '2026-05-05'
tags:
  - image-editing
  - framework
  - seminar
  - teaching
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# AI Image Editing – Denkmodell für Seminare

> **Einordnung:** Das [[_4K-Framework|4K Framework]] beantwortet die Frage: *Wie beschreibe ich ein Bild, das noch nicht existiert?*
> Dieses Modell beantwortet die Frage: *Wie beschreibe ich eine Veränderung an einem Bild, das bereits existiert?*
>
> Das 4K-Wissen (Konzept, Kontext, Komposition, Kreativität) bleibt die Grundlage – denn auch beim Editing braucht die KI genug Kontext, um ihr Weltwissen anzuwenden. Wer „Schneesturm" sagt, muss nicht beschreiben, wie Schnee aussieht.

---

## Die vier Cluster

Alles, was du mit bestehenden Bildern tun kannst, fällt in einen von vier Bereichen:

| Cluster | Kernfrage | Was passiert |
|---------|-----------|-------------|
| **Transformieren** | Wie wird das Bild in ein anderes Medium übersetzt? | Foto → Comic, Sketch → Rendering, Style von Bild X auf Bild Y |
| **Editieren** | Was genau soll sich im Bild ändern? | Objekt entfernen, umfärben, verschieben, ersetzen, hinzufügen |
| **Variieren** | Unter welchen anderen Bedingungen zeige ich dasselbe Motiv? | Anderes Licht, andere Jahreszeit, andere Kleidung, anderes Wetter |
| **Kombinieren** | Wie werden mehrere Quellen zu einem Bild? | Person A + Hintergrund B + Objekt C → neues Bild |

---

## Die drei Denkschritte beim Prompting

Egal in welchem Cluster du dich bewegst – du kommunizierst der KI immer drei Dinge:

### 1. Was bleibt? (Ankerpunkte)
Was soll die KI auf keinen Fall verändern? Je klarer du das benennst, desto weniger ungewollte Nebenwirkungen.

### 2. Was ändert sich? (Eingriff)
Wo genau setzt du an? Ein einzelnes Objekt? Der gesamte Stil? Die Umgebung?

### 3. Wie sieht das Ergebnis aus? (Zielbeschreibung)
Hier kommt das 4K-Wissen zum Tragen: Beschreibe den Zielzustand so detailliert und präzise wie nötig. „Mach den Himmel schön" ist vage. „Dramatischer Himmel" ist klarer. „Sturmwolken bei Abenddämmerung mit warmem Gegenlicht" gibt der KI echten Kontext.

**Faustregel:** Je stärker die Veränderung, desto detaillierter die Zielbeschreibung.

---

## Cluster im Detail

### 1. Transformieren
*Gleiches Motiv, anderes Medium oder anderer Stil*

**Typische Anwendungen:**
- Foto → Illustration, Comic, Aquarell, Ölgemälde
- Sketch/Zeichnung → fotorealistisches Rendering
- Foto → Cartoon/Anime-Version
- Stil von Referenzbild auf Zielbild übertragen (Style Transfer)

**Worauf es ankommt:**
- **Was soll erhalten bleiben?** – Nur die Komposition? Auch die Gesichtszüge? Die exakten Farben? Je klarer, desto besser.
- **Grad der Transformation** – Leichte Stilisierung oder komplette Medienübersetzung? Ein „leicht illustrativ" ist etwas anderes als „wie eine Graphic Novel von Frank Miller".
- **Stil präzise benennen** – Hier greift das 4K-Kreativitäts-Wissen: Kunststile, Epochen, Künstlerreferenzen, Materialien helfen der KI, den Zielstil einzuordnen.

**Prompt-Muster:**
```
[Ausgangsbild] → [Zielmedium/-stil]
→ Was bleibt: [Komposition/Gesichtszüge/Farbschema/...]
→ Was ändert sich: Medium/Stil komplett
→ Zielbeschreibung: [konkreter Stil], [Referenzen], [Grad der Stilisierung]
```

**Beispiel:**
> „Verwandle dieses Teamfoto in eine Illustration im Stil von Editorial Illustrations – klare Linien, reduzierte Farbpalette, leicht überzeichnete Proportionen. Die Gesichter sollen erkennbar bleiben."

---

### 2. Editieren
*Gezielte, lokale Veränderungen im Bild*

**Typische Anwendungen:**
- Objekt entfernen (störende Elemente, Personen, Logos)
- Objekt ersetzen (anderes Kleidungsstück, anderes Produkt)
- Farbe ändern (rotes Auto → blaues Auto)
- Element verschieben oder in der Größe anpassen
- Element hinzufügen (Brille, Hut, Pflanze, Text auf Schild)

**Worauf es ankommt:**
- **Präzise Selektion** – Je genauer du beschreibst WAS sich ändert, desto weniger ändert die KI ungewollt drumherum. „Ändere die Farbe des Autos" statt „mach das Bild blauer".
- **Nahtlose Integration** – Ersetztes/Hinzugefügtes muss zur Umgebung passen (Schatten, Reflexionen, Textur).
- **Ungewollte Nebeneffekte** – KIs neigen dazu, bei lokalen Änderungen auch Umgebungsbereiche mitzuverändern. Explizit benennen, was gleich bleiben soll.

**Prompt-Muster:**
```
[Was genau] → [Wie genau ändern]
→ Was bleibt: Alles außer [dem spezifischen Element]
→ Was ändert sich: [Exakte Beschreibung des Eingriffs]
→ Zielbeschreibung: [Wie soll das Ergebnis aussehen, inkl. Integration]
```

**Beispiel:**
> „Entferne die Person im Hintergrund rechts. Fülle den Bereich mit der Parklandschaft, die drumherum zu sehen ist. Der Rest des Bildes soll unverändert bleiben."

---

### 3. Variieren
*Dasselbe Motiv unter anderen Bedingungen*

**Typische Anwendungen:**
- Andere Jahreszeit (Sommer → Winter)
- Anderes Licht (Tag → Nacht, bewölkt → Sonnenuntergang)
- Anderes Wetter (sonnig → Regen, Nebel, Sturm)
- Andere Kleidung oder Accessoires
- Andere Tageszeit
- Alterung / Verjüngung

**Worauf es ankommt:**
- **Komposition bewahren** – Die Grundstruktur des Bildes (Aufbau, Perspektive, Positionen) soll stabil bleiben. Explizit machen!
- **Konsistenz der Veränderung** – Wenn Winter, dann überall Winter. Nicht nur Schnee auf dem Boden, sondern auch kahle Bäume, andere Kleidung, anderer Himmel.
- **Identität bewahren** – Bei Personen: Gesichtszüge, Körperhaltung, Ausdruck sollen gleich bleiben, auch wenn sich Kleidung oder Umgebung ändert.

**Prompt-Muster:**
```
[Bestehendes Bild] → [Neue Bedingung]
→ Was bleibt: Komposition, Personen, Grundmotiv
→ Was ändert sich: [Bedingung: Licht/Wetter/Jahreszeit/Kleidung/...]
→ Zielbeschreibung: [Detaillierte Beschreibung der neuen Bedingung]
```

**Beispiel:**
> „Zeige dieselbe Straßenszene im Winter. Leichter Schneefall, die Bäume sind kahl, die Passanten tragen Wintermäntel. Warmes Licht aus den Schaufenstern. Komposition und Perspektive bleiben identisch."

---

### 4. Kombinieren
*Mehrere Quellen → ein neues Bild*

**Typische Anwendungen:**
- Person aus Foto A in Szene aus Foto B setzen
- Mehrere Personen aus verschiedenen Fotos in einer Szene vereinen
- Objekt (Produkt, Möbel, Accessoire) in neue Umgebung platzieren
- Elemente aus verschiedenen Bildern zu neuem Motiv zusammensetzen

**Worauf es ankommt:**
- **Lichtkonsistenz** – Woher kommt das Licht in der Zielszene? Stimmt das mit der Beleuchtung der eingefügten Elemente überein?
- **Perspektive** – Stimmen Blickwinkel und Größenverhältnisse zwischen den Quellen?
- **Stilkonsistenz** – Passen die Quellen zusammen (z.B. nicht ein Handy-Schnappschuss mit einem Studio-Portrait kombinieren, ohne bewusst einen Zielstil zu definieren)?
- **Räumliche Beziehung** – Wo steht/sitzt/liegt was im neuen Bild? Vorne, hinten, nebeneinander?

**Prompt-Muster:**
```
[Person/Objekt aus Quelle X] + [Umgebung/Szene aus Quelle Y]
→ Was bleibt: Gesicht/Identität von Person, Grundlayout der Szene
→ Was ändert sich: Zusammenführung beider Elemente
→ Zielbeschreibung: [Lichtsituation], [Perspektive], [Stimmung], [Stil]
```

**Beispiel:**
> „Setze die Person aus Bild 1 an den Schreibtisch in Bild 2. Die Beleuchtung soll der warmen Büroszene entsprechen, Person schaut nach links Richtung Fenster, natürliches weiches Tageslicht."

---

## Zusammenspiel mit dem 4K Framework

```
4K Framework (Generierung)          Editing-Modell (Veränderung)
──────────────────────────          ────────────────────────────
„Beschreibe ein neues Bild"    →    „Beschreibe eine Veränderung"

Konzept  ─── Was ist zu sehen?       Was bleibt? Was ändert sich?
Kontext  ─── Wo, wann, was passiert?  Wie sieht das Ergebnis aus?
Komposition ─ Welche Perspektive?     (bleibt meist Ankerpunkt)
Kreativität ─ Welcher Style?          (wird zum Transformationsziel)
```

Das 4K liefert das Vokabular. Das Editing-Modell liefert die Denkstruktur für Veränderungen.

---

## Hinweise für Seminarkontext

- **Reihenfolge im Seminar:** Transformieren → Editieren → Variieren → Kombinieren (vom Wow-Effekt zur Komplexität)
- **Hands-on pro Cluster:** Mindestens 1-2 Übungen, bei denen Teilnehmer denselben Eingriff erst vage, dann mit den drei Denkschritten formulieren → Unterschied sichtbar machen
- **Tool-Hinweis:** Die Denkschritte gelten tool-übergreifend. Ob ChatGPT, Gemini, Midjourney oder spezialisierte Tools – die Logik bleibt gleich, nur die Eingabemethode unterscheidet sich.

## Begleit-Dokumente

- [[Editing-Beispiele]] – Business-fokussierte Beispiele pro Cluster
- [[Editing-Uebungskarten]] – Offene Übungskarten pro Bild
- [[Editing-Bildsammlung-Prompts]] – Generierungs-Prompts für die Übungsbilder
