// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var characters = prompt("How many characters would you like your password to be?");
  checkCharacters(characters);
  console.log(characters)
  // check special characters (uppercase, lowercase, numeric, special characters)
  // 
}

function checkCharacters(numCharacters) {
  if (numCharacters != null && Number.isInteger(numCharacters) && numCharacters <= 128 && numCharacters >= 8) {
    console.log("good", numCharacters)
      return numCharacters;
  } else {
    let number = prompt("Please enter a number");
    console.log("error", number)
    checkCharacters(number);
  }
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
