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



// Handles a note list model that has no notes, one note or several notes.
// NB: This challenge doesn't require you to display the HTML in a browser, or put the HTML into an HTML file. If your code returns the right string of HTML to your tests, the challenge is complete!
