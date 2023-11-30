// Note to Kar: I think we should encrypt this password using Crypto.JS
let password = "karsgamesdevportal";

// Create a promise that shall be fulfilled when the correct password has been entered.
async function tryPassword() {
  let passwordProtect = new Promise((resolve, reject) => {
    let pass = await prompt("Enter the Developer Portal password to access this page.");
    if(pass == password) {
      alert("Access Granted");
      resolve("Access Granted.");
    } else {
      reject("Incorrect Password.");
    }
  }).catch(err => {
    alert(err);
    tryPassword();
  });
}
tryPassword();
