function getUrlParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

function showNotFound() {
    document.getElementById("recordNotFound").classList.remove("d-none");
    document.getElementById("recordContent").classList.add("d-none");
    document.getElementById("recordTitle").textContent = "Record Not Found";
    document.getElementById("recordType").textContent = "Please check the URL parameter.";
}

const recordId = getUrlParameter("id");

if (!recordId) {
    showNotFound();
} else {
    fetch("data/records.json")
        .then(response => response.json())
        .then(records => {
            const record = records.find(item => item.id === recordId);

            if (!record) {
                showNotFound();
                return;
            }

            document.getElementById("recordTitle").textContent = record.title;
            document.getElementById("recordType").textContent = record.type || "Record";
            document.getElementById("recordDate").textContent = record.date || "Unknown";
            document.getElementById("recordEra").textContent = record.era || "Unknown Era";
            document.getElementById("recordClassification").textContent = record.classification || "Unclassified";
            document.getElementById("recordEraSummary").textContent = record.era || "Unknown Era";
            document.getElementById("recordClassificationSummary").textContent = record.classification || "Unclassified";
            document.getElementById("recordSummary").textContent = record.summary || "No summary available.";

            const recordImage = document.getElementById("recordImage");
            recordImage.src = record.image || "assets/images/new2.png";
            document.getElementById("recordImageLink").href =
    record.image;
            recordImage.alt = `${record.title} image`;

            document.getElementById("recordContent").classList.remove("d-none");
            document.getElementById("recordNotFound").classList.add("d-none");
        })
        .catch(error => {
            console.error("Failed to load records.json", error);
            showNotFound();
        });
}
