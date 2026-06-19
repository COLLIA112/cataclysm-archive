const params =
    new URLSearchParams(window.location.search);

const id =
    params.get("id");

fetch("data/entities.json")
.then(response => response.json())
.then(entities => {

    const entity =
        entities.find(e => e.id === id);

    const container =
        document.getElementById("entityProfile");

    container.innerHTML = `

    <div class="archive-header">

        <h1>${entity.name}</h1>

        <p class="lead">
            ${entity.classification}
        </p>

    </div>

    <div class="row g-4">

        <div class="col-lg-3">

            <div class="record-card text-center">

                <img src="${entity.image}" class="profile-image" alt="${entity.name}">

            </div>

        </div>

        <div class="col-lg-9">

            <div class="record-card">

                <h3>Entity Information</h3>

                <hr>

                <p>
                    <strong>Status:</strong>
                    ${entity.status}
                </p>

                <p>
                    <strong>Threat Level:</strong>
                    ${entity.threat}
                </p>

            </div>

        </div>

    </div>

    <div class="record-card mt-4">

        <h3>Summary</h3>

        <hr>

        <p>${entity.summary}</p>

    </div>

    <div class="record-card mt-4">

        <h3>Full Lore</h3>

        <hr>

        <p>${entity.lore}</p>

    </div>

    `;

});