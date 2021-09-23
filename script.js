// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generates a password based on user input
function generatePassword() {
  // Asks the user how long they want their password to be
  // While the user input is null, not an integer, and not in the range of 8-128 inclusive, it will ask again for a valid number
  var length = prompt("How many characters would you like your password to be?");
  while (length === null || !Number.isInteger(parseInt(length)) || length > 128 || length < 8) {
    length = prompt("Please enter a number from 8-128");
  }

  // The user will choose OK or Cancel to each of these options
  // If they chose Cancel, the variable will be assigned with false
  var special = confirm("Would you like to include special characters?");
  var numeric = confirm("What about numeric characters?");
  var lowercase = confirm("Include lowercase letters?");
  var uppercase = confirm("Press OK to include uppercase letters");

  // The user's input is stored in this array (booleans)
  var choices = [special, numeric, lowercase, uppercase];

  // Returns true if each value in array is false
  var condition = choices.every(bool => bool === false)

  // The same questions will be asked if they chose Cancel for each option
  while (condition) {
    alert("You must have at least one character type")
    getCharacters();
  }

  var chars = "";
  var password = "";

  // chars will contain these characters based on the user's choices
  if (special) {
    chars = chars.concat(" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");
    // console.log(chars);
  }
  if (numeric) {
    chars = chars.concat("0123456789");
  }
  if (lowercase) {
    chars = chars.concat("abcdefghijklmnopqrstuvwxyz");
  }
  if (uppercase) {
    chars = chars.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }

  // Generates a password based on the user's choices using randomly selected characters in the chars array
  for (let i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  

  // Other functions

  // If the user selected Cancel on each option in the first go-round they will be prompted with the same questions,
  // and it updates the variables
  function getCharacters() {
    special = confirm("Would you like to include special characters?");
    numeric = confirm("What about numeric characters?");
    lowercase = confirm("Include lowercase letters?");
    uppercase = confirm("Press OK to include uppercase letters");

    choices = [special, numeric, lowercase, uppercase];

    // If the choices array has true, negate the condition to break out of the while loop
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
