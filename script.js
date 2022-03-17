// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //length specifications
  var pwLen = window.prompt("Enter the desired length of the password (8 - 128 characters long).")
  if(pwLen < 8 || pwLen > 128){
    window.alert("Try again, the length must be between 8 - 128 characters long (inclusive).");
    generatePassword();
  }

  //character specifications
  var lower = window.confirm("Would you like to include lowercase characters in the randomization? (\"OK\" for yes, \"Cancel\" for no)");
  var upper = window.confirm("Would you like to include uppercase characters in the randomization? (\"OK\" for yes, \"Cancel\" for no)");
  var number = window.confirm("Would you like to include numbers in the randomization? (\"OK\" for yes, \"Cancel\" for no)");
  var special = window.confirm("Would you like to include special characters in the randomization? (\"OK\" for yes, \"Cancel\" for no)");

  if(lower == false && upper == false && number == false && special == false){
    window.alert("Sorry, you need to choose at LEAST one character type.");
    generatePassword();
  }


  //applying character specifications
  function genLogic(){
    var charChoice = [];
    if(lower == true){
      var lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      for(i = 0; i < lowerChars.length; i++)
      {
        charChoice.push(lowerChars[i]);
      }
    }
    if(upper == true){
      var upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
      for(i = 0; i < upperChars.length; i++)
      {
        charChoice.push(upperChars[i]);
      }
    }
    if(number == true){
      var numChars = ["0","1","2","3","4","5","6","7","8","9"];
      for(i = 0; i < numChars.length; i++)
      {
        charChoice.push(numChars[i]);
      }
    }
    if(special == true){
      var specChars = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}","\\","|",";",":","'","\"",",","<",".",">","/","?","~"];
      for(i = 0; i < specChars.length; i++)
      {
        charChoice.push(specChars[i]);
      }
    }
    return(charChoice);
  }

  var charOptions = genLogic();
  
  var newPW = "";

  //randomly generating password
  for (var i = 0; i < pwLen; i++){
    var randomNumber = Math.floor(Math.random() * charOptions.length);
    newPW += charOptions[randomNumber];
  }

  return(newPW);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


