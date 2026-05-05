---
title: Die Provider-Falle
type: concept
status: stable
created: '2025-01-31'
updated: '2025-01-31'
tags:
  - ai-strategy
sources:
  - 'self-authored:loschke:strategy-consulting'
area: ai-strategy
audience:
  - fuehrungskraft
  - entscheider
level: advanced
intent:
  - verstehen
  - ueberzeugen
contains:
  - concept
  - argument
  - tip
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Die Provider-Falle

> Wann wird der Anwender ungewollt zum Hersteller – mit voller Produkthaftung?

---

## Kernaussage

Nach Art. 25 KI-VO wird ein **Betreiber** (Anwender) rechtlich zum **Anbieter** (Hersteller), wenn er ein KI-System **wesentlich verändert**. Damit treffen ihn die vollen Konformitätspflichten und die Produkthaftung.

Das ist das größte unterschätzte Risiko für Unternehmen, die Standard-KI einkaufen und "nur etwas anpassen" wollen.

---

## Was bedeutet "Anbieter werden"?

| Als Betreiber (normal) | Als Anbieter (nach wesentlicher Änderung) |
|------------------------|------------------------------------------|
| Nutzung gemäß Anleitung | Volle Konformitätsbewertung |
| Logging, Aufsicht, Schulung | Technische Dokumentation erstellen |
| Überschaubarer Aufwand | CE-Kennzeichnung, EU-Datenbank-Registrierung |
| Haftung begrenzt | Produkthaftung für das System |

---

## Wann liegt eine "wesentliche Änderung" vor?

### 1. Zweckänderung

Nutzung einer KI für einen anderen Zweck als in der Betriebsanleitung vorgesehen.

**Beispiel:** Marketing-Text-Tool zur automatisierten Erstellung von Arbeitszeugnissen nutzen → Zweckänderung in Hochrisiko-Bereich → Betreiber wird Anbieter.

### 2. Technische Modifikation mit Risikoveränderung

Eingriffe ins Modell, die das Risikoprofil verändern.

---

## Deep Dive: Finetuning-Methoden und ihr Risiko

Viele Unternehmen wollen LLMs auf eigene Daten anpassen. Hier wird's kritisch:

| Methode | Eingriffstiefe | Risikobewertung |
|---------|----------------|-----------------|
| **Prompt Engineering / RAG** | Keine Änderung am Modell | ✅ Keine wesentliche Änderung |
| **PEFT / LoRA (Adapter Tuning)** | Kleine Adapter-Schichten, Basismodell eingefroren | ⚠️ Oft unkritisch, Einzelfallprüfung nötig |
| **Layer-Wise Fine-Tuning** | Einzelne Schichten neu trainiert | ⚠️ Grauzone – Risikoanalyse erforderlich |
| **Full Fine-Tuning** | Alle Gewichte/Parameter verändert | 🔴 Fast immer wesentliche Änderung → Herstellerrolle! |

### Was bedeutet das praktisch?

**Prompt Engineering:** Du schreibst Anweisungen, das Modell bleibt unverändert → Sicher.

**RAG (Retrieval Augmented Generation):** Eigene Dokumente werden zur Laufzeit einbezogen, Modell bleibt unverändert → Sicher.

**LoRA/Adapter:** Kleine trainierbare Schichten werden "aufgesteckt", Basismodell eingefroren → Meist sicher, aber prüfen.

**Full Fine-Tuning:** Alle Parameter werden neu trainiert → Du bist jetzt Hersteller eines neuen KI-Systems.

---

## Die Faustregel

> **Je tiefer der Eingriff ins Modell, desto wahrscheinlicher die Herstellerrolle.**

```
Prompt Engineering → RAG → Adapter → Layer-Wise → Full Fine-Tuning
        ✅ ─────────────── ⚠️ ───────────────── 🔴
     Sicher                                    Hersteller
```

---

## Typische Fallen

| Situation | Was viele denken | Realität |
|-----------|-----------------|----------|
| "Wir trainieren nur auf unseren FAQ" | "Ist ja nur ein bisschen Anpassung" | Full Fine-Tuning = Hersteller |
| "Das ist Open Source, da dürfen wir alles" | "Keine Lizenzkosten, keine Pflichten" | Open-Source-Ausnahme gilt NICHT bei Hochrisiko |
| "Der Dienstleister macht das Finetuning" | "Der ist dann Hersteller" | Wer betreibt es nachher? → Oft du! |
| "Wir nutzen es intern, nicht für Kunden" | "Intern gilt weniger" | Hochrisiko gilt auch intern (HR!) |

---

## Empfehlungen

### Bevorzugen:
- **Prompt Engineering** – Erstaunlich viel ist möglich ohne Finetuning
- **RAG-Architekturen** – Eigenes Wissen einbinden ohne Modell zu verändern
- **Adapter-Tuning** – Wenn Finetuning nötig, dann "leicht"

### Vermeiden (bei Hochrisiko):
- Full Fine-Tuning ohne juristische Prüfung
- Zweckänderung ohne Bewertung
- Unklare Verträge mit KI-Lieferanten

### Bei Verträgen klären:
- Wer trägt Konformitätsverantwortung nach Anpassungen?
- Welche Anpassungen sind "bestimmungsgemäß"?
- Was passiert bei Updates durch den Anbieter?

---

## Quick-Check vor Anpassungen

→ Ausführlich in [[06_RESOURCES/Assets/Checkliste-KI-Compliance-Implementierung|Checkliste: KI-Compliance-Implementierung]]

1. Ist die geplante Nutzung vom Zweck in der Betriebsanleitung gedeckt?
2. Welche Finetuning-Methode ist geplant?
3. Ist die Anwendung Hochrisiko (HR, Kredit, Bildung, Infrastruktur)?
4. Liegt eine Risikoanalyse für die geplante Änderung vor?
5. Ist die Nicht-Wesentlichkeit dokumentiert?

---

## Verknüpfungen

- [[EU-AI-Act-Ueberblick]] – Risikoklassen und Grundpflichten
- [[Zwei-Saeulen-Governance]] – Wo verankert man Anpassungs-Policies?
- [[Adaptive-Governance-Modelle]] – Freigabeprozesse für KI-Anpassungen

---

*Stand: Januar 2026 | Keine Rechtsberatung*
