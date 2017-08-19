(function(exports){
  function NoteListView(noteList) {
      this.noteList = noteList;
  }

  NoteListView.prototype.getNoteListHTML = function() {
    var notes = this.noteList.getNotes();

    function itemize(note) {
      return "<li><div>" + note.getText() + "</div></li>";
    }

    var liStr = notes.map(itemize).join("");
    return "<ul>" + liStr + "</ul>";
  };

  exports.NoteListView = NoteListView;
})(this);
