// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";

var numberChar = "0123456789";

var symbolChar = "~!@#$%^&*()_+{}<>?/\[]-=";

var passwordChar = [];

var passwordLength = 0;

var charSet = "";


// Write password to the #password input
function writePassword() {
  var password = ""
  for (var i = 0; i < passwordLength; i++) {
    password = password + charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {

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
  charSet = passwordChar.join("")
  console.log(charSet)

  writePassword()

});



