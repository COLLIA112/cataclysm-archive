fetch("data/records.json")
.then(response => response.json())
.then(records => {

    const container =
        document.getElementById("recordsContainer");

    records.forEach(record => {

        container.innerHTML += `
        
        <div class="col-6 col-md-4 col-lg-2">
            <a href="record.html?id=${record.id}" class="text-decoration-none">

                <div class="record-card archive-card">

                    <img src="${record.image}" class="archive-image img-fluid" alt="${record.title}">

                    <h4>${record.title}</h4>

                    <p class="meta-label mb-2">Type: ${record.type}</p>
                    <p class="text-muted">Era: ${record.era}</p>

                </div>

            </a>

        </div>

        `;
    });

});