// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  
  
  function caesar(input, shift, encode = true) {
    if(shift === 0 || shift < -25 || shift > 25 || shift === undefined) {
      return false;
    }
    if(encode === true) {
      return encoder(input, shift);
    } else {
      return decoder(input, shift);
    }
  }
  
  function encoder(input, shift) {
    const newInput = input.toLowerCase();
    let message = "";
    for(let i = 0; i < newInput.length; i++) {
      const letter = newInput[i];
    if(!letters.includes(letter)) {
      message += letter;
    } else {
      const index = letters.indexOf(letter);
      let newIndex = index + shift;
      if(newIndex >= 26) {
        newIndex = newIndex - 26;
      }
      if(newIndex < 0) {
        newIndex = newIndex + 26;
      }
      message += letters[newIndex]; 
    }
    }
    return message;
  }
  
  function decoder(input, shift) {
    const newInput = input.toLowerCase();
    let message = "";
    for(let i = 0; i < newInput.length; i++) {
      const letter = newInput[i];
    if(!letters.includes(letter)) {
      message += letter;
    } else {
      const index = letters.indexOf(letter);
      let newIndex;
      if(shift >= 0) {
        newIndex = index - shift;
      }
      else {
        newIndex = index - (shift + 26);
      }
      if(newIndex < 0) {
        newIndex = newIndex + 26;
      }
      if(newIndex >= 26) {
        newIndex = newIndex - 26;
      }
      message += letters[newIndex]; 
    }
    }
    return message;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
