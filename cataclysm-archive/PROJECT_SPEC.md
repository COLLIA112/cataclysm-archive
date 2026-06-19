# Cataclysm Archive

## Project Overview

Cataclysm Archive is a lore archive website documenting the complete history of the Cataclysm SMP.

The site serves as a historical database containing characters, factions, alliances, records, entities, and timeline events.

The design should resemble a dark historical archive rather than a modern social platform.

---

## Theme

Dark Historical Archive

Visual Inspiration:

* SCP Foundation Archives
* Historical Dossiers
* Government Records
* Library Archives

Atmosphere:

* Mysterious
* Professional
* Minimalist
* Lore-focused

---

## Technical Information

Framework:

* Bootstrap 5

Hosting:

* Cloudflare Pages

Architecture:

* Static Site
* JSON Driven
* No Backend

---

## Story Eras

1. The Garden
2. The Hunt
3. The Fracture
4. The Finale

---

## Main Navigation

Home

Timeline

Records

Archives

* Individuals
* Factions
* Alliances
* Entities

---

## Current Features

Implemented:

* Home Page
* Timeline Page
* Records Page
* Record Dossier Page
* Individuals Page
* Individual Dossier Page
* Factions Page
* Faction Dossier Page
* Alliances Page
* Alliance Dossier Page
* Entities Page
* Entity Dossier Page

---

## Factions

Horsemen Factions:

* Envy
* Wrath
* Greed
* Pride

Independent Groups:

* Aficionados

Notes:

* Aficionados is not a Horsemen faction.
* Aficionados exists outside the main lore structure.
* Aficionados uses special statuses instead of domains.

---

## Alliances

### The Lushers

Type:
Coalition

Description:
A coalition composed of members originating from different factions.

Notes:

* Not a faction.
* Not a military alliance.
* Does not have a leader.
* Members retain their original faction affiliations.

Member Format:

{
"name": "Toru__",
"faction": "Envy"
}

---

## Data Structure

Data is stored in JSON files inside:

data/

Current JSON files:

* home.json
* timeline.json
* records.json
* individuals.json
* factions.json
* alliances.json
* entities.json

---

## Design Requirements

Responsive:

* Mobile
* Tablet
* Desktop

Target Layout:

Desktop:

* 6 cards per row

Tablet:

* 3 cards per row

Mobile:

* 2 cards per row

---

## Shared Components

Archive Header

Record Card

Profile Image

Meta Pill

Archive Divider

Back Button

Navigation Bar

---

## Site Icon

Use:

assets/images/icon.png

Apply favicon to all pages.

---

## Cleanup Priorities

High Priority:

* Standardize all navbars
* Add consistent back buttons
* Improve responsive layouts
* Reduce oversized cards
* Implement hover effects
* Implement archive styling
* Remove duplicated CSS
* Improve consistency between dossier pages

Medium Priority:

* Connected records
* Search functionality

Low Priority:

* Additional visual effects

---

## Rules

Do NOT redesign the website.

Do NOT change existing JSON schemas unless necessary.

Do NOT add lore content.

Do NOT invent characters.

Do NOT invent factions.

Focus on consistency, responsiveness, maintainability, and user experience.

The objective is to prepare the archive for actual lore writing.
