const params =
    new URLSearchParams(window.location.search);

const id =
    params.get("id");

fetch("data/eras.json")
.then(response => response.json())
.then(eras => {

    const era =
        eras.find(e => e.id === id);

    const container =
        document.getElementById("eraContainer");

    if (!era) {

        container.innerHTML = `

        <div class="record-card">

            <h2>Chronicle Not Found</h2>

            <p>
                The requested era does not exist.
            </p>

        </div>

        `;

        return;
    }

    container.innerHTML = `

    <a href="timeline.html" class="back-link">← BACK TO TIMELINE</a>

    <div class="archive-header era-header mt-4">
        <h1>${era.title}</h1>
        <p class="era-quote">"${era.quote}"</p>
    </div>

<div class="text-center mb-4">
    <div class="archive-tag">
        ARCHIVED CHRONICLE
    </div>
</div>

    <div class="record-card chronicle-card mt-2">
        <div class="chronicle-content">
            ${era.content}
        </div>
    </div>

    <div class="chronicle-end">
    END OF ARCHIVE ENTRY
</div>


    `;

});