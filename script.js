var pokemonRepository = (function () {
  var pokemonList = [
    {
      name: "bulbas",
      height: 3,
      type: ["grass"],
    },
    {
      name: "kkk",
      height: 2.1,
      type: ["rrr"],
    },
    {
      name: "hhh",
      height: 1.7,
      type: ["zzz"],
    },
    {
      name: "aaa",
      height: 2.7,
      type: ["mmm"],
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

pokemonRepository.add({ name: 'Pikachu' ,height:1});
console.log( pokemonRepository.getAll());
//document.write( pokemonRepository.getAll());
pokemonRepository.getAll().forEach(item=>document.write(`${item.name},${item.height}<br>`))
// Access to IIEF Items
/*let p = foreach(pokemonList.getAll()){
  console.log(p);
});
*/
