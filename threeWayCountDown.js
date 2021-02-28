/*
threeWayCountDown.js

Écrire avec 3 boucles différentes, un décompte de 101 à 1 en décomptant de 2 en 2: L'affichage attendu:
101
99
97
95
....
5
3
1

*/

// Loop FOR

let i = 101;

for (let i = 101; i > 0; i -= 2) {
  console.log(i);
}

// Loop WHILE

let j = 103;

while (j > 1) {
  j -= 2;
  console.log(j);
}

// Loop DO-WHILE

let k = 103;

do {
  console.log((k -= 2));
} while (k > 1);

/*
OUTPUT for the 3 Loops:
101
99
97
95
93
91
89
87
85
83
81
79
77
75
73
71
69
67
65
63
61
59
57
55
53
51
49
47
45
43
41
39
37
35
33
31
29
27
25
23
21
19
17
15
13
11
9
7
5
3
1
*/
