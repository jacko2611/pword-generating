const characters = {
    letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''),
    numbers: [0,1,2,3,4,5,6,7,8,9],
    symbols: "!@#$%^&*_-+=|~`".split('')
  }

  const passLength = document.getElementById('passLength');
  const passDisplay = document.getElementById('password');
  const generateBtn = document.querySelector("#generate");
  

  function writePassword() {
    const lengthAnswer = prompt("Please enter a number between 8 and 128");
    const length = parseInt(lengthAnswer);
    if (length >= 8 && length <= 128) {
        const letterAnswer = confirm("Would you like letters in your password?")
        const numberAnswer = confirm("Would you like numbers in your password?")
        const symbolAnswer = confirm("Would you like symbols in your password?")
        
        const possibleChars = [];
        const generatePassword = [];
       
        
        if (letterAnswer) {
            possibleChars.push(...characters.letters);
        }
        if (numberAnswer) {
              possibleChars.push(...characters.numbers)
        }
        if (symbolAnswer) {
              possibleChars.push(...characters.symbols);
        }
        if (possibleChars.length < 1) {
            alert("You need at least 1 criteria selected")
            return;
        } 
    
        for(let i = 0; i < length; i++) {
                const rand = Math.floor(Math.random() * possibleChars.length)
                generatePassword.push(possibleChars[rand])
        }  
          
        console.log(generatePassword);
        passDisplay.innerText = generatePassword.join('')

        } else {
            alert("Please enter a number between 8 and 128");
        }
      }
      
    generateBtn.addEventListener("click", writePassword);
    
