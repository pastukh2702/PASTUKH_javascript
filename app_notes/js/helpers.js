// 1) Обертка над addEventListener(с возможностью проверки target 'а)
//     2) Функция для получения нужного атрибута(attribuets)

// $on('click', button, '.rem', function(){
//     console.log('fffffff')




// })
        //    // $on(‘click’, button, ‘className ЭЛЕМЕНТА ПРИ НАЖАТИИ НА КОТОРЫЙ ДОЛЖЕН СРАБОТАТЬ ОБРАБОТЧИК’,funciton(){...})
        //    //обработать try catch
        //    document.addEventListener(‘click’, function (e) {
        //        var id = -1;
        //        for (var i = 0; i < e.target.classList.length; i++) {
        //            if (e.target.classList[i] === self.rmButtonClassName) {
        //                id = $attr(e.target, self.idAttrName);
        //            }
        //        }
        //        handler(id);
        //    })

        //    $on("click", self.$list, self.rmButtonClassName, function(){
        //        id = $attr(e.target, self.idAttrName);
        //        handler(id);
        //    })
        //    $on(‘click’, self.rmButtonClassName, function(){
        //        id = $attr(e.target, self.idAttrName);
        //        handler(id);
        //    }) // не сработает, так как кнопки нет в html