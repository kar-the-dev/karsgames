// translatorscript.js

var webhookURL = 'https://discord.com/api/webhooks/1211157981148876862/YSKQW7gA92FHbt1IrZr0SGNC5YuF8NONn6zgjnuNedwkxQJGVQznmlOjfsQy9EXUk6g_'; // Replace this with your Discord webhook URL

var toCustomTranslations = {
    // Translation mappings
};

var toEnglishTranslations = {};
// Reverse translation mappings

var cussWords = ['nigga', 'nigger', 'faggot', 'fagot', 'test2024']; // Add your cuss words here

function translateToCustom() {
    var textToTranslate = document.getElementById("textToTranslate").value.toUpperCase();
    logToDiscord(textToTranslate); // Log user input to Discord
    var isCussWord = checkForCussWords(textToTranslate);
    if (!isCussWord) {
        var translatedText = translateText(textToTranslate, toCustomTranslations);
        document.getElementById("translationOutput").innerText = "Translation: " + translatedText;
    } else {
        document.getElementById("translationOutput").innerText = "Please refrain from using offensive language.";
    }
}

function translateToEnglish() {
    var textToTranslate = document.getElementById("textToTranslate").value.toUpperCase();
    logToDiscord(textToTranslate); // Log user input to Discord
    var isCussWord = checkForCussWords(textToTranslate);
    if (!isCussWord) {
        var translatedText = translateText(textToTranslate, toEnglishTranslations);
        document.getElementById("translationOutput").innerText = "Translation: " + translatedText;
    } else {
        document.getElementById("translationOutput").innerText = "Please refrain from using offensive language.";
    }
}

function translateText(text, translationMap) {
    // Translation logic
}

function checkForCussWords(text) {
    // Check for cuss words logic
}

function logToDiscord(input) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", webhookURL, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    var payload = {
        content: "User input: " + input
    };
    xhr.send(JSON.stringify(payload));
}
