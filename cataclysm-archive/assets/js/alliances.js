fetch("data/alliances.json")
.then(response => response.json())
.then(alliances => {

    const container =
        document.getElementById("alliancesContainer");

    alliances.forEach(alliance => {

        container.innerHTML += `


    <div class="col-6 col-md-4 col-lg-2">

            <a href="alliance.html?id=${alliance.id}" class="text-decoration-none">

                <div class="record-card archive-card">

                    <img src="${alliance.image}" class="archive-image img-fluid" alt="${alliance.name}">

                    <h4>${alliance.name}</h4>

                    <p class="meta-label mb-2">Members: ${alliance.members.length}</p>

                </div>

            </a>

        </div>

        `;

    });

});