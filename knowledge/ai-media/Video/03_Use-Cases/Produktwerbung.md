---
title: Video/03_Use Cases/Produktwerbung
type: reference
status: stable
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - use-case
  - video
  - ai-media
  - ads
  - product
  - influencer
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Produktwerbung

> AI-generierte Produktvideos, virtuelle Influencer und Product Placement – von Premium-Ads bis UGC-Style Content.

---

## Empfohlene Script-Strukturen

→ Ausführliche Beschreibungen: [[04_Pre-Production/Script-Strukturen|Script-Strukturen]]

| Struktur | Wann verwenden | Beispiel |
|----------|----------------|----------|
| **PAS** | Kurze Ads (15-30s), klarer Pain Point | "Schlechter Schlaf → Folgen → Unsere Matratze" |
| **AIDA** | Längere Ads (45s+), Desire aufbauen | Premium-Produkte, Luxury |
| **Before/After** | Visuelle Transformation | Skincare, Fitness, Cleaning |
| **Testimonial** | Social Proof wichtig | UGC-Style, Reviews |

**Für Product Ads unter 30s: PAS oder Before/After.** Keine Zeit für lange Desire-Aufbau.

---

## Drei Hauptanwendungsfälle

### 1. Produktvideos aus Produktfotos (Image-to-Video)

Reales Produktfoto hochladen, AI animiert es zu einem Werbevideo.

**Workflow:**
1. Produktfoto als PNG (sauberer Hintergrund, hohe Auflösung)
2. Image-to-Video Modus im Tool
3. Animation und Kamerabewegung prompten

**Prompt-Formel:**
```
Subject (Produkt) + Scene (Location) + Action (Bewegung) + Camera (Zoom/Pan) + Lighting
```

### 2. Virtuelle Influencer mit Produkten

AI-generierte Persona, die echte Produkte bewirbt – für UGC-Style Ads, Tutorials, Unboxings.

**Workflow:**
1. Influencer-Persona definieren (Alter, Style, Ton)
2. Script schreiben (max. 6-12 Worte pro 8-Sek-Clip)
3. Produkt separat oder integriert generieren
4. Post-Production: Zusammenschnitt, Audio-Sync

### 3. Virtual Product Placement

Produkte nachträglich in bestehende Videos einfügen – für Sponsoring-Deals nach Dreh.

**Tools:** Filmora AI, Mirriad, BENlabs (Enterprise)

---

## Prompting-Strategien

### Tabletop Commercial (Premium)

```
A static shot of [PRODUKT] on a matte black tabletop.
Slow dolly-in, macro detail on [FEATURE/TEXTURE].
Three-point lighting with soft rim light, minimal reflections.
High-contrast, modern commercial look.
Ambient: [PASSENDER SOUND].
Style: TV product commercial.
```

### Food Assembly (Hero Shot)

```
Extreme close-up, black background, dramatic top lighting.
Ingredients for [GERICHT] float and assemble in slow-motion:
[ZUTAT 1] lands first, [ZUTAT 2] stacks precisely,
[ZUTAT 3] drizzles down in golden streams.
Steam rises, catching the light.
Camera: static, locked-off shot.
Style: premium food commercial, ASMR quality.
Audio: sizzling, dripping, satisfying plating sounds.
```

### AI Influencer (UGC-Style)

```
A young female virtual influencer with short hair and casual clothes
delivering a tech product review in a modern studio with warm lighting.
She holds [PRODUKT] and demonstrates [FEATURE], expressing excitement.
Handheld camera movement, slight pull-back.
She says: "[KURZER SATZ, max 10 Worte]"
Style: authentic TikTok UGC, soft skin, natural background.
No subtitles.
```

### Luxury Skincare

```
Minimalist bathroom vanity, soft morning light through frosted window.
Premium skincare serum in frosted glass bottle, gold dropper cap.
Slow push-in from medium to close-up, ending on droplet detail.
Hand elegantly picks up bottle, releases single golden droplet.
Quiet morning ambiance, soft glass clink, satisfying droplet sound.
Style: Luxury beauty commercial, editorial aesthetic.
```

### Tech Unboxing

```
Medium shot of a young tech enthusiast in a modern home office.
She carefully opens a sleek black box revealing [PRODUKT].
Her eyes widen with genuine excitement as she lifts it out.
Handheld camera, natural window light.
She says: "Okay, this packaging alone is worth it."
Ambient room tone, satisfying box opening sounds.
Style: authentic YouTube unboxing.
No subtitles.
```

---

## Workflows

### Workflow A: Produktvideo mit AI-Influencer

1. **Produktfoto vorbereiten**
   - PNG mit sauberem Hintergrund
   - Markenlogo sichtbar

2. **Persona definieren**
   - Wiederkehrende Identity Cues (Haarfarbe, Kleidung)
   - Ton (enthusiastisch, sachlich, lifestyle)

3. **Script**
   - Max. 6-12 Worte pro Clip
   - Eine Botschaft pro Clip
   - CTA am Ende

