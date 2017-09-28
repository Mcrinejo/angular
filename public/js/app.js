(function() {
    var app = angular.module('pokedex', []);

    app.controler('PokemonController', function () {
    this.pokemon = {
     id: 001,
     name: 'bulbasaur',
     species: 'Seed Pokemon',
     type: ['Grass', 'posion'],
     height: "2'4",
     weight: '15.2 lbs',
     abilities: ['Overgrow', 'chlorophyll']
    };
 });
 })();