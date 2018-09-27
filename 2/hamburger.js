function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
}


/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {
    price: 50,
    k: 20,
    name: 'small'
}
Hamburger.SIZE_LARGE = {
    price: 100,
    k: 40,
    name: 'large'
}
Hamburger.STUFFING_CHEESE = {
    price: 10,
    k: 20,
    name: 'cheese'
}
Hamburger.STUFFING_SALAD = {
    price: 20,
    k: 5,
    name: 'salad'
}
Hamburger.STUFFING_POTATO = {
    price: 15,
    k: 10,
    name: 'potato'
}
Hamburger.TOPPING_MAYO = {
    price: 20,
    k: 5,
    name: 'mayo'
}
Hamburger.TOPPING_SPICE = {
    price: 15,
    k: 0,
    name: 'spice'
}

Hamburger.prototype.addTopping = function (topping) {
    for (var i = 0; i < this.toppings.length; i++) {
        if (this.toppings[i].name === topping.name) {
            console.log('Такой топпинг уже есть');
            return;
        }
    }
    this.toppings.push(topping);
}



Hamburger.prototype.removeTopping = function (topping) {
    for (var i = 0; i < this.toppings.length; i++) {
        if (topping.name === this.toppings[i].name) {
            this.toppings.splice(i, 1);
            return;
        }
    }
    console.log('Нет ' + topping.name + ' в списке топпингов');
}


Hamburger.prototype.getToppings = function () {
    return this.toppings;
}


Hamburger.prototype.getSize = function () {
    return this.size;
}


Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
}

Hamburger.prototype.calculatePrice = function () {
    var price = this.size.price + this.stuffing.price;
    for (var i = 0; i < this.toppings.length; i++) {
        price += this.toppings[i].price;
    }
    return price;
}


Hamburger.prototype.calculateCalories = function () {
    var k = this.size.k + this.stuffing.k;
    for (var i = 0; i < this.toppings.length; i++) {
        k += this.toppings[i].k;
    }
    return k;
}



var size_b = Hamburger.SIZE_SMALL;
var burger = document.getElementById("burger");
var mayo = document.getElementById("mayo");
var spice = document.getElementById("spice");

var stuff = Hamburger.STUFFING_CHEESE;
var hamburger = new Hamburger(size_b, stuff);
console.log(hamburger.getToppings());
console.log(hamburger.getSize());
console.log(hamburger.getStuffing());
console.log(hamburger.calculatePrice());



function checkBox(box) {
    var chbox;
    chbox = document.getElementById(box.id);
    if (chbox.checked) {
       if (box.value=='small'){size_b = Hamburger.SIZE_SMALL; burger.style.backgroundSize = "";}
       else {size_b = Hamburger.SIZE_LARGE; burger.style.backgroundSize = "110%";}
       hamburger = new Hamburger(size_b);

    }
}

function checkBox2(box2) {
    var chbox1;
    chbox1 = document.getElementById(box2.id);
    if (chbox1.checked) {
       if (box2.value=='cheese'){stuff = Hamburger.STUFFING_CHEESE; burger.style.background = "url(cheess.png) no-repeat";}
       else if (box2.value=='salad'){stuff = Hamburger.STUFFING_SALAD; burger.style.background = "url(salad.png) no-repeat";}
       else {stuff = Hamburger.STUFFING_POTATO; burger.style.background = "url(potato.png) no-repeat";}
       hamburger = new Hamburger(size_b, stuff);

       console.log(hamburger.getToppings());
       console.log(hamburger.getSize());
       console.log(hamburger.getStuffing());
       console.log(hamburger.calculatePrice());


    }
}
function checkBox3(box3) {
    var chbox2;
    chbox2 = document.getElementById(box3.id);
    if (chbox2.checked) {
       if (box3.value =='mayo'){hamburger.addTopping(Hamburger.TOPPING_MAYO); mayo.style.background = "url(mayo.png) no-repeat";}
       else {hamburger.addTopping(Hamburger.TOPPING_SPICE); spice.style.background = "url(spice.png) no-repeat";}  
    } else {
        if (box3.value =='mayo'){hamburger.removeTopping(Hamburger.TOPPING_MAYO); mayo.style.background = "url() no-repeat";}
        else {hamburger.removeTopping(Hamburger.TOPPING_SPICE); spice.style.background = "url() no-repeat";}
    }
    console.log(hamburger.getToppings());
       console.log(hamburger.getSize());
       console.log(hamburger.getStuffing());
       console.log(hamburger.calculatePrice());

    
}


// function checkBox(box) {
//     var chbox;
//     chbox = document.getElementById(box.id);
//     if (chbox.checked) {
//        if (box.value=='mayo'){hamburger.addTopping(Hamburger.TOPPING_MAYO);}
//        else {hamburger.removeTopping(Hamburger.TOPPING_MAYO);}

//         if (box.value=='spice'){hamburger.addTopping(Hamburger.TOPPING_SPICE);}
//         else {hamburger.removeTopping(Hamburger.TOPPING_SPICE);}
//         console.log(box.value);
//         console.log(hamburger.getToppings());
        
//     }
// }



// // маленький гамбургер с начинкой из сыра
// var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);





// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// // hamburger.addTopping(Hamburger.TOPPING_SPICE);
// // hamburger.removeTopping(Hamburger.TOPPING_MAYO);
// // hamburger.removeTopping(Hamburger.TOPPING_MAYO);
// console.log(hamburger.getToppings());
// console.log(hamburger.getSize());
// console.log(hamburger.getStuffing());
// console.log(hamburger.calculatePrice());

// добавка из майонеза
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
// console.log("Calories: %f", hamburger.calculateCalories());
// сколько стоит
// console.log("Price: %f", hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
// hamburger.addTopping(Hamburger.TOPPING_SPICE);
// А сколько теперь стоит? 
// console.log("Price with sauce: %f", hamburger.calculatePrice());
// Проверить, большой ли гамбургер? 
// console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// Убрать добавку
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);
// console.log("Have %d toppings", hamburger.getToppings()); // 1