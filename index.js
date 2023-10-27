// script.js

document.getElementById('checkButton').addEventListener('click', checkPlagiarism);

function checkPlagiarism() {
    const textToCheck = document.getElementById('content').value;
    const referenceText = "This is a sample reference text to check for plagiarism.";

    // Function to calculate Jaccard Similarity
    function jaccardSimilarity(text1, text2) {
        const set1 = new Set(text1.split(' '));
        const set2 = new Set(text2.split(' '));

        const intersection = new Set([...set1].filter(x => set2.has(x)));
        const union = new Set([...set1, ...set2]);

        return (intersection.size / union.size) * 100;
    }

    const similarityPercentage = jaccardSimilarity(textToCheck, referenceText);

    const plagiarismResult = document.getElementById('plagiarismResult');
    const resultContainer = document.getElementById('result');

    if (similarityPercentage >= 40) {
        plagiarismResult.textContent = `Plagiarism detected! Similarity: ${similarityPercentage.toFixed(2)}%`;
    } else {
        plagiarismResult.textContent = `No plagiarism detected. Similarity: ${similarityPercentage.toFixed(2)}%`;
    }

    resultContainer.classList.remove('hidden');
}

function hideResult() {
    const resultContainer = document.getElementById('result');
    resultContainer.classList.add('hidden');
}

// Hide the result on text input change
document.getElementById('content').addEventListener('input', hideResult);

