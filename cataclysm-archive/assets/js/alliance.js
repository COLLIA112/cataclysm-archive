const params =
    new URLSearchParams(window.location.search);

const id =
    params.get("id");

fetch("data/alliances.json")
.then(response => response.json())
.then(alliances => {

    const alliance =
        alliances.find(a => a.id === id);

    const container =
        document.getElementById("allianceProfile");

    if (!alliance) {

        container.innerHTML = `
            <div class="record-card">
                <h2>Alliance Not Found</h2>
            </div>
        `;

        return;
    }

    container.innerHTML = `

    <div class="archive-header">

        <h1>${alliance.name}</h1>

        <p class="lead">
            ${alliance.type}
        </p>

    </div>

    <div class="row g-4">

        <div class="col-lg-3">

            <div class="record-card text-center">

                <img src="${alliance.image}" class="profile-image" alt="${alliance.name}">

            </div>

        </div>

        <div class="col-lg-9">

            <div class="record-card">

                <h3>Alliance Information</h3>

                <hr>

                <p>
                    <strong>Member Count:</strong>
                    ${alliance.members.length}
                </p>

            </div>

        </div>

    </div>

    <div class="record-card mt-4">

        <h3>Summary</h3>

        <hr>

        <p>${alliance.summary}</p>

    </div>

<div class="record-card mt-4">

    <h3>Member Factions</h3>

    <hr>

    ${[...new Set(alliance.members.map(member => member.faction))]
        .map(faction => `<p>• ${faction}</p>`)
        .join("")}

</div>

    <div class="record-card mt-4">

        <h3>Members</h3>

        <hr>

        ${alliance.members
    .map(member => `
        <p>
            • ${member.name}
            <span class="text-muted">
                [${member.faction}]
            </span>
        </p>
    `)
    .join("")}

    </div>

    <div class="record-card mt-4">

        <h3>Full Lore</h3>

        <hr>

      <div>${alliance.lore}</div>
    </div>

    `;

});