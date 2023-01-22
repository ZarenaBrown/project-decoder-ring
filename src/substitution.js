// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const trueAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // THE ALPHABET REFERS TO THE SUBSTITUTION ALPHABET
    
  //test to see if any value in the alphabet array appears more than once
  
  function substitution(input, alphabet, encode = true) {
    if(!alphabet || alphabet.length !== 26) {
      return false;
    }
  let duplicate = alphabet.split("").filter((item, index) => alphabet.indexOf(item) !== index)
    if(duplicate.length > 0) {
      return false;
    }
    if(encode === true) {
      return encoder(input, alphabet);
    } else {
      return decoder(input, alphabet);
    }
  }

  
// ENCODING A MESSAGE
// should encode a message by using the given substitution alphabet
// should work with any kind of key with unique characters
// should preserve spaces
  function encoder(input, alphabet) {
    const newInput = input.toLowerCase();
    let message = "";
    for(let i = 0; i < newInput.length; i++) {
     const letter = newInput[i];
      if(letter == " ") {
        message += letter;
      } else {
      const index = trueAlphabet.indexOf(letter);
        message += alphabet[index];
      }
  }
    return message;
  }

// DECODING A MESSAGE
// should decode a message by using the given substitution alphabet
// should work with any kind of key with unique characters
// should preserve spaces
  function decoder(input, alphabet) {
    const newInput = input.toLowerCase();
    let message = "";
    for(let i = 0; i < newInput.length; i++) {
     const letter = newInput[i];
      if(letter == " ") {
        message += letter;
      } else {
      const index = alphabet.indexOf(letter);
        message += trueAlphabet[index];
      }
  }
    return message;
  }


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
