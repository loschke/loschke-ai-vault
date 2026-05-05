---
title: Hyperpersonalisierung/Use Cases
type: reference
status: living
created: 2026-01-27T00:00:00.000Z
updated: 2026-01-27T00:00:00.000Z
tags:
  - ai-shifts
  - personalization
  - use-cases
  - examples
sources:
  - 'self-authored:loschke:trend-research'
area: ai-shifts
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Use Cases

> Dieselbe Logik, drei Branchen, vier Stufen

Die Stufen werden erst greifbar, wenn man sieht, was sich konkret ändert. Hier drei Szenarien – jeweils dieselbe Anfrage durch alle Reifegrade.

---

## Szenario 1: Gesundheit / Krankenkasse

**Anfrage:** "Reha nach Knie-OP"

### Stufe 0: Status Quo

**System:** 
> "Informationen zur Rehabilitation finden Sie unter [Link]. Bei Fragen wenden Sie sich an Ihre Geschäftsstelle."

**Was fehlt:**
- Keine Reaktion auf das Bedürfnis (Will die Person Orientierung? Oder nur schnell den Antrag?)
- Gleiches PDF für alle
- Nutzer muss selbst filtern

---

### Stufe 1: Regelbasierte Personalisierung

**Erkennung:**
- Keyword "Reha" + "OP" → Intention: wahrscheinlich Orientierung
- Gerät: Mobil

**System:**
> "Nach einer Knie-OP haben Sie Anspruch auf Reha. Die wichtigsten Infos:
> - Dauer: ca. 3 Wochen stationär
> - Antrag: über uns oder Klinik
> 
> [→ Antrag starten] [→ Mehr Details]"

**Verbesserung:** Strukturiert, nicht mehr nur Link-Wurf. Aber noch keine echte Kontextanpassung.

---

### Stufe 2: LLM-gestützte Erkennung

**Erkennung:**
- LLM analysiert: Sachliche Formulierung, keine Stress-Signale → Intention: Orientierung & Kontrolle
- Kontext: Desktop, längere Session

**System (Nutzer A – entspannt, Desktop):**
> "**Was Sie über die Reha nach Ihrer Knie-OP wissen sollten**
> 
> Nach einer Knie-Operation folgt in der Regel eine Rehabilitation. Diese hilft Ihnen, die Beweglichkeit wiederzuerlangen und den Heilungsprozess zu unterstützen.
> 
> **Ablauf:**
> 1. Antrag stellen (wir oder Klinik)
> 2. Genehmigung (ca. 2 Wochen)
> 3. Reha-Beginn (meist 4-6 Wochen nach OP)
> 
> **Dauer:** 3 Wochen stationär, ambulant auch möglich
> 
> [Antrag starten] [Kliniken in Ihrer Nähe] [Häufige Fragen]"

**System (Nutzer B – gestresst, mobil, Tippfehler):**
> "**Reha nach Knie-OP**
> ✓ Sie haben Anspruch
> ✓ Dauer: 3 Wochen
> 
> [→ Jetzt Antrag starten]
> 
> Fragen? [Rückruf vereinbaren]"

**Verbesserung:** Gleiche Fakten, andere Delivery. L2 (Tiefe) bleibt, L3 (Format) passt an.

---

### Stufe 3: Adaptives System

**Zusätzlich:**
- Nutzer B klickt nicht auf "Antrag starten", sondern "Rückruf"
- System lernt: Bei Stress-Signalen + Mobil → direkten Kontakt prominenter anbieten
- Beim nächsten ähnlichen Nutzer: Rückruf-Button ist Primary Action

**Feedback-Signale:**
- Klick auf "Mehr Details" → war zu knapp
- Abbruch nach Textwand → war zu viel
- Erfolgreicher Antrag nach Kurzversion → Format passte

---

## Szenario 2: IT-Support

**Anfrage:** "Das funktioniert nicht"

### Stufe 0: Status Quo

**System:**
> "Bitte beschreiben Sie Ihr Problem genauer. Haben Sie schon einen Neustart versucht? Hier finden Sie unsere FAQ: [Link]"

**Was fehlt:**
- Ignoriert, dass "funktioniert nicht" oft Frustration signalisiert
- Standardfragen statt Empathie
- Nutzer fühlt sich nicht gehört

---

### Stufe 1: Regelbasierte Personalisierung

**Erkennung:**
- "funktioniert nicht" → Intention: Problem lösen
- Kunde hat offenes Ticket seit 3 Tagen

**System:**
> "Das tut mir leid. Ich sehe, Sie haben bereits ein Ticket (#12345) zu diesem Thema.
> 
> Betrifft es dasselbe Problem?
> [Ja, weiter damit] [Nein, neues Problem]"

**Verbesserung:** Kontext (offenes Ticket) wird genutzt. Aber noch keine Tonanpassung.

---

### Stufe 2: LLM-gestützte Erkennung

**Erkennung:**
- LLM: Kurzer Satz, keine Details, Ausrufezeichen in Folgenachricht → Frustration wahrscheinlich
- Kontext: 3. Kontaktversuch diese Woche

**System (frustrierter Nutzer):**
> "Ich verstehe, dass das frustrierend ist – besonders wenn es nicht das erste Mal ist.
> 
> Ich sehe Ihr Ticket #12345. Damit das jetzt gelöst wird:
> 
> [→ Direkt mit Techniker verbinden]
> 
> Oder: Kurz beschreiben, was genau passiert – ich schaue sofort rein."

