/*
sumAll3D.js

Écrivez un programme qui affiche la somme de tous les nombres présents dans ce tableau (qui contient des tableaux)

let tab = [
  [
    [1, 7, 3],
    [11, 17, 7],
    [-3, -5],
    [5, 13],
  ],
  [
    [2, 4, 6, 8, 10],
    [1, 3, 5],
  ],
  [[0]],
  [[0], [1], [2], [1]],
]
*/

let tab = [
  [
    [1, 7, 3],
    [11, 17, 7],
    [-3, -5],
    [5, 13],
  ],
  [
    [2, 4, 6, 8, 10],
    [1, 3, 5],
  ],
  [[0]],
  [[0], [1], [2], [1]],
];

let nbTotal = 0;

for (let i = 0; i < tab.length; ++i) {
  for (let j = 0; j < tab[i].length; ++j) {
    for (let k = 0; k < tab[i][j].length; ++k) {
      nbTotal += +tab[i][j][k];
    }
  }
}
console.log(`The total of all numbers of array and nested array is ${nbTotal}`);

// OUTPUT : The total of all numbers of array and nested array is 99
