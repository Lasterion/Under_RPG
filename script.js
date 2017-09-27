function Basic(hp,power,shoot){
  this.hp=100;
  this.power=50;
  this.shoot=15;
  this.walk = function(time){
  	var speed = 5;
  	var way = number*speed;
  	console.log(`Пройдено ${way} км`);
  }
  this.run = function(time){
  	var speed = 15;
	var way = number*speed;
	console.log('Пробежал ${way} км');
  }
};

function Human(hp,power,shoot){
	Basic.call(this,hp,power,shoot);
	this.hp=80;
	this.power = 30;
	this.shoot = 10;
	this.bilding = 0;
};

Human.prototype = Object.create(Basic.prototype);

Human.prototype.tobild = function() {
	if (this.bilding < 4){
		this.bilding++;
		this.hp = this.hp+10; 
		console.log("Человек возвел дом: +10 hp");
	}
	else{
		console.log("Человек устал и строить в этом бою больше не станет")
	}
};



function Orc(hp,power,shoot) {
	Basic.call(this,hp,power,shoot);
	this.hp=110;
	this.power = 80;
	this.shoot = 30;
	this.agr = 0;
};

Orc.prototype = Object.create(Basic.prototype);

Orc.prototype.toagr = function() {
	if (this.agr < 6){
		this.agr++;
		this.power = this.power+10;
		console.log("Сила возрасла: +10 power");
	}
	else{
		console.log("Он перенервничал")
	}
};



function Elf(hp,power,shoot) {
	Basic.call(this,hp,power,shoot);
	this.hp=70;
	this.power = 20;
	this.shoot = 40;
};

Elf.prototype = Object.create(Basic.prototype);

Elf.prototype.attack = function(arr, m) {
	this.shoot = this.shoot + 5*arr - m*0.1;
	console.log(`Эльф нанес противнику ${this.shoot} урона с дистанции ${m} метров`);
	return this.shoot;
}

// var man = new Human();
// console.log(man);
// man.tobild();
// console.log(man);

// var orc = new Orc();
// console.log(orc);
// orc.toagr();
// console.log(orc);

// var elf = new Elf();
// console.log(elf);
// elf.attack(10,10);
// console.log(elf);


var fight = function(arrow){
	var man1 = new Human();
	var elf1 = new Elf();
	var i = 1;
	while ((man1.hp >0)&&(arrow >0)){
		console.log(`\nХод ${i}`);
		man1.tobild();
		var arr = Math.floor(Math.random()*3);
		var meters = Math.floor(Math.random()*10)+2;
		arrow = arrow - arr;
		var damage = elf1.attack(arr,meters);
		man1.hp = man1.hp - damage;
		console.log(`У человека осталось ${man1.hp} хп, у эльфа осталось ${arrow} стрел`);
		i++;
	}
	if (man1.hp <=0){
		console.log("\nЧеловек умер, эльф победил");
	}
	else{console.log("\nУ эльфа кончились стрелы и он покинул поле боя, человек выжил");}
}

fight(2);