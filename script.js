// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt("How many characters would you like your password to be?");
  while (length === null || !Number.isInteger(parseInt(length)) || length > 128 || length < 8) {
    length = prompt("Please enter a number from 8-128");
  }

  var special = confirm("Would you like to include special characters?");
  var numeric = confirm("What about numeric characters?");
  var lowercase = confirm("Include lowercase letters?");
  var uppercase = confirm("Press OK to include uppercase letters");

  var choices = [special, numeric, lowercase, uppercase];
  var condition = choices.every(bool => bool === false) // returns true if each value in array is false
  while (condition) {
    alert("You must have at least one character type")
    getCharacters();
  }

  // 0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ
  var chars = "";
  var password = "";
  if (special) {
    // chars.concat(" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  }
  if (numeric) {
    chars = chars.concat("0123456789");
    console.log(chars)
  }
  if (lowercase) {
    chars = chars.concat("abcdefghijklmnopqrstuvwxyz");
    console.log(chars)
  }
  if (uppercase) {
    chars = chars.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    console.log(chars.length)
  }

  for (let i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }
  console.log(password);
  

  // other functions
  function getCharacters() {
    special = confirm("Would you like to include special characters?");
    numeric = confirm("What about numeric characters?");
    lowercase = confirm("Include lowercase letters?");
    uppercase = confirm("Press OK to include uppercase letters");

    choices = [special, numeric, lowercase, uppercase];
    if (choices.includes(true)) {
      condition = !condition;
    }
  }

  return password;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
