//jshint esversion: 11
//noprotect

const secretKey = "jxFdA4gFaj48aijsdfj94jifjoauhsy78ijhgtfdsaif9Adfah8hfJDasd";

function encryptData(data) {
  const jsonStr = JSON.stringify(data);
  const encrypted = CryptoJS.AES.encrypt(jsonStr, secretKey).toString();
  alert("This is your key: " + secretKey);
  return encrypted;
}

function decryptData(encryptedData) {
  const decrypted = CryptoJS.AES.decrypt(encryptedData, secretKey).toString(
    CryptoJS.enc.Utf8
  );
  const jsonData = JSON.parse(decrypted);
  return jsonData;
}

let attempts = 0;
let truePass =
  "U2FsdGVkX18NOc5GaleAkirHbT73lPPVmDFrVdbsKfYI9yzlnUQXosT0qh7AQXlE";
const tryPassword = async () => {
  let pass = await prompt("Please enter the password to continue.");

  while (pass !== decryptData(truePass)) {
    pass = await prompt("Incorrect password, try again.");
    attempts++;
    if (attempts >= 3) {
      break;
    }
  }

  if (pass == decryptData(truePass)) {
    alert("Correct password, you may continue.");
  } else {
    alert("Incorrect password entered too many times. Please try again later.");
  }
};

tryPassword();
