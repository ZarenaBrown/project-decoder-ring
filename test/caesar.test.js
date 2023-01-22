// Write your tests here!
const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should encode a message by shifting the letters", () => {
    const expected = 'wklqnixo'
    const result = caesar("thinkful", 3);
    expect(expected).to.equal(result);
  });
  
  it("should leaves spaces and other symbols as is", () => {
    const expected = 'wklqnixo64%'
    const result = caesar("thinkful64%", 3);
    expect(expected).to.equal(result);
  });

 it("should ignore capital letters", () => {
    const expected = "wklqnixo"
    const result = caesar("Thinkful", 3);
    expect(expected).to.equal(result);
});

  it("should appropriately handle letters at the end of the alphabet", () => {
    const expected = "wklqnixoc"
    const result = caesar("thinkfulz", 3);
    expect(expected).to.equal(result);
});

  it("should allow for a negative shift that will shift to the left", () => {
    const expected = "qefkhcri"
    const result = caesar("thinkful", -3);
    expect(expected).to.equal(result);
});
 });