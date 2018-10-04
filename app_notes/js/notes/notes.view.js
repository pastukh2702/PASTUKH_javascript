;
(function (window) {

    window.NotesView = function (moduleName, template) {
        this.moduleName = moduleName;
        this.templateBuilder = template;
        this.moduleContainer = '[data-module="' + this.moduleName + '"] ';
        this.$notesList = document.querySelector(this.moduleContainer + '.notes__list');
        this.$notesAdderBtn = document.querySelector(this.moduleContainer + '.notes__adder-btn');
        this.$notesAdderText = document.querySelector(this.moduleContainer + '.notes__adder-text');
        this.$notesSearchBtn = document.querySelector(this.moduleContainer + '.notes__search-btn');
        this.$notesSearchText = document.querySelector(this.moduleContainer + '.notes__search-text');
    }

    NotesView.prototype.render = function (renderCommand, data) {
        var self = this;
        var renderCommands = {
            showNotes: function () {
                self.$notesList.innerHTML = self.templateBuilder.getNotesList(data);
            }
        }
        renderCommands[renderCommand]();
    }

    NotesView.prototype.listen = function (eventName, cb) {
        var self = this;
        switch (eventName) {
            case 'addingNote':
                self.$notesAdderBtn.addEventListener('click', function () {
                    var noteText = self.$notesAdderText.value;
                    cb(noteText);
                })
                break;
            case 'removingNote':
                // использовать функции из helpers
                break;

            case 'searchingNote':
                self.$notesSearchBtn.addEventListener('click', function () {
                   var searchText = self.$notesSearchText.value;
                   cb(searchText);
            })
                break;

            default:
                break;
        }
    }

}(window));