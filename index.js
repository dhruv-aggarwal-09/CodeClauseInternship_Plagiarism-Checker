document.getElementById('checkButton').addEventListener('click', checkPlagiarism);

function checkPlagiarism() {
    const textToCheck = document.getElementById('content').value;

    // Define the API request options
    const apiOptions = {
        method: 'POST',
        url: 'https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '264d06ac7emsh7c71bc369c3faf1p1406b4jsn7a7b79086b73', // Replace with your RapidAPI key
            'X-RapidAPI-Host': 'plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com'
        },
        data: {
            text: textToCheck,
            language: 'en',
            includeCitations: false,
            scrapeSources: false
        }
    };

    // Make the API request using Axios
    axios.request(apiOptions)
        .then(response => {
            // Handle the API response here
            const plagiarismResult = document.getElementById('plagiarismResult');
            const resultContainer = document.getElementById('result');
            const apiResult = response.data; // The response from the plagiarism checker API

            if (apiResult.someCondition) {
                plagiarismResult.textContent = `Plagiarism detected! Similarity: ${apiResult.similarity.toFixed(2)}%`;
            } else {
                plagiarismResult.textContent = `No plagiarism detected. Similarity: ${apiResult.similarity.toFixed(2)}%`;
            }

            resultContainer.classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function hideResult() {
    const resultContainer = document.getElementById('result');
    resultContainer.classList.add('hidden');
}

// Hide the result on text input change
document.getElementById('content').addEventListener('input', hideResult);
