---
title: KI-Tool-Lizenzen im Vergleich
type: reference
status: living
created: '2025-02-08'
updated: '2025-02-08'
tags:
  - ai-tools
  - ai-governance
  - licensing
sources:
  - 'self-authored:loschke:strategy-consulting'
area: ai-strategy
audience:
  - fuehrungskraft
  - entscheider
  - praktiker
level: intermediate
intent:
  - vergleichen
  - referenzieren
contains:
  - reference
  - comparison
  - tip
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# KI-Tool-Lizenzen im Vergleich

> Was die ToS der großen KI-Anbieter tatsächlich gewähren — und wo vertragliche Versprechen an der Realität des Urheberrechts scheitern.

---

## Kernaussage

Jeder KI-Anbieter hat eigene Lizenzmodelle für Ownership, kommerzielle Nutzung und IP-Schutz. Die entscheidende Einschränkung gilt übergreifend: Vertragliche "Ownership" kann kein Urheberrecht erzeugen, wo keines existiert. Wenn dem Output ausreichende menschliche kreative Beteiligung fehlt, ist die ToS-Zuweisung rechtlich leer → siehe [[Urheberrecht-KI-Inhalte]].

---

## Vergleichsmatrix

| Feature | OpenAI (ChatGPT, DALL-E) | Midjourney | Stability AI (SD 3.x) | Adobe Firefly | Google Gemini |
|---------|--------------------------|------------|----------------------|---------------|---------------|
| **Ownership-Claim** | Überträgt "all right, title, and interest" an Nutzer | Paid: Nutzer besitzt. Free/Trial: Midjourney besitzt (CC BY-NC 4.0) | Nutzer besitzt Outputs | Nutzer besitzt ("Customer Content") | Beansprucht kein Ownership, überträgt aber auch keine Rechte |
| **Kommerzielle Nutzung** | Alle Tiers, keine Umsatzgrenze | Nur Paid. Unternehmen >$1M Umsatz brauchen Pro/Mega | Kostenlos unter $1M Umsatz. Darüber: Enterprise License | Ja (mit Abo) | Ja (Paid Tiers) |
| **IP Indemnification** | Nur Enterprise/API ("Copyright Shield") | Keine | Nur Enterprise (erwähnt) | Enterprise — umfassendste am Markt (Copyright, Patent, Trademark, Publicity, Privacy) | Begrenzt auf bestimmte Vertex AI Services |
| **Training an deinen Daten** | Consumer: Ja (Opt-out möglich). Enterprise: Nein | Alles ist public by default (inkl. Prompts). Nur Pro/Mega "Stealth Mode" = privat | Self-hosted, keine Daten an Stability | Trainiert nie an Customer Content | Unpaid: Ja (Human Reviewers lesen mit). Paid: Nein |

---

## Detail-Einordnung pro Anbieter

### OpenAI

Die expliziteste Ownership-Sprache am Markt. Aber: "Outputs may not be unique" und keine Warranty of Non-Infringement. Copyright Shield (Enterprise/API) schützt gegen Infringement-Claims, was für institutionelle Nutzung relevant ist. Consumer/Plus-Nutzer tragen das Risiko allein.

### Midjourney

Das intransparenteste Modell. Free-Nutzer erhalten nur eine eingeschränkte CC BY-NC 4.0 Lizenz — Midjourney selbst bleibt Eigentümer. Alles ist standardmäßig öffentlich sichtbar, inklusive der Prompts. Keinerlei IP-Schutz. Für institutionelle Nutzung nur mit Pro/Mega vertretbar.

### Stability AI

"Open Source" heißt nicht unbegrenzt kostenlos. Die Community License erlaubt kommerzielle Nutzung unter $1M Umsatz, verlangt aber Attribution ("Powered by Stability AI") und verbietet das Training konkurrierender Modelle. Die Lizenz ist widerrufbar.

### Adobe Firefly

Die "commercially safe"-Positionierung. Firefly wird ausschließlich auf lizenziertem Adobe Stock, offen lizenziertem Content und Public-Domain-Material trainiert — kein Web Scraping. Content Credentials werden automatisch als Metadaten eingebettet (Provenance Tracking). Outputs können sogar auf Adobe Stock verkauft werden. Für Unternehmen mit hohem Markenrisiko die sicherste Option für Bildgenerierung.

### Google Gemini

Schwächste Ownership-Sprache: "Won't claim ownership" ist nicht dasselbe wie "assigns rights". Kritisch: Bei unbezahlten Diensten (Google AI Studio, Free API) werden Inputs und Outputs für Modellverbesserung verwendet — menschliche Reviewer lesen mit. Für datensensible Anwendungen nur mit Enterprise-Tier vertretbar.

---

## Entscheidungshilfe nach Use Case

| Use Case | Empfehlung | Begründung |
|----------|------------|------------|
| **Marketing-Bilder mit Markenrisiko** | Adobe Firefly | Lizenzsauberes Training, beste Indemnification |
| **Texterstellung (Enterprise)** | OpenAI Enterprise oder Anthropic API | Copyright Shield, kein Training an Daten |
| **Interne Recherche / Drafts** | Breite Auswahl möglich | Geringeres Risiko, da nicht veröffentlicht |
| **Forschung / Prototyping** | Open-Source (Llama, Mistral) self-hosted | Volle Kontrolle, kein Datenabfluss |
| **Budget-sensitiv, <$1M Umsatz** | Stability AI Community License | Kostenlos, aber Attribution erforderlich |

---

## Die fundamentale Einschränkung

Alle vertraglichen Zusicherungen operieren innerhalb der Grenzen des geltenden Urheberrechts. Wenn ein Output rein KI-generiert ist und keine ausreichende menschliche kreative Beteiligung aufweist, bleibt er ungeschützt — egal was die ToS versprechen. Die Ownership-Klauseln der Anbieter sind eine vertragliche Absicherung zwischen Nutzer und Anbieter, aber kein Schutz gegen Dritte.

---

## Verknüpfungen

- [[Urheberrecht-KI-Inhalte]] – Warum vertragliches Ownership nicht gleich Copyright ist
- [[KI-Output-Haftung-Risiken]] – Risiken bei der Veröffentlichung
- [[EU-AI-Act-Ueberblick]] – Kennzeichnungspflichten und GPAI-Anforderungen

---

*Stand: Februar 2026 | Lizenzbedingungen ändern sich — bei konkreter Nutzung ToS direkt prüfen | Keine Rechtsberatung*
