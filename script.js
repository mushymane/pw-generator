// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var characters = prompt("How many characters would you like your password to be?");
  // if (characters != null && Number.isInteger(parseInt(characters)) && characters <= 128 && characters >= 8) {
  //   var special = confirm("Would you like to include special characters?");
  //   var numeric = confirm("What about numeric characters?");
  //   var lowercase = confirm("Include lowercase letters?");
  //   var uppercase = confirm("Press OK to include uppercase letters");
  // } else if (characters === null) {
  //   characters = prompt("Please enter a number");
  // } else if (!Number.isInteger(parseInt(characters))) {
  //   characters = prompt("Please enter a number from 8-128");
  // } else if (characters > 128) {
  //   characters = prompt("Please enter a number less than 129");
  // } else if (characters < 8) {
  //   characters = prompt("Please enter a number greater than 7");
  // } else {
  //   console.log("error");
  // }
  while (characters === null || !Number.isInteger(parseInt(characters)) || characters > 128 || characters < 8) {
    characters = prompt("Please enter a number from 8-128");
  }
  var special = confirm("Would you like to include special characters?");
  console.log("special", special)
  var numeric = confirm("What about numeric characters?");
  console.log("num", numeric)
  var lowercase = confirm("Include lowercase letters?");
  console.log("ler", lowercase)
  var uppercase = confirm("Press OK to include uppercase letters");
  console.log("upep", uppercase);
  var choices = [special, numeric, lowercase, uppercase];
  console.log(choices)
  var condition = choices.every(bool => bool === false) // returns true if each value in array is false
  console.log(condition);
  while (condition) {
    alert("You must have at least one character type")
    getCharacters();
  }

  function getCharacters() {
    special = confirm("Would you like to include special characters?");
    console.log("special", special)
    numeric = confirm("What about numeric characters?");
    console.log("num", numeric)
    lowercase = confirm("Include lowercase letters?");
    console.log("ler", lowercase)
    uppercase = confirm("Press OK to include uppercase letters");
    console.log("upep", uppercase);
    choices = [special, numeric, lowercase, uppercase];
    console.log(choices);
    console.log(condition)
    if (choices.includes(true)) {
      condition = !condition;
      console.log(condition)
    }
  }

  // check special characters (uppercase, lowercase, numeric, special characters)
  // 
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
