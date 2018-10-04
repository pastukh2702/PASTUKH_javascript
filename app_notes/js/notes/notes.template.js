;
(function (window) {

    window.NotesTemplate = function () {
        this.noteTemplate = '<div class="notes__item">{{text}} <button data-id="{{id}}" class="rem" >Remove</button></div>'
    }

    NotesTemplate.prototype.getNotesList = function (data) {
        var template = '';
        for (var i = 0; i < data.length; i++) {
            var item = this.noteTemplate;
            item = item.replace('{{text}}', data[i].text);
            item = item.replace('{{id}}', data[i].id);
            template += item
        }
        return template;
    }

}(window));