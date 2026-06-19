fetch("data/individuals.json")
.then(response => response.json())
.then(individuals => {

    const container =
        document.getElementById("individualsContainer");

    individuals.forEach(person => {

        container.innerHTML += `


    <div class="col-6 col-md-4 col-lg-2">

            <a
            href="individual.html?id=${person.id}"
            class="text-decoration-none">

                <div class="record-card individual-card">


                    <img src="${person.image}" class="individual-image img-fluid" alt="${person.name}">

                    <h4 class="individual-name">
                        ${person.name}
                    </h4>

                   <p>
    Status:
    <span class="status-${person.status.toLowerCase()}">
        ${person.status}
    </span>
</p>

                    <p>${person.faction}</p>

                    <hr>

<p class="text-muted">
    VIEW DOSSIER →
</p>

                </div>

            </a>

        </div>

        `;

    });

});