const params =
    new URLSearchParams(window.location.search);

const id =
    params.get("id");

fetch("data/individuals.json")
    .then(response => response.json())
    .then(individuals => {

        const person =
            individuals.find(p => p.id === id);

        const container =
            document.getElementById("individualProfile");

        if (!person) {

            container.innerHTML = `
                <div class="alert alert-danger">
                    Character not found.
                </div>
            `;

            return;
        }

        container.innerHTML = `

        <div class="archive-header">

            <h1>${person.name}</h1>

            <p class="lead">
                ${person.classification || "Personnel"}
            </p>

        </div>

        <div class="row g-4">

            <div class="col-lg-3">

                <div class="record-card text-center">

                    <img
                    src="${person.image}"
                    class="profile-image"
                    alt="${person.name}">

                </div>

            </div>

            <div class="col-lg-9">

                <div class="record-card">

                    <h3>Dossier Information</h3>

                    <hr>

                    <div class="row">

                        <div class="col-md-6">

                            <p><strong>Alias:</strong> ${person.alias || "Unknown"}</p>

                            <p><strong>Status:</strong> ${person.status}</p>

                        </div>

                        <div class="col-md-6">

                            <p><strong>Faction:</strong> ${person.faction}</p>

                            <p><strong>Role:</strong> ${person.role}</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

        <div class="record-card mt-4">

            <h3>Summary</h3>

            <hr>

            <p>${person.summary}</p>

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

            <p class="text-muted">
                No lore document attached.
            </p>

        </div>

        `;
    })
    .catch(error => {

        console.error(error);

        document.getElementById("individualProfile").innerHTML = `
            <div class="alert alert-danger">
                Failed to load character data.
            </div>
        `;
    });