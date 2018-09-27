var colors = [
{
	color: 'red',
	price: 300
},
{
	color: 'black',
	price: 250
},
{
	color: 'silver',
	price: 200
}
];
var memorys = [
{
	value: 16,
	price: 100
},
{
	value: 32,
	price: 150
},
{
	value: 64,
	price: 200
}
];

var price = 0;
var color;
var value = 0;

con: while(true) {
	color = prompt('Какой цвет?','red black silver');
	  for (var i = 0; i < colors.length; i++) {
		if (color == colors[i].color) {
			price = colors[i].price;
			break con;
		}
		if (color == null) {
			color = 'default';
			break con;
		}
	}
}
con: while (true) {
	if (color == 'default') {
			break con;
		}
	value = prompt('Какая память?','16 32 64');
	for (var i = 0; i < memorys.length; i++) {
		if (value == memorys[i].value) {
			price += memorys[i].price;
			break con;
		}
		if (value == null) {
			value = 'Не указана память';
			break con;
		}
		
	}
}

document.write('<center><img width="200" src="'+ color +'.png">');
document.write('<h1>'+ 'Память: '+ value +'</h1>');
document.write('<h1>'+ 'Цена: '+ price  +'</h1></center>');









