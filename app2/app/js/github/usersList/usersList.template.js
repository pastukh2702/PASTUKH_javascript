;
(function (window) {

    window.UsersListTemplate = function () {
        this.usersListTemplate = '<div class="user">{{res}}</div>'
    }

    UsersListTemplate.prototype.getUsersList = function (res) {
        var template = '';
        for (var i = 0; i < res.length; i++) {
            var item = this.usersListTemplate;
            item = item.replace('{{res}}', res[i]);
            template = item;
        }
        return template;
    }

}(window));