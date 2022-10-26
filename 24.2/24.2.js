function Pokemon(pokemonName, pokemonType, pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
    }

let charmander = new Pokemon("Charmander", "Fire", ["fire", "stone"]);
let chikorita = new Pokemon("Chikorita", "flying", ["grass", "water"]);
let clefable = new Pokemon("Clefable", "Fairy", ["Electric", "Rock"]);




Pokemon.prototype.callPokemon = function(){
    console.log(`I choose you, ${this.name}`);
}

clefable.callPokemon();



Pokemon.prototype.attack = function(num){
    console.log(`${this.name} used ${this.attackList[num]}`);
}

chikorita.attack(1);