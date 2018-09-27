;
(function (window) {

    var NOTES_LIST = [{
            id: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 4,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 5,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 6,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        
    ]

    window.NotesModel = function () {}

    NotesModel.prototype.getNotes = function (cb) {
        cb(NOTES_LIST);
        console.log(NOTES_LIST);
    }

    NotesModel.prototype.addNote = function (newNoteText) {
        var note = {
            id: new Date(),
            text: newNoteText
        }
        NOTES_LIST.push(note);
    }

}(window));