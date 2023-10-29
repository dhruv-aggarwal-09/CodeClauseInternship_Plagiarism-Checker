const textInput = document.getElementById("content")
const plagiarismResult = document.getElementById("plagiarismResult")
const loaderDiv = document.getElementById("loaderDiv")
const fileInput = document.getElementById("fileInput")


function checkPlagiarism() {
    plagiarismResult.innerText = `--`
    loaderDiv.classList.remove("hidden")
    $.ajax({
        type: "POST",
        url: "https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism",
        headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": "bf1b57eae3msh1e94019291e6e47p1dba65jsndab9088dbea4",
            "X-RapidAPI-Host": "plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com",
        },
        data: JSON.stringify({
            text: textInput.value.trim(),
            language: "en",
            includeCitations: false,
            scrapeSources: false,
        }),
        success: function (data) {
            loaderDiv.classList.add("hidden")
            plagiarismResult.innerText = `Plagiarism: ${data['percentPlagiarism']}%`
        },
        error: function (error) {
            loaderDiv.classList.add("hidden")
            alert("Error Occured !")
            // console.error(error);
        }
    });
}

function openReadFile(){
    fileInput.click()
}
fileInput.addEventListener("change", function () {
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
        const reader = new FileReader();

        reader.onload = function (event) {
            const fileContent = event.target.result;
            textInput.textContent = fileContent;
        };

        reader.readAsText(selectedFile);
    } else {
        textInput.textContent = "No file selected";
    }
});

// checkPlagiarism()