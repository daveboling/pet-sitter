function Pet(name, age, gender, species){
	this.name    = name;
	this.age     = age;
	this.gender  = gender;
	this.species = species;

	this.health = Math.random()*91+10;
	this.energy = Math.random()*91+10;
	this.full   = Math.random()*91+10;
}

Pet.prototype.walk = function() {
	this.health +=  Math.round((Math.random()*2)+1);
	this.energy -=  Math.round((Math.random()*2)+2);
	this.full   -=  Math.round((Math.random()*3)+2);
}

module.exports = Pet;