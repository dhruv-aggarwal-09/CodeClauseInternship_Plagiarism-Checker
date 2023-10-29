// Import Axios library
const axios = require('axios');

// Add an event listener to trigger plagiarism check
document.getElementById('checkButton').addEventListener('click', checkPlagiarism);

// Function to check plagiarism with the API
async function checkPlagiarism() {
    // Get the text to check from the textarea
    const textToCheck = document.getElementById('content').value;

    // Define the API request options
    const apiOptions = {
        method: 'POST',
        url: '',
        headers: {
            'content-type': '',
            'X-RapidAPI-Key': '', // Replace with your RapidAPI key
            'X-RapidAPI-Host': '',
        },
        data: {
            text: textToCheck,
        },
    };

    // Make the API request using Axios
    try {
        const response = await axios.request(apiOptions);

        // Handle the API response here
        const plagiarismResult = document.getElementById('plagiarismResult');
        const resultContainer = document.getElementById('result');
        const apiResult = response.data;
        console.log(response.data);

        if (apiResult.someCondition) {
            plagiarismResult.textContent = `Plagiarism detected! Similarity: ${apiResult.similarity.toFixed(2)}%`;
        } else {
            plagiarismResult.textContent = `No plagiarism detected. Similarity: ${apiResult.similarity.toFixed(2)}%`;
        }

        resultContainer.classList.remove('hidden');
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to hide the result
function hideResult() {
    const resultContainer = document.getElementById('result');
    resultContainer.classList.add('hidden');
}

// Add an event listener to hide the result on text input change
document.getElementById('content').addEventListener('input', hideResult);
