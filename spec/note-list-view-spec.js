(function(){
  function testViewHtmlNoteList() {
    var notes = new NoteList();
    var viewList = new NoteListView(notes);
    notes.addNote('Favourite food: pesto');
    notes.addNote('Favourite drink: seltzer')

    var htmlString = '<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>';

    assert.isTrue(viewList.getNoteListHTML() === htmlString);
  }

  testViewHtmlNoteList();
})();
