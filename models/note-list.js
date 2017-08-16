(function(exports){
  // Uses the constructor and prototype pattern to define a
  // note list model object that can be instantiated.
  function NoteList() {
    // Stores an array of note models.
    this._notes = [];
  }

  // Has a method that will return all the note models stored in the array.
  NoteList.prototype.getNotes = function() {
    return this._notes;
  };

  // Has a method that creates and stores a new single note model.
  NoteList.prototype.addNote = function(text) {
    this._notes.push(new Note(text));
  }

  exports.NoteList = NoteList;
})(this);




// This function takes as an argument a string
// that will be the value of the text property of the note
// e.g. "Favourite drink: seltzer".