4. **Generieren**
   - Produktszenen: Image-to-Video
   - Influencer-Szenen: Text-to-Video oder spezialisierte Tools

5. **Post-Production**
   - Zusammenschnitt
   - Audio-Sync prüfen
   - Brand-Overlays, CTA

### Workflow B: UGC-Style Ad (Schnell)

1. Produktfoto + Influencer-Referenzbild
2. Motion Control für authentische Bewegung
3. Hintergrund: Studio → Lifestyle-Setting
4. Voice-Over mit passender Stimme
5. Export: 9:16 (TikTok/Reels), 1:1 (Feed)

### Workflow C: Hybrid Human-AI

Authentischer als 100% AI, skalierbar:

1. **Echte Footage:** Hands-on-Shots, Unboxing-Details
2. **AI-generiert:** Hero Shots, Produktanimationen
3. **Mix im Edit:** Menschliche Authentizität + AI-Production-Value

**Vorteil:** Platform-Algorithmen flaggen weniger, höhere Glaubwürdigkeit.

---

## Kritische Erfolgsfaktoren

### Produktkonsistenz

| Problem | Lösung |
|---------|--------|
| Produkt sieht jedes Mal anders aus | Image-to-Video mit echtem Produktfoto |
| Logo wird verändert | Markenassets als Input-Bilder |
| Character-Drift bei Influencer | Identity Cues wiederholen, Seed nutzen |
| Inkonsistente Beleuchtung | `consistent lighting` prompten |

### Authentizität vs. AI-Detection

**Gegen "Fake"-Wirkung:**
- `No subtitles` (verhindert ungewollte Text-Overlays)
- `Handheld camera movement` für UGC-Feel
- `slight imperfection, natural lighting`
- Mix mit echtem Footage

### Audio-Sync

- Kurze Dialogzeilen (6-12 Worte)
- Eine Zeile Dialog pro Clip
- Ambient Audio immer mit-prompten

---

## Bekannte Einschränkungen

### Branded Products

**Problem:** AI verändert Logos, Farben, Design-Details

**Workarounds:**
- Image-to-Video mit echtem Produktfoto als Startframe
- Post-Production: Logo-Overlay im Schnittprogramm

### Rechtliche Aspekte

- Manche Brands verbieten AI-Content in Influencer-Verträgen
- Immer Freigabe einholen
- AI-Content kennzeichnen (FTC/EU-Richtlinien)
- SynthID-Watermarking bei Google-Tools

### Platform-Richtlinien

**Problem:** TikTok/Instagram flaggen "unoriginelle" AI-Inhalte

**Workarounds:**
- Varianz in Prompts
- Hybrid mit echtem Footage
- Unique Hooks
- Behind-the-Scenes Content

### Uncanny Valley

**Problem:** Zu perfekt = unglaubwürdig

**Workarounds:**
- Stilisierte statt hyperrealistische Avatare
- Leichte Imperfektionen prompten
- Authentische Gestik aus Referenz-Videos

---

## Tool-Empfehlungen

| Use Case | Tools |
|----------|-------|
| Produktvideo aus Foto | Veo 3, Kling 2.0, Pika |
| Premium Product Hero | Veo 3, Runway Gen-3 |
| AI Influencer Avatar | JoggAI, Creatify, HeyGen |
| UGC-Style Ads | Creatify, Mintly |
| Motion Transfer | Kling Motion Control |
| Product Placement (Post) | Filmora AI, Mirriad |
| Voice & Lip-Sync | Veo 3 (nativ), ElevenLabs + Sync-Tool |

---

## Markt-Kontext

- Virtueller Influencer-Markt: $6B (2024) → $46B projected (2030)
- Kosten: AI-Werbespot ~$0.20-$2 vs. traditionell $100K+
- Trend: Hybrid Human-AI Campaigns als Sweet Spot

---

## Siehe auch

### Pre-Production
- [[04_Pre-Production/Video-Scripting-Framework|Video-Scripting-Framework]] – Grundlagen des AI-Video-Scripting
- [[04_Pre-Production/Script-Strukturen|Script-Strukturen]] – PAS, AIDA, Before/After
- [[04_Pre-Production/Script-to-Shot-Workflow|Script-to-Shot-Workflow]] – Script in Shots übersetzen

### Prompting & Capabilities
- [[00_Prompting/Video-Prompting-Framework|Video-Prompting-Framework]] – Basis-Framework
- [[01_Capabilities/Text-to-Video|Text-to-Video]] – T2V-Grundlagen
- [[01_Capabilities/Image-to-Video|Image-to-Video]] – I2V für Produktfotos

### Verwandte Use Cases
- [[03_Use-Cases/VFX-und-Motion-Graphics|VFX-und-Motion-Graphics]] – VFX-Techniken für Produktvideos
- [[03_Use-Cases/Social-Media|Social-Media]] – Platform-spezifische Strategien
