// Write your tests here!
const {substitution} = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
  it("should return false if the substitution alphabet is missing", () => {
      const message = "message";
      const actual = substitution(message);
      expect(actual).to.be.false;
});
  
  it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const message = "message";
      const alphabet = "short";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
});
  
  it("should return false if the substitution alphabet does not contain unique characters", () => {
    const message = "message";
    const alphabet = "abcabcabcabcabcabcabcabcyz";
    const actual = substitution(message, alphabet);
    expect(actual).to.be.false;
});
  
   it("should encode a message by using the given substitution alphabet", () => {
    const expected = "jrufscpw"
    const result = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(result).to.equal(expected);
});
  
    it("should work with any kind of key with unique characters", () => {
       const expected = "y&ii$r&"
       const result = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
       expect(result).to.equal(expected);
});
  
    it("should preserve spaces", () => {
       const expected = "elp xhm xf mbymwwmfj dne"
       const result = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
       expect(result).to.equal(expected);
});
  
  it("should decode a message by using the given substitution alphabet", () => {
       const expected = "thinkful"
       const result = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
       expect(result).to.equal(expected);
  });
  
 it("should work with any kind of key with unique characters", () => {
       const expected = "message"
       const result = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
       expect(result).to.equal(expected);
  });
  
  it("should preserve spaces", () => {
       const expected = "elp xhm xf mbymwwmfj dne"
       const result = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
       expect(result).to.equal(expected); 
  });

});