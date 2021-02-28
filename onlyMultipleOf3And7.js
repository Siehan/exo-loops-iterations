/*
onlyMultipleOf3And7.js

En vous inspirant de l'un des exemples du cours d'aujourd'hui sur les boucles,
écrire un programme qui n'affiche que les multiples de 3 et 7 entre 1 et 1000.
L'opérateur % peut vous aider à trouver si un nombre est multiple d'un autre.
*/

for (let i = 1; i <= 1000; ++i) {
  if (i % 3 && i % 7) {
    continue;
  }
  console.log(i);
}

/*
OUTPUT :
3
6
7
9
12
14
15
18
21
24
27
28
30
33
35
36
39
42
45
48
49
51
54
56
57
60
63
....
826
828
831
833
834
837
840
843
846
847
849
852
854
855
858
861
864
867
868
870
873
875
876
879
882
885
888
889
891
894
896
897
900
903
906
909
910
912
915
917
918
921
924
927
930
931
933
936
938
939
942
945
948
951
952
954
957
959
960
963
966
969
972
973
975
978
980
981
984
987
990
993
994
996
999
*/