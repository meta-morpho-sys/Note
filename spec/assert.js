

console.log("assert wtf");
var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      console.log("assert wtf2");
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};
console.log("assert wtf3");
