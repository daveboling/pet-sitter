/* global describe, it */
/* jshint expr:true */

'use strict';
var expect = require('chai').expect;
var Pet = require('../../apps/models/pet'); //bring in for testing

//these are known as describe blocks, a way to organize tests
describe('Pet', function(){
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
			//Heal, energy, full test
			expect(pet.health).to.within(10, 100);
			expect(pet.energy).to.within(10, 100);
			expect(pet.full).to.within(10, 100);
		});
	});
	describe('#walk', function() {
		it('should increase health but decrease energy and full', function() {
			var pet = new Pet('fluffy', 3, 'female', 'lizard');
			pet.health = 90;
			pet.energy = 30;
			pet.full   = 20;

			//Call function
			pet.walk();

			//Log out the new numbers
			console.log(pet.health, pet.energy, pet.full);

			//Check to see if the properties are within proper values
			expect(pet.health).to.be.within(91, 93);
			expect(pet.energy).to.be.within(26, 28);
			expect(pet.full).to.be.within(15, 17);

		});
	});
});
