const GITHUB_USERNAME = "DenizCemberlitas"

async function loadRepos() {
    const answer = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
    );
    const repos = await answer.json();
    
    const container = document.getElementById("projekte-container");

    repos.forEach(repo => {
        const card = document.createElement("div");
        card.classList.add("projekt-karte");

        card.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || "Keine Beschreibung vorhanden"}</p>
            <a href="${repo.html_url}" target="_blank">Auf GitHub ansehen →</a>
        `;

    container.appendChild(card);
    })
}
loadRepos();

function loadNav(){
    const nav = document.querySelector("nav");
    nav.innerHTML = `
        <span class="logo">Deniz</span>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html#projekte">Projekte</a></li>
            <li><a href="index.html#github">GitHub</a></li>
            <li><a href="blog.html">Homelab</a></li>
        </ul>
    `;
}

loadNav();