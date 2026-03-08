const GITHUB_USERNAME = "DenizCemberlitas"

async function loadRepos() {
    const answer = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
    );
    const repos = await answer.json();
    
    const container = document.getElementById("projekte-container");

    repos.forEach(repo => {
        const card = document.createElement("div");
        card.classList.add("projekt-karte", "scroll-hidden");

        card.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || "Keine Beschreibung vorhanden"}</p>
            <a href="${repo.html_url}" target="_blank">Auf GitHub ansehen →</a>
        `;

    container.appendChild(card);
    })
}
loadRepos();

// GitHub Contribution Graph
async function ladeContributions() {
  const antwort = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
  );
  const daten = await antwort.json();

  const chart = document.getElementById("github-chart");
  const monateDiv = document.getElementById("github-monate");
  const tooltip = document.getElementById("github-tooltip");

  const wochen = [];
  let aktuelleWoche = [];

  daten.contributions.forEach((tag) => {
    aktuelleWoche.push(tag);
    if (aktuelleWoche.length === 7) {
      wochen.push(aktuelleWoche);
      aktuelleWoche = [];
    }
  });

  if (aktuelleWoche.length > 0) {
    wochen.push(aktuelleWoche);
  }

  let letzterMonat = "";
  let monatsStartIndex = 0;

  wochen.forEach((woche, index) => {
    const monat = new Date(woche[0].date).toLocaleString("de-DE", { month: "short" });

    if (monat !== letzterMonat) {
      if (letzterMonat !== "") {
        const anzahlWochen = index - monatsStartIndex;
        const label = document.createElement("div");
        label.classList.add("monat-label");
        label.style.width = (anzahlWochen * 15) + "px";
        label.textContent = letzterMonat;
        monateDiv.appendChild(label);
      }
      letzterMonat = monat;
      monatsStartIndex = index;
    }
  });

  const letzteAnzahl = wochen.length - monatsStartIndex;
  const letztesLabel = document.createElement("div");
  letztesLabel.classList.add("monat-label");
  letztesLabel.style.width = (letzteAnzahl * 15) + "px";
  letztesLabel.textContent = letzterMonat;
  monateDiv.appendChild(letztesLabel);
  
  wochen.forEach((woche) => {
    const wochenDiv = document.createElement("div");
    wochenDiv.classList.add("chart-woche");

    woche.forEach((tag) => {
      const tagDiv = document.createElement("div");
      tagDiv.classList.add("chart-tag", `level-${tag.level}`);

      tagDiv.addEventListener("mousemove", (e) => {
        tooltip.style.display = "block";
        tooltip.style.left = e.clientX + 12 + "px";
        tooltip.style.top = e.clientY + 12 + "px";
        tooltip.textContent = `${tag.count} Contributions – ${tag.date}`;
      });

      tagDiv.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
      });

      wochenDiv.appendChild(tagDiv);
    });

    chart.appendChild(wochenDiv);
  });
}

ladeContributions();

function loadNav(){
    const inSubfolder = window.location.pathname.includes("/posts/") || 
                        window.location.pathname.includes("/projekt-posts/");
    const basis = inSubfolder ? "../" : "";

    const nav = document.querySelector("nav");
    nav.innerHTML = `
        <span class="logo">Deniz</span>
        <ul>
            <li><a href="${basis}index.html">Home</a></li>
            <li><a href="${basis}projekte.html">Projekte</a></li>
            <li><a href="${basis}about.html">Über mich</a></li>
            <li><a href="${basis}blog.html">Homelab</a></li>
        </ul>
    `;
}

loadNav();

// === Scroll-Animationen ===
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-visible");
        observer.unobserve(entry.target); // einmal reingeglitten → fertig
      }
    });
  }, {
    threshold: 0.1
  });

  // Alle animierbaren Elemente beobachten
  document.querySelectorAll(
    "section, .post-karte, .projekt-karte, article h2, .about-section, .skill-tag"
  ).forEach(el => {
    el.classList.add("scroll-hidden");
    observer.observe(el);
  });
}

// Erst nach dem Laden starten damit Repo-Karten auch erfasst werden
window.addEventListener("load", initScrollAnimations);