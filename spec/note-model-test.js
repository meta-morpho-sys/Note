(function(exports){
  function testAString() {
    var note = new Note('blah');
    assert.isTrue(note.getText() === 'blah');
  };

  exports.testAString = testAString();
})(this);
