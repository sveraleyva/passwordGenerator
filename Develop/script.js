// variables
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'J', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q','R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+'];

let password = [];
let userChoices =[];

// functions
function generatePassword() {
  // string input is made into an integer
  let passwordLength = parseInt(window.prompt("How long do you want your password to be?", "Choose a number between 8 and 128"));
  if (passwordLength < 8 || passwordLength > 128 || Number.isNaN(passwordLength)) {
    window.alert("Password must be a number between 8 and 128 characters, please try again");
    return ""
  } 
  let hasLowerCase = window.confirm("Do you want your password to have lower case letters?");
  if (hasLowerCase) {
    index = getRandomIndex(0, lowerCase.length);
    password.push(lowerCase[index]);
    userChoices = userChoices.concat(lowerCase);
  }
  let hasUpperCase = window.confirm("Do you want your password to have upper case letters?");
  if (hasUpperCase){
    index = getRandomIndex(0, upperCase.length);
    password.push(upperCase[index]);
    userChoices = userChoices.concat(upperCase)
  }
  let hasNumbers = window.confirm("Do you want your password to have numbers?");
  if (hasNumbers){
    index = getRandomIndex(0, numbers.length);
    password.push(numbers[index]);
    userChoices = userChoices.concat(numbers);
  }
  let hasSymbols = window.confirm("Do you want your password to have symbols?");
  if (hasSymbols){
    index = getRandomIndex(0, symbols.length);
    password.push(symbols[index]);
    userChoices = userChoices.concat(symbols);
  }

  if (!hasLowerCase && !hasUpperCase && !hasSymbols && !hasNumbers) {
    window.alert("Please pick something to add to your password. Please pick at least one category. Try again");
    return ""
  }

  newPasswordLength = passwordLength - password.length;
  
  for (let i = 0; i < newPasswordLength; i++) {
    index = getRandomIndex(0, userChoices.length);
    password.push(userChoices[index])
  }

  return password.join(""); // this will make it a string from being an array
}

function getRandomIndex(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //if you add the parenthesis, it will call the function immediately 