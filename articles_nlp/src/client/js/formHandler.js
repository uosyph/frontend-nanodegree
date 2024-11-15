import { isValidURI } from './uriValidator.js';

document.getElementById("article_url_form").onsubmit = async function (event) {
    event.preventDefault();

    const uri = document.getElementById("URI").value;

    // Validate URI
    if (!isValidURI(uri)) {
        document.getElementById("error").innerText = "Please enter a valid URI.";
        document.getElementById("error").style.display = "block";
        return;
    }

    // Show loader and hide previous results or errors
    document.getElementById("loader").style.display = "block";
    document.getElementById("error").style.display = "none";
    document.getElementById("results").style.display = "none";

    try {
        const response = await fetch('/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ URI: uri })
        });

        if (!response.ok) throw new Error("Failed to fetch analysis");

        const data = await response.json();
        document.getElementById("agreement").innerText = `Agreement: ${data.sample.agreement}`;
        document.getElementById("subjectivity").innerText = `Subjectivity: ${data.sample.subjectivity}`;
        document.getElementById("confidence").innerText = `Confidence: ${data.sample.confidence}`;
        document.getElementById("irony").innerText = `Irony: ${data.sample.irony}`;
        document.getElementById("score_tag").innerText = `Score Tag: ${data.sample.score_tag}`;

        document.getElementById("loader").style.display = "none";
        document.getElementById("results").style.display = "block";
    }
    catch (error) {
        document.getElementById("error").innerText = "Error: " + error.message;
        document.getElementById("error").style.display = "block";
        document.getElementById("loader").style.display = "none";
    }
};
