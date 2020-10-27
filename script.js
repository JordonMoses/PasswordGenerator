// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numeric = ["O", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialChar = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
let masterArray = []

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  masterArray = []
  let charNum = prompt("How many characters in your password?");
  console.log(charNum)
  // Loops if characters are les than 8 and more than 128 (while loop not working until if and break statements added)
  while (charNum < 8 || charNum > 128 || isNaN(charNum)) {
    alert("Password length must be 8-128 characters(enter a number)");
    charNum = prompt("How many characters in your password?"); { // Can still type text and move forward
    }
  }

  // Password character types
  let lower = confirm("Do you want lowercase letters?");
  let upper = confirm("Do you want uppercase letters?");
  let numbers = confirm("Do you want numbers?");
  let char = confirm("Do you want special characters?");

  // Loops if user selects no character type ()
  // if(lower === false && upper === false && numbers === false && char === false) {
  //   alert("Password must include at least one character type");
  //   confirm("Do you want lowercase letters?");
  //   confirm("Do you want uppercase letters?");
  //   confirm("Do you want numbers?");
  //   confirm("Do you want special characters?");




if (lower === true) {
  masterArray.push(lowercase)
}

if (upper === true) {
  masterArray.push(uppercase)
}

if (numbers === true) {
  masterArray.push(numeric)
}

if (char === true) {
  masterArray.push(specialChar)
}
console.log(masterArray, "THIS IS THE MASTER ARRAY")


let arrayIntoString = masterArray.join("").split(",")
console.log(arrayIntoString)

let finalPassword = []

for (let i = 0; i < charNum; i++) {
  let passwordCharacter = getRandom(arrayIntoString)
  finalPassword.push(passwordCharacter)

}
console.log(finalPassword);

return finalPassword.join("");

}

function getRandom(arr) {
  let randomCharacter = Math.floor(Math.random() * arr.length)
  let randomIndex = arr[randomCharacter]
  return randomIndex
}




