fetch("data/home.json")
  .then(response => response.json())
  .then(data => {

    document.getElementById("currentEra").textContent =
      data.currentEra || "Unknown";

    document.getElementById("latestEvent").textContent =
      data.latestEvent || "—";

    document.getElementById("latestPublication").textContent =
      data.latestPublication || "—";

    // Counts
    const factionsEl = document.getElementById("factionsCount");
    const alliancesEl = document.getElementById("alliancesCount");
    const entitiesEl = document.getElementById("entitiesCount");

    if (factionsEl) factionsEl.textContent = (data.factions ?? 0);
    if (alliancesEl) alliancesEl.textContent = (data.alliances ?? 0);
    if (entitiesEl) entitiesEl.textContent = (data.entities ?? 0);

  })
  .catch(error => {
    console.error("Failed to load home.json", error);
  });

// Load eras for homepage and archive excerpt
fetch("data/eras.json")
  .then(response => response.json())
  .then(eras => {

    const container = document.getElementById("erasContainer");
    const excerptQuoteEl = document.getElementById("archiveExcerptQuote");
    const excerptAuthorEl = document.getElementById("archiveExcerptAuthor");

    if (container) {
      const order = ["prelude", "garden", "hunt", "fracture", "finale"];

      order.forEach(id => {
        const era = eras.find(e => e.id === id);
        if (!era) return;

        container.innerHTML += `
          <div class="col-12 col-sm-6 col-lg-3">
            <a href="era.html?id=${era.id}" class="text-decoration-none">
              <div class="record-card archive-card">
                <h4>${era.title}</h4>
                <p class="meta-label">${era.quote}</p>
                <p class="text-muted">${era.summary}</p>
              </div>
            </a>
          </div>
        `;
      });
    }

    // Archive excerpt: prefer 'hunt' if present
    const preferred = eras.find(e => e.id === 'hunt') || eras[0];
    if (preferred && excerptQuoteEl) {
      excerptQuoteEl.textContent = `"${preferred.quote}"`;
    }
    if (preferred && excerptAuthorEl) {
      excerptAuthorEl.textContent = preferred.author ? `— ${preferred.author}` : '';
    }

  })
  .catch(error => {
    console.error('Failed to load eras.json', error);
  });