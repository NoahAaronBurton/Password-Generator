// Assignment code here
function generatePassword() {
  // Get Password Length (8-128) to start
  var passwordLength = prompt('Enter how many characters long you would like your new password to be (8 to 128)');
  console.log('This password will be ' + parseInt(passwordLength) + ' characters in length');
  passwordLength = parseInt(passwordLength);
  // Validate User input in a number between 8 and 128

  // Get Character Set
    // Lowercase?
    // Uppercase?
    // Numeric?
    // Special chars?
  
  //Validate Charset: At least one char set selected?  
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
