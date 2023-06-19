/*Biggest Smallest
En este ejercicio deberás:

1- Escribir una Función llamada biggest_smallest que tenga un Argumento (que haga referencia a un Arreglo de números).

2- Utilizar el método forEach() para encontar el número más grande y el número más chico.

3- La función debe devolver por consola un Arreglo que contenga los números mínimo y máximo.*/



let arregloDeNum = [8, 4, 58, 23, 10, 89, 14, 5, 86];
let mayorValor = -Infinity;
let menorValor = Infinity; 
arregloDeNum.forEach(biggest_smallest => {
   
   if (biggest_smallest < menorValor) 
       menorValor = biggest_smallest;

   if (biggest_smallest > mayorValor) 
       mayorValor = biggest_smallest;
}) 
console.log(mayorValor);
console.log(menorValor);