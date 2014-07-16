function Pet(name, age, gender, species){
	this.name    = name;
	this.age     = age;
	this.gender  = gender;
	this.species = species;
	this.isZombie  = false;

	this.health = Math.floor(Math.random()*91+10);
	this.energy = Math.floor(Math.random()*91+10);
	this.full   = Math.floor(Math.random()*91+10);
}

Pet.prototype.walk = function() {
	this.health +=  Math.floor((Math.random()*3)+1);
	this.energy -=  Math.floor((Math.random()*3)+2);
	this.full   -=  Math.floor((Math.random()*3)+3);
}

Pet.prototype.sleep = function() {
	this.health +=  Math.floor((Math.random()*2)+2);
	this.energy +=  Math.floor((Math.random()*5)+1);
	this.full   -=  Math.floor((Math.random()*4)+4);
}

Pet.prototype.eat = function() {
	this.health +=  Math.floor((Math.random()*4)+1);
	this.energy -=  Math.floor((Math.random()*6)+3);
	this.full   +=  Math.floor((Math.random()*5)+5);
}

Pet.prototype.attack = function(Pet) {
	var damage = Math.floor((this.health/10) + (this.energy/20) + (this.full/30));
		damage += Math.random()*5;
	Pet.health -= damage;

	if(Pet.health < 0){
		Pet.isZombie = true;
	}
};


module.exports = Pet;