(function() {
  function TestController() {
    function NoteList() {
      this.addNoteCount = 0;
    }

    NoteList.prototype.addNote = function() {
      this.addNoteCount++;
    }

    var nl = new NoteList();
    var controller = new NoteController(nl);
    assert.isTrue(nl.addNoteCount === 1);
  };
  
  TestController();
})();

(function() {
  function getNoteListHTML() {
    var noteDouble = { getText: function() { return "Test Text"} };
    var noteListDouble = {  addNote: function() {},
                            getNotes: function() { return [noteDouble] } };
    var controller = new NoteController(noteListDouble)
    console.log(controller.render());
    assert.isTrue(controller.render() === "<ul><li><div>Test Text</div></li></ul>")
  };

  getNoteListHTML();
})();

(function() {
  function testPageUpdate() {
    var noteDouble = { getText: function() { return 'Oxford coffee';} };
    var noteListDouble = {
      addNote: function(text){},
      getNotes: function(){ return [noteDouble]}
    };

    var controller = new NoteController(noteListDouble);

    controller.render();

    var appElt = document.getElementById("app");
    assert.isTrue(appElt.innerHTML === "<ul><li><div>Oxford coffee</div></li></ul>")
  };

  testPageUpdate();
})();
