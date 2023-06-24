// Assignment code here
function generatePassword() {
  // Get Password Length (8-128) from user
  var passwordLength = prompt('Enter how many characters long you would like your new password to be (8 to 128)'); // sets password length to user input
  passwordLength = parseInt(passwordLength); // redefines the var initialized on line 4 to ONLY the number value of user input
  // Validate User input is a number between 8 and 128
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) { // if user input is : not a number, less than 8 chars, or more than 128...  
    passwordLength = parseInt(prompt('The length you entered is invalid. Enter a new length between 8 and 128.')); // they get this prompt
    if (!isNaN(passwordLength) && passwordLength >= 8 && passwordLength <= 128) {
      break; // all these must be true to move on
    }


  }
  confirm('Confirm the characters you would like to use for your password. For the following options, select OK to include that character set and CANCEL to exclude the character set.')
  // Get Character Set
  var selectedChar = ''; 

    // Lowercase?
    var includeLower = confirm ('Include lower case?') // converts user input to yes or no
    // Uppercase?
    // Numeric?
    // Special chars?
  
  //Validate Charset: At least one char set selected?  

  // Generate password now that length and charset is established 
  var password = '';

  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // this value is tied to the function at the top
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
