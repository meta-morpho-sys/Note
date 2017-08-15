(function(){
  function testEmptyArray() {
    var notes = new NoteList();
    var notesArray = notes.getNotes();
    assert.isTrue(Array.isArray(notesArray));
    assert.isTrue(notesArray.length == 0);
  };

  function testNotesArray() {
    var notes = new NoteList();

    notes.addNote("Favourite drink: seltzer");

    var notesArray = notes.getNotes();

    assert.isTrue(notesArray.length == 1);
    var note = notesArray[0];
    assert.isTrue(note.getText() == "Favourite drink: seltzer");
  };

  testEmptyArray();
  testNotesArray();
})(this);
