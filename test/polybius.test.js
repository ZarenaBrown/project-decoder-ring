// Write your tests here!
const {polybius} = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  it("should encode a message by translating each letter to number pairs", () => {
    const expected = "4432423352125413"
    const result = polybius("thinkful");
    expect(result).to.eql(expected);
  });
  it("should translate both 'i' and 'j' to 42", () => {
    const expected = "4432423352125413"
    const result = polybius("thinkful");
    expect(result).to.equal(expected);
});
  it("should leave spaces as is", () => {
    const expected = "3251131343 2543241341"
    const result = polybius("Hello world");
    expect(result).to.equal(expected); 
});
  it("should decode a message by translating each pair of numbers into a letter", () => {
    const expected = "th(i/j)nkful"
    const result = polybius("4432423352125413", false);
    expect(result).to.equal(expected);    
});
  it("should translate 42 to both 'i' and 'j'", () => {
    const expected = "th(i/j)nkful"
    const result = polybius("4432423352125413", false);
    expect(result).to.equal(expected); 
});
  it("should return false if the length of all numbers is odd", () => {
    const expected = false
    const result = polybius("44324233521254134", false);
    expect(result).to.equal(expected);  
});
});