**System (sachlicher Erstanfrager):**
> "Kein Problem, das kriegen wir hin.
> 
> Damit ich gezielt helfen kann:
> - Was genau funktioniert nicht?
> - Seit wann tritt das auf?
> - Schon etwas versucht?
> 
> [Oder: Screenshot hochladen]"

**Verbesserung:** Ton passt zur Situation. Frustrierter Nutzer bekommt Eskalationsoption sofort, nicht erst nach 5 Rückfragen.

---

### Stufe 3: Adaptives System

**Zusätzlich:**
- System trackt: Wenn Nutzer "Direkt verbinden" wählt → Problem war real dringend
- Lernt: Bei 3+ Kontakten + kurze Nachrichten → Eskalation früher anbieten
- Misst: Lösungsrate nach Direktverbindung vs. Self-Service

**Feedback-Signale:**
- Nutzer bricht nach Rückfragen ab → zu viel Friction
- Nutzer löst selbst nach Anleitung → Self-Service funktioniert
- Nutzer eskaliert sofort → System hat Dringlichkeit unterschätzt

---

## Szenario 3: HR / Karriere

**Anfrage:** "Wie ist der Stand meiner Bewerbung?"

### Stufe 0: Status Quo

**System:**
> "Den Status Ihrer Bewerbung können Sie im Bewerberportal einsehen. [Link zum Login]"

**Was fehlt:**
- Null Empathie für die Situation (Bewerber sind oft nervös)
- Keine Info, nur Verweis
- Unpersönlich obwohl der Mensch sich persönlich beworben hat

---

### Stufe 1: Regelbasierte Personalisierung

**Erkennung:**
- "Stand" + "Bewerbung" → Intention: Status wissen
- System kennt: Bewerbung liegt bei Fachabteilung, seit 8 Tagen

**System:**
> "Ihre Bewerbung für [Stelle] ist aktuell bei der Fachabteilung in Prüfung.
> 
> Eingegangen: 19.01.2026
> Status: In Prüfung (seit 8 Tagen)
> 
> Üblicher Zeitrahmen: 10-14 Tage
> 
> [Benachrichtigung aktivieren wenn Update]"

**Verbesserung:** Konkrete Info statt Portal-Verweis. Aber keine Kontextanpassung.

---

### Stufe 2: LLM-gestützte Erkennung

**Erkennung:**
- LLM: Kurze Anfrage, dritte Nachfrage in 2 Wochen → wahrscheinlich nervös/ungeduldig
- Kontext: Hat sich auf Senior-Position beworben, ist aktuell angestellt

**System (nervöser Bewerber, mehrfache Nachfrage):**
> "Ich verstehe, dass das Warten zermürbend sein kann.
> 
> Stand Ihrer Bewerbung für [Senior Position]:
> ✓ Bei der Fachabteilung seit 8 Tagen
> ✓ Im üblichen Zeitrahmen (10-14 Tage)
> 
> **Was das bedeutet:** Kein Grund zur Sorge. Die Fachabteilung prüft gründlich – das ist bei Senior-Positionen normal.
> 
> Ich melde mich proaktiv, sobald es ein Update gibt. Versprochen.
> 
> [Rückfragen? Direkt antworten]"

**System (entspannter Bewerber, erste Nachfrage):**
> "Ihre Bewerbung für [Stelle] ist in Prüfung bei der Fachabteilung.
> 
> - Eingegangen: 19.01.2026
> - Erwartete Rückmeldung: ca. 27.01.2026
> 
> [Updates per Mail aktivieren]"

**Verbesserung:** Nervöser Bewerber bekommt Kontext ("das ist normal") und Zusicherung. Entspannter Bewerber bekommt Fakten ohne Überfürsorge.

---

### Stufe 3: Adaptives System

**Zusätzlich:**
- System trackt: Bewerber, die 3x nachfragen, springen öfter ab
- Lernt: Proaktive Updates reduzieren Nachfragen und Absprünge
- Testet: "Ich melde mich proaktiv" vs. "Sie hören von uns" → welche Formulierung beruhigt besser?

**Feedback-Signale:**
- Bewerber zieht Bewerbung zurück → zu lange, zu unpersönlich?
- Bewerber antwortet positiv auf Zusage → Kommunikation hat funktioniert
- Bewerber fragt trotz Update nochmal → Update war unklar

---

## Pattern über alle Szenarien

| Stufe | Was passiert |
|-------|--------------|
| **0** | Gleiche Antwort für alle. Link-Wurf. |
| **1** | Erste Differenzierung nach Keywords/Regeln. Kontext wird genutzt (offenes Ticket, Bewerbungsstatus). |
| **2** | Intention UND Situation erkannt. Zwei Nutzer mit gleicher Frage bekommen unterschiedliche Antworten. |
| **3** | System lernt, was funktioniert. Wird über Zeit besser, nicht nur "eingestellt". |

**Der Sprung von 1 auf 2** ist der größte qualitative Unterschied – da beginnt echte Personalisierung.

---

## Verknüpfungen

- [[02_KNOWLEDGE/AI-Shifts/Hyperpersonalisierung/_MOC]] – Zurück zur Übersicht
- [[Implementierung]] – Technische Umsetzung der Stufen
- [[Layer-2-Intent]] – Wie Intentionserkennung funktioniert
- [[Layer-3-Context]] – Wie Kontexterkennung funktioniert

---

*Personalisierung ist kein Feature – es ist ein Reifegrad.*
