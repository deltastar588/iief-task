var pokemonRepository = (function () {
  var pokemonList = [
    {
      name: "Charmander",
      height: 2,
      type: ["fire"],
    },
    {
      name: "Charizard",
      height: 5.07,
      type: ["fire", "flying"],
    },
    {
      name: "Wartortle",
      height: 3.03,
      type: ["water"],
    },
    {
      name: "Nidoqueen",
      height: 4.03,
      type: ["poison","ground"],
    },
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

 return {
    getAll: getAll,
    add: add
  };
})();

pokemonRepository.add({ name: 'Blastoise' ,height:5.03, type:["grass", "electric"]});
console.log( pokemonRepository.getAll());
//document.write( pokemonRepository.getAll());
pokemonRepository.getAll().forEach(item=>document.write(" Name: "+ `${item.name}, Hieght: ${item.height}, Type: ${item.type}<br>`))
// Access to IIEF Items
/*let p = foreach(pokemonList.getAll()){
  console.log(p);
});
*/
