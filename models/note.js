(function(exports) {
  function Note(msg) {
    this.text = msg;
  };

  Note.prototype.getText = function() {
    return this.text;
  };
  exports.Note = Note;
})(this);
