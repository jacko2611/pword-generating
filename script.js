const characters = {
    letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''),
    numbers: [0,1,2,3,4,5,6,7,8,9],
    symbols: "!@#$%^&*_-+=".split('')
  }

  const passLength = document.getElementById('passLength');
  const passDisplay = document.getElementById('genpassword');
  const generateBtn = document.querySelector("#generate");
  
  //const passwordText = password;

  function writePassword() {
    //var password = generatePassword();
    var passwordText = document.querySelector("#password");
    const length = parseInt(passwordText.value);
    if (length > 8 && length < 128) {
        const letterAnswer = prompt("Would you like letters in your password?")
        const numberAnswer = prompt("Would you like numbers in your password?")
        const symbolAnswer = prompt("Would you like symbols in your password?")
        
        const possibleChars = [];

        passwordText.value = password;
        
        if (letterAnswer != null) {
            possibleChars.push(...characters.letters);
          }
          if (numberAnswer != null) {
              possibleChars.push(...characters.numbers)
          }
          if(symbolAnswer != null) {
              possibleChars.push(...characters.symbols);
          }
          if(possibleChars.length < 1) {
              prompt("You need at least 1 criter selected")
          } else {
              const genPassword = [];

              for(let i = 0; i < length; i++) {
                  const rand = Math.floor(Math.random() * possibleChars.length)
                  genPassword.push(possibleChars[rand])
              }
          }
      
          passDisplay.innerText = generatePassword.join('')

          } else {
              prompt("Please enter a number between 8 and 128")
          }
      }

      generateBtn.addEventListener("click", writePassword);
    
    //passwordText.value = password;

    //var password = generatePassword();

  //generateBtn.addEventListener("click", writePassword);
  
//   function generatePassword(){
//       if (length > 8 && length < 128) {
//           const letterAnswer = prompt("Would you like letters in your password?")
//           const numberAnswer = prompt("Would you like numbers in your password?")
//           const symbolAnswer = prompt("Would you like symbols in your password?")
          
//           const possibleChars = [];
          
//           if (letterAnswer != null) {
//               possibleChars.push(...characters.letters);
//             }
//             if (numberAnswer != null) {
//                 possibleChars.push(...characters.numbers)
//             }
//             if(symbolAnswer != null) {
//                 possibleChars.push(...characters.symbols);
//             }
//             if(possibleChars.length < 1) {
//                 prompt("You need at least 1 criter selected")
//             } else {
//                 const genPassword = [];

//                 for(let i = 0; i < length; i++) {
//                     const rand = Math.floor(Math.random() * possibleChars.length)
//                     genPassword.push(possibleChars[rand])
//                 }
//             }
        
//             passDisplay.innerText = generatePassword.join('')

//             } else {
//                 prompt("Please enter a number between 8 and 128")
//             }
//         }


        
        
     
    
    
    // Write password to the #password input
    //function writePassword() {
        //var password = generatePassword();
        //var passwordText = document.querySelector("#password");
        
       // passwordText.value = password;
    
    
    // Add event listener to generate button
   // generateBtn.addEventListener("click", writePassword);
    
    
    //passLength.value = (length > 8 && length < 128);
    //const generateBtn = document.getElementById('#generate');
    