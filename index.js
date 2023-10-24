const plagiarismForm = document.getElementById('plagiarismForm');

plagiarismForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const form = this;
    const formData = new FormData(form);

    // Simulate a basic plagiarism check (we can replace this with our own logic)
    const textToCheck = formData.get('content') || '';
    const result = textToCheck.toLowerCase().includes('plagiarized content') ? 'Plagiarism detected' : 'No plagiarism detected';

    // Display the result
    const resultContainer = document.getElementById('result');
    const plagiarismResult = document.getElementById('plagiarismResult');

    // Show the result container
    resultContainer.classList.remove('hidden');

});

function hideResult() {
    const resultContainer = document.getElementById('result');
    resultContainer.classList.add('hidden');
}

// Hide the result on the form input change
document.getElementById('file').addEventListener('input', hideResult);
document.getElementById('content').addEventListener('input', hideResult);
