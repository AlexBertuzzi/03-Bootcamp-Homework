// Assignment Code
var generateBtn = document.querySelector("#generate");

// String of upper case characters that can be chosen to be included in the password.
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// String of lower case characters that can be chosen to be included in the password.
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";

// String of number characters that can be chosen to be included in the password.
var numberChar = "0123456789";

// String of symbol characters that can be chosen to be included in the password.
var symbolChar = "~!@#$%^&*()_+{}<>?/\[]-=";

// Empty array where the chosen character strings will be pushed too.
var passwordChar = [];

// This variable sets the password length and will be updated to a number between 8-128 via prompt.
var passwordLength = 0;

// Empty string where the strings contained in passwordChar will be joined into one string to be 
// used in writePassword().
var charSet = "";

// Write password to the #password input
function writePassword() {
  var password = ""
  // For loop where if i is less than passwordLength a random character will be choosen from the charSet inorder 
  // to generate a random password.
  for (var i = 0; i < passwordLength; i++) {
    password = password + charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  // This variable sets the generated password to a passwordText.value that will appear in the window 
  // within the #password id.
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
// When the generateBtn is clicked the following series of promps will appear allowing the user to set the 
// passwordLength and which character sets will be included in the randomly generated password.
  var wouldYouLikeANewPassword = confirm("Would you like to generate a new password?");
  if (wouldYouLikeANewPassword) {
      passwordLength = prompt("How long would you like your password? Choose a number between 8 and 128");
        if (passwordLength >= 8 && passwordLength <= 128) {
              console.log(passwordLength)        
        
              var chooseUpper = confirm("Would you like to include Upper Case Letters?");
              if (chooseUpper) {
                passwordChar.push(upperCaseChar);
              }
              var chooseLower = confirm("Would you like to include Lower Case Letters?");
              if (chooseLower) {
                passwordChar.push(lowerCaseChar);
              }
              var chooseNumber = confirm("Would you like to include Numbers?");
              if (chooseNumber) {
                passwordChar.push(numberChar);
              }
              var chooseSymbol = confirm("Would you like to include Symbols?");
              if (chooseSymbol) {
                passwordChar.push(symbolChar);
              }
        }
  }
      
  console.log(passwordChar)
  // The join function allows all the chosen strings that have been pushed to the passwordChar array to be combined
  // into a single string that is called charSet.
  charSet = passwordChar.join("")
  console.log(charSet)
  // This calls the writePassword function to run after all the prompts have been answered.
  writePassword()
});



