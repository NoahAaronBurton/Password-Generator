// Assignment code here
function generatePassword() {
  // Get Password Length (8-128) from user
  var passwordLength = prompt('Enter how many characters long you would like your new password to be (8 to 128)'); // sets password length to user input
  passwordLength = parseInt(passwordLength); // redefines the var initialized on line 4 to ONLY the number value of user input
  // Validate User input is a number between 8 and 128
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) { // if user input is : not a number, less than 8 chars, or more than 128...  
    passwordLength = parseInt(prompt('The length you entered is invalid. Enter a new length between 8 and 128.')); // ...they get this prompt
    if (!isNaN(passwordLength) && passwordLength >= 8 && passwordLength <= 128) {
      break; // all these must be true to move on
    }

  }
  console.log('this password will be ' + passwordLength + ' characters in length');
   // char sets
   const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
   const numeric = [1,2,3,4,5,6,7,8,9,0];
   const special = ['!','@','#','$','%','^','&','*'];
  
   alert('Confirm the characters you would like to use for your password. For the following options, select OK to include that character set and CANCEL to exclude the character set.')
  // Get Character Set from user
  var selectedChars = ''; // init empty variable for char set questions

  
    // Lowercase?
    var includeLower = confirm ('Include lower case?'); // declares new variable that is equal to the choice of user input (true or false)
    // Uppercase?
    var includeUpper = confirm ('Include upper case?');
    // Numeric?
    var includeNumeric = confirm('Include numbers?');
    // Special chars?
    var includeSpecial = confirm ('Include special characters? (%$#@...)');

     //Validate Charset: At least one char set selected?  
     while (includeLower === false && includeUpper === false && includeNumeric === false && includeSpecial === false) { // if cancel is selected for all the choices...
    alert('You need to include at least one charset. Please try again.');
    // Lowercase?
    includeLower = confirm ('Include lower case?'); // redeclare the variables that are equal to the choice of user input (true or false)
    // Uppercase?
    includeUpper = confirm ('Include upper case?');
    // Numeric?
    includeNumeric = confirm('Include numbers?');
    // Special chars?
    includeSpecial = confirm ('Include special characters? (%$#@...)');
  }
  selectedChars = [includeLower,includeUpper,includeNumeric,includeSpecial]; // contains the boolean values for the charsets
  charSet= [];
  if (includeLower === true) { // if the boolean is true...
    charSet.push(lowerCase); // ...then those chars are added to the char set using the push method
  } if (includeUpper === true) {
    charSet.push(upperCase);
  } if (includeNumeric === true) {
    charSet.push(numeric);
  } if (includeSpecial === true) {
    charSet.push(special);
  }
  
  console.log('these characters will be included in the password: ' + charSet);

  // Generate password now that length and charset is established 
  var password = ''; // declare new variable for password
  // for loop 
  for (let i= 0; i < passwordLength; i++ ) {
    var randomIndex = Math.floor(Math.random() * charSet.length); // Chat GPT helped me figure out how to get a random index from an array.
    var randomCharIndex = Math.floor(Math.random() * charSet[randomIndex].length);
    password += charSet[randomIndex][randomCharIndex];
  }

  return password; // the purpose of this entire function is to return a value to the password variable
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
