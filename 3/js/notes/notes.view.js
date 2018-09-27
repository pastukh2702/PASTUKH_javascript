
(function (window) {

    window.NotesView = function () {
        
        

    }

    NotesView.prototype.render = function (renderCommand, data) {
        var renderCommands = {
            showNotes: function () {
                // !!! ДЗ !!! отрисовать заметки в HTML
                var showNotesList = document.querySelector('.notes');
                if (showNotesList.getAttribute("data-module") === 'notes') {
                    for (var i = 0; i < data.length; i++){
                      showNotesList.innerHTML +=
                        '<div class="notes_l"><p class="notes_t">'+data[i].id+'| '+data[i].text+'</p></div>';
                    }
                }
                
            }
        }
        renderCommands[renderCommand]();
    }

}(window));