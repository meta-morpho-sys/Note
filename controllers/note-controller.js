(function(exports){
  function NoteController(noteList){

    noteList.addNote("Favourite drink: coffee");

    this.view = new NoteListView(noteList);

  };

  NoteController.prototype.render = function() {
    document.getElementById('app').innerHTML = this.view.getNoteListHTML();
  }

  exports.NoteController = NoteController;
})(this);

function initialise() {
  var noteList = new NoteList();

  noteList.addNote('Favourite food: pesto');
  noteList.addNote('Favourite drink: cider');

  var controller = new NoteController(noteList);

  controller.render();
}
