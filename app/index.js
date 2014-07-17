var Pet = require('../test/unit/models/pet'); //bring in for testing

var p1 = new Pet('Gar', 3, 'male', 'camel');
var p2 = new Pet('Lassie', 3, 'male', 'bee');

p1.walk();
p1.sleep();
p1.eat();

while(!p2.isZombie){
	console.log(p2);
	p1.attack(p2);
}

console.log('The winnder is', p1);

