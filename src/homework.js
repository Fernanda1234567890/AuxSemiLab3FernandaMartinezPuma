(() => {

  /* Excercises */

  /* First excercise */
  
  let numbers = [1, 2, 3, 4, 5];
  let multi = numbers.map(function(element){
    return element *5
  })

  console.log(multi);

  /* Multiplique los numeros del arreglo por 5 */

  /*Resultado esperado: [5, 10, 15, 20, 25] */

  /* First excercise */

  /* Second excercise */

  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];
    names.sort();
  console.log(names);

  function onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
  }


  /* Ordernar los nombres alfabeticamente */

  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */

  /* Second excercise */

  /* Thrid excercise */

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];
  var unique = data.filter( onlyUnique ); 
    console.info(unique);


  /* Dado un arreglo, crear otro sin letras repetidas */
  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */

  /* Thrid excercise */

  /* Fourth excercise */

  const largeWord = "abcdabcdABCD";
  var contar1 = 0;
var contar2 = 0;
var contar3 = 0;
var contar4 = 0;
var contar5 = 0;
var contar6 = 0;
var contar7 = 0;
var contar8 = 0;
var matches = texto.match(/a/g);
var matches1 = texto.match(/b/g);
var matches2 = texto.match(/c/g);
var matches3 = texto.match(/d/g);
var matches4 = texto.match(/A/g);
var matches5 = texto.match(/B/g);
var matches6 = texto.match(/C/g);
var matches7 = texto.match(/D/g);
if (matches) {
    contar1 = matches.length;
}
if (matches1) {
    contar2 = matches1.length;
}
if (matches2) {
    contar3 = matches2.length;
}
if (matches3) {
    contar4 = matches3.length;
}
if (matches4) {
    contar5 = matches4.length;
}
if (matches5) {
    contar6 = matches5.length;
}
if (matches6) {
    contar7 = matches6.length;
}
if (matches7) {
    contar8 = matches7.length;
}
console.log("a=", contar1);
console.log("b=", contar2);
console.log("c=", contar3);
console.log("d=", contar4);
console.log("A=", contar5);
console.log("B=", contar6);
console.log("C=", contar7);
console.log("D=", contar8);

  /* Dado un string mostrar cuantas veces se repite cada letra*/
  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */

  /* Fourth excercise */

})();
