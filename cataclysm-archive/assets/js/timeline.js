fetch("data/eras.json")
.then(response => response.json())
.then(eras => {

    const container =
        document.getElementById("timelineContainer");

    container.innerHTML = "";

eras.forEach((era, index) => {

        container.innerHTML += `

        <div class="col-12">

            <a
            href="era.html?id=${era.id}"
            class="text-decoration-none">

              <div class="record-card era-card">

    <div class="era-number">
        ERA ${index + 1}
    </div>

    <h2 class="timeline-title">
        ${era.title}
    </h2>

<div class="timeline-era">
    "${era.quote || ""}"
</div>
    <p>
        ${era.summary}
    </p>

    <div class="archive-link">
        OPEN CHRONICLE →
    </div>

</div>

            </a>

        </div>

        `;

    });

});