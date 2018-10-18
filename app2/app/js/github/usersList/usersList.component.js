export var UsersListComponent = (function () {

    function getUsers() {
        console.log('USERS LIST');
        // $.ajax({
        //     url: 'https://api.github.com/users',
        //     success: function (res) {
        //         console.log(res);
        //     }
        // })
        $.get('https://api.github.com/users', function (res) {
           
            // for (var i = 0; i < res.length; i++) {
            //     $(".users__list").append('<div class="user">'+ res[i].login +'</div>');
                
            // }
            
            
            $(window).trigger('gottenUsers', {
                users: res
            });
        })
    }

    function renderUsersList() {
        console.log('RENDER USERS LIST');
        $(window).on('gottenUsers', function (e, data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                $(".users__list").append('<div class="user">'+ data[i] +'</div>');
                
            }
                
                
            
            console.log(data);
  

            
 


            // HOME WORK
            // Render users list in HTML (use template file)
        })
    }

    return {
        init: function () {
            console.log('UsersListComponent');
            getUsers();
            renderUsersList();
        }
    }
}())