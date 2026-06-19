const params =
    new URLSearchParams(window.location.search);

const id =
    params.get("id");

fetch("data/factions.json")
.then(response => response.json())
.then(factions => {

    const faction =
        factions.find(f => f.id === id);

    const container =
        document.getElementById("factionProfile");

    if (!faction) {

        container.innerHTML = `
            <div class="record-card">
                <h2>Faction Not Found</h2>
                <p>The requested faction does not exist.</p>
            </div>
        `;

        return;
    }

    container.innerHTML = `

    <div class="archive-header">

        <h1>${faction.name}</h1>

        <p class="lead">
            ${faction.category}
        </p>

    </div>

    <div class="row g-4">

        <div class="col-lg-3">

            <div class="record-card text-center">

                <img
                src="${faction.image}"
                class="profile-image img-fluid"
                alt="${faction.name}">

            </div>

        </div>

        <div class="col-lg-9">

            <div class="record-card">

                <h3>Faction Information</h3>

                <hr>

                <div class="row">

                    <div class="col-md-6">

                        <p>
                            <strong>Category:</strong>
                            ${faction.category}
                        </p>

                        <p>
                            <strong>Leader:</strong>
                            ${faction.leader || "None"}
                        </p>

                    </div>

                    <div class="col-md-6">

                        <p>
                            <strong>Domain:</strong>
                            ${faction.domain || "N/A"}
                        </p>

                        <p>
                            <strong>Status:</strong>
                            ${faction.specialStatus || "Active"}
                        </p>

                    </div>

                </div>

            </div>

        </div>

    </div>

    <div class="record-card mt-4">

        <h3>Summary</h3>

        <hr>

        <p class="faction-summary">
            ${faction.summary}
        </p>

    </div>

    <div class="record-card mt-4">

        <h3>Members</h3>

        <hr>

        ${faction.members
            .map(member => `<p>• ${member}</p>`)
            .join("")}

    </div>

    <div class="record-card mt-4">

        <h3>Related Records</h3>

        <hr>

        <p class="text-muted">
            No linked records yet.
        </p>

    </div>

    <div class="record-card mt-4">

        <h3>Full Lore</h3>

        <hr>

        <p>
            ${faction.lore}
        </p>

    </div>

    `;
})
.catch(error => {

    console.error(error);

    document.getElementById("factionProfile").innerHTML = `
        <div class="record-card">
            <h2>Error Loading Faction</h2>
            <p>Check factions.json and faction.js.</p>
        </div>
    `;
});