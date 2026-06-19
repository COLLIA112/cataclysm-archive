fetch("data/entities.json")
.then(response => response.json())
.then(entities => {

    const container =
        document.getElementById("entitiesContainer");

    entities.forEach(entity => {

        container.innerHTML += `


        <div class="col-6 col-md-4 col-lg-2">

            <a href="entity.html?id=${entity.id}" class="text-decoration-none">

                <div class="record-card archive-card">

                    <img src="${entity.image}" class="archive-image img-fluid" alt="${entity.name}">

                    <h4>${entity.name}</h4>

                    <p class="meta-label mb-2">Status: ${entity.status || 'Unknown'}</p>

                </div>

            </a>

        </div>

        `;

    });

});