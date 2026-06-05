# Portfolio – Deniz Cemberlitas

Meine persönliche Portfolio-Website, gebaut mit **HTML, CSS und Vanilla JavaScript** – ohne Frameworks, ohne Build-Tools.

🔗 **Live:** [denizcemberlitas.github.io/portfolio](https://denizcemberlitas.github.io/portfolio)

---

## 📄 Seiten

| Seite | Beschreibung |
|---|---|
| `index.html` | Startseite mit Kurzvorstellung, Projektvorschau & GitHub Aktivitäts-Graph |
| `projekte.html` | Übersicht aller Entwicklungsprojekte |
| `blog.html` | Homelab Blog – Dokumentation eigener Infrastruktur-Projekte |

---

## 🛠️ Projekte

### 📦 Logistik Web App *(Juni 2026)*
Simpel gehaltene Lagerverwaltungs-/Logistik-Web-App.  
**Stack:** Node.js, Express, SQLite (`better-sqlite3`), Vanilla JS/HTML/CSS

### 🎲 Dice Game *(April 2026)*
Würfelspiel mit Roguelike-Boni, gebaut in Godot Engine.  
**Stack:** Godot 4, GDScript

### 🌐 Portfolio Website *(März 2026)*
Diese Seite – mit GitHub API Integration, Contribution Graph und Homelab Blog.  
**Stack:** HTML, CSS, Vanilla JavaScript, GitHub API

### 🛒 Shopping List Web App *(2025)*
Web-App zur Verwaltung von Einkaufslisten – erstes eigenes JavaScript-Projekt.  
**Stack:** Firebase v10 (Firestore, Auth), Vanilla JS, localStorage

---

## 🖥️ Homelab Blog

| Datum | Post |
|---|---|
| Mai 2026 | Home Assistant Setup auf Proxmox |
| Mai 2026 | AMP Game Panel Setup auf Proxmox |
| März 2026 | Proxmox Setup – Homelab Grundgerüst |

---

## 🎨 Farbpalette

Dark Theme mit Neon-Akzenten, alle Farben über CSS-Variablen in `:root` verwaltet.

| Variable | Hex | Verwendung |
|---|---|---|
| `--bg` | `#000000` | Haupthintergrund |
| `--bg-secondary` | `#2D2D2D` | Sekundärer Hintergrund |
| `--bg-tertiary` | `#1A1A1A` | Tertiärer Hintergrund |
| `--text` | `#F0F0F0` | Haupttext |
| `--text-secondary` | `#AAAAAA` | Sekundärtext |
| `--accent` | `#2CFF05` | Primäre Akzentfarbe (Neon-Grün) |
| `--accent-hover` | `#25D904` | Hover-Zustand Akzent |
| `--accent-2` | `#BF00FF` | Sekundäre Akzentfarbe (Lila) |
| `--danger` | `#FF3B30` | Fehlermeldungen / Warnung |

---

## 🚀 Tech-Stack

| Bereich | Technologie |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Hosting | GitHub Pages |
| Externe APIs | GitHub API (Contribution Graph) |

---

## 📋 Lokal ausführen

Da es sich um statische Dateien handelt, reicht ein einfacher lokaler Webserver:

```bash
# Mit Python
python3 -m http.server 8080

# Oder mit Node.js
npx serve .
```

Dann im Browser: `http://localhost:8080`

---

## 📁 Projektstruktur

```
portfolio/
├── index.html
├── projekte.html
├── blog.html
├── style.css
├── projekt-posts/
│   ├── logistik-app.html
│   ├── dice-game.html
│   ├── protfolio.html
│   └── shopping-app.html
└── posts/
    ├── proxmox-ha-setup.html
    ├── proxmox-amp-setup.html
    └── proxmox-setup.html
```

---

## 📬 Kontakt

- **GitHub:** [github.com/DenizCemberlitas](https://github.com/DenizCemberlitas)
- **E-Mail:** denizc.317@outlook.com

---

*Deniz Cemberlitas · Medieninformatik (BHT Berlin) · Angehender Fachinformatiker Anwendungsentwicklung*
