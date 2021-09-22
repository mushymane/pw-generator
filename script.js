// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var characters = prompt("How many characters would you like your password to be?");
  var isInt = Number.isInteger(parseInt(characters));
  console.log(isInt);
  console.log(characters)
  if (characters != null && Number.isInteger(parseInt(characters)) && characters <= 128 && characters >= 8) {
    var special = confirm("Would you like to include special characters?");
    var numeric = confirm("What about numeric characters?");
    var lowercase = confirm("Include lowercase letters?");
    var uppercase = confirm("Press OK to include uppercase letters");
  } else if (characters === null) {
    characters = prompt("Please enter a number");
  } else if (Number.isInteger(characters) === false) {
    characters = prompt("Please enter a number from 8-128");
  } else if (characters > 128) {
    characters = prompt("Please enter a number less than 129");
  } else if (characters < 8) {
    characters = prompt("Please enter a number greater than 7");
  } else {
    console.log("error");
  }
  // while (characters == null || !Number.isInteger(characters) || characters > 128 || characters < 8) {
  //   characters = prompt("Please enter a number from 8-128");
  // }
  var special = confirm("Would you like to include special characters?");
  var numeric = confirm("What about numeric characters?");
  var lowercase = confirm("Include lowercase letters?");
  var uppercase = confirm("Press OK to include uppercase letters");
  var choices = [special, numeric, lowercase, uppercase];
  // if (choices.includes(false)) {

  // }

  // check special characters (uppercase, lowercase, numeric, special characters)
  // 
}

function checkCharacters(numCharacters) {

  // if (numCharacters != null && Number.isInteger(numCharacters) && numCharacters <= 128 && numCharacters >= 8) {
  //   console.log("good", numCharacters)
  //     return numCharacters;
  // } else {
  //   let number = prompt("Please enter a number");
  //   console.log("error", number)
  //   checkCharacters(number);
  // }
    // if (numCharacters <= 128 && numCharacters >= 8) {
    //   console.log("good", numCharacters)
    //   return numCharacters;
    // } else {
    //   let number = prompt("Please enter a number");
    //   console.log("error", number)
    //   checkCharacters(number);
    // }
  // } else {
  //   let number = prompt("Please enter a number");
  //   console.log("error", number)
  //   checkCharacters(number);
  // }
  // return;
}

// function 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
