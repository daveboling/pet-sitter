/* global describe, it */
/* jshint expr:true */

'use strict';
var expect = require('chai').expect;
var Pet = require('../../apps/models/pet'); //bring in for testing

//these are known as describe blocks, a way to organize tests
describe('Pet', function(){
	//Test to see if valid constructor
	describe('constructor', function() {
		//Test the pet object to see if it is indeed and object
		it('should create a new Pet', function() {
			var pet = new Pet();
			expect(pet).to.be.ok;
			expect(pet).to.be.instanceof(Pet);
		});
		//Test pet object to see if definitions are correct
		it('should create a new Pet with arguments', function(){
			var pet = new Pet('fluffy', 3, 'female', 'lizard');
			expect(pet.name).to.equal('fluffy');
			expect(pet.age).to.equal(3);
			expect(pet.gender).to.equal('female');
			expect(pet.species).to.equal('lizard');
			expect(pet.isZombie).to.be.false;
			//Heal, energy, full test
			expect(pet.health).to.within(10, 100);
			expect(pet.energy).to.within(10, 100);
			expect(pet.full).to.within(10, 100);
		});
	});
	//Test the walk function
	describe('#walk', function() {
		it('should increase health but decrease energy and full', function() {
			var pet = new Pet('fluffy', 3, 'female', 'lizard');
			pet.health = 90;
			pet.energy = 30;
			pet.full   = 20;

			//Call function
			pet.walk();

			//Log out the new numbers
			console.log('Health', pet.health, 'Energy', pet.energy,'Full', pet.full);

			//Check to see if the properties are within proper values
			expect(pet.health).to.be.within(91, 93);
			expect(pet.energy).to.be.within(26, 28);
			expect(pet.full).to.be.within(15, 17); 
		});
	});
	//Test the sleep function
	describe('#sleep', function() {
		it('should increase health, energy and decrease full', function() {
			var pet = new Pet('fluffy', 3, 'female', 'lizard');
			pet.health = 90;
			pet.energy = 30;
			pet.full   = 20;

			//Call function
			pet.sleep();

			//Log out the new numbers
			console.log('Health', pet.health, 'Energy', pet.energy,'Full', pet.full);

			//Check to see if the properties are within proper values
			expect(pet.health).to.be.within(92, 93);
			expect(pet.energy).to.be.within(31, 35);
			expect(pet.full).to.be.within(13 ,16);

		});
	});
	//Test the eat function
	describe('#eat', function() {
		it('should increase full and health, but decrease energy', function() {
			var pet = new Pet('fluffy', 3, 'female', 'lizard');
			pet.health = 90;
			pet.energy = 30;
			pet.full   = 20;

			//Call function
			pet.eat();

			//Log out the new numbers
			console.log('Health', pet.health, 'Energy', pet.energy,'Full', pet.full);

			//Check to see if the properties are within proper values
			expect(pet.health).to.be.within(91, 94);
			expect(pet.energy).to.be.within(22, 27);
			expect(pet.full).to.be.within(25, 29);

		});
	});
	describe('#attack', function() {
		it('should allow pets to cage fight', function() {
			var fluffy = new Pet('fluffy', 3, 'female', 'lizard');
			fluffy.health = 45;
			fluffy.energy = 60;
			fluffy.full   = 90;

			var dax = new Pet('dax', 7, 'female', 'slug');
			dax.health = 70;
			dax.energy = 50;
			dax.full   = 80;

			//Call function
			fluffy.attack(dax);

			//fluffy's attack is at least 10.5 and at most 15.5
			//dax - minAttack, dax - maxAttack
			expect(dax.health).to.be.within(54.5, 59.5);

		});
		it('should cause a pet  with negative health to become zombie', function() {
			var fluffy = new Pet('fluffy', 3, 'female', 'lizard');
			var dax = new Pet('dax', 7, 'female', 'slug');

			for(var i = 0; i < 1000; i++){
				fluffy.attack(dax);
			}

			expect(dax.isZombie).to.be.true;

		});
	});
});
