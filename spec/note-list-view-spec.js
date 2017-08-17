(function(){
  function testViewHtmlNoteList() {
    var notes = new NoteList();
    notes.addNote('Favourite food: pesto');
    notes.addNote('Favourite drink: seltzer');
    
    var viewList = new NoteListView(notes);

    var htmlString = '<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>';

    assert.isTrue(viewList.getNoteListHTML() === htmlString);
  }

  testViewHtmlNoteList();
})();
