fetch("data/factions.json")
.then(response => response.json())
.then(factions => {

    const horsemenContainer =
        document.getElementById("horsemenContainer");

    const independentContainer =
        document.getElementById("independentContainer");

    factions.forEach(faction => {

        const card = `


        <div class="col-6 col-md-4 col-lg-2">

            <a href="faction.html?id=${faction.id}" class="text-decoration-none">

                <div class="record-card archive-card">

                    <img src="${faction.image}" class="archive-image img-fluid" alt="${faction.name}">

                    <h4>${faction.name}</h4>

                    <p class="meta-label mb-2">Domain: ${faction.domain || 'Unknown'}</p>

                    <p class="text-muted">Leader: ${faction.leader || 'Unknown'}</p>

                </div>

            </a>

        </div>

        `;

        if (faction.category === "Horsemen") {

            horsemenContainer.innerHTML += card;

        } else {

            independentContainer.innerHTML += card;

        }

    });

});