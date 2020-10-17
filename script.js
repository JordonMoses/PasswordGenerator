// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numeric = ["O", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specChar = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
let masterArray = lowercase.concat(uppercase, numeric, specChar);

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  let charNum = prompt("How many characters in your password?");

// Loops if characters are les than 8 and more than 128 (Not working)
  while(charNum < 8 || charNum > 128) {
    alert("Password length must be 8-128 characters");
    charNum = prompt("How many characters in your password?");{
      if (charNum >= 8 && charNum <= 128) {
        break;
      }
    }
  }

  let lower = confirm("Do you want lowercase letters?");
  let upper = confirm("Do you want uppercase letters?");
  let numbers = confirm("Do you want numbers?");
  let char = confirm("Do you want special characters?");

// Loops if user selects no character type ()
  while(lower === false && upper === false && numbers === false && char === false) {
    alert("Password must include at least one character type");
    let lower = confirm("Do you want lowercase letters?");
    let upper = confirm("Do you want uppercase letters?");
    let numbers = confirm("Do you want numbers?");
    let char = confirm("Do you want special characters?");
    if(lower === true || upper === true || numbers === true || char === true){
      break;
    } 
  }

 

}



