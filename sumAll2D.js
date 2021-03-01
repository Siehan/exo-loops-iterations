/*
  sumAll2D.js

  Écrivez un programme qui affiche la somme de tous les nombres présents dans ce tableau
  (qui contient des tableaux)

  let tab = [
    [1, 2, 3],
    [4, -5, 7],
    [-3, -6],
    [10, -13],
  ]
  */

let tab = [
  [1, 2, 3],
  [4, -5, 7],
  [-3, -6],
  [10, -13],
];

let nbTotal = 0;

for (let i = 0; i < tab.length; ++i) {
  for (let j = 0; j < tab[i].length; ++j) {
    nbTotal += +tab[i][j];
  }
}
console.log(`The total of the numbers of the 4 array is ${nbTotal} !!`);

// OUTPUT : The total of the numbers of the 4 array is 0 !!
