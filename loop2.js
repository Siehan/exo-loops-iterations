//loop2.js

/*
Avec une boucle do-while afficher les éléments du tableau suivant, ligne par ligne:
let tab = ['a', 'b', 'c', 'd', 'e']
*/

let tab = ["a", "b", "c", "d", "e"];
let i = 0;

do {
  console.log(tab[i++]);
} while (i < 5);

/* OUTPUT:
a
b
c
d
e
*/
