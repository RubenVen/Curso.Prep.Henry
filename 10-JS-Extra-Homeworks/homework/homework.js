// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  var array = [];
  var array2 = [];
  var str = "";

  for (let i in objeto) {
    str = Object.keys(objeto);
    array.push(objeto[i]);
  }
  for (let j in array) {
    array2[j] = [str[j], array[j]];
  }
  return array2
  
  //Otra forma de hacerlo es:
  // var array = Object.entries(objeto);
  // return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  
  var count = 0;
 
  var objeto = {};

  for (var i = 0; i < string.length; i++) {
    var count = 0;
    for (var j = 0; j < string.length; j++) {
      if (string[i] === string[j]) {
        count++;
        objeto[string[i]] = count;
      }
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  
  var str = "";
  var str2 = "";
  var str3 = "";
  var str4 = "";
  var strMay;


  for (var i = s.length - 1; i >= 0; i--) {
    if (s[i] === s[i].toUpperCase()) {
      str += s[i];
    }
    else { 
      str2 += s[i];
    }
  }

  for (var j = str.length - 1; j >= 0; j--) {
    str3 += str[j];
  }

  for (var n = str2.length - 1; n >= 0; n--) {
    str4 += str2[n];  
  }

  strMay = str3 + str4;
  return strMay;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  var str2 = "";
  var str3 = [];
  var str4 = "";

  for (var i = str.length - 1; i >= 0; i--) {
  str2 += str[i];
  }
  str3 = str2.split(" ");

  for (var z = str3.length - 1; z >= 0; z--) {
    str4  += str3[z] + " ";
  }
  str4 = str4.slice(0, str4.length - 1);

  return str4;


} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
  var numeroStr = " " + numero;
  var numeroStr = numeroStr.trim();

  for (var i = 0; i < numeroStr.length / 2; i++) {

    for (var m = numeroStr.length - 1; m >= 2; m--) {
        
    }  
  }
  if (numeroStr[i] === numeroStr[m]) {
          return "Es capicua";
  }
  else {
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  
  var str = "";
  var str2 = "";

  for (var i = 0; i < cadena.length; i++) {
     if (cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c") {
         str = cadena[i].slice();
      }
      else {
        str2 += cadena[i];
      } 
  }
  return str2;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  var str;

  for (var i = 0; i < arr.length; i++) {
      
      for (var x = i; x < arr.length; x++) {
        
         if (arr[i].length > arr[x].length) {
            str = arr[i];
            arr[i] = arr[x];
            arr[x] = str;
         }
      }
  }
  return arr; 
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  
  var union = [];

  for (var i = 0; i < arreglo1.length; i++) {
    
    for (var x = 0; x < arreglo2.length; x++) {
    
      if (arreglo1[i] === arreglo2[x]) {
        union.push(arreglo1[i]);
      }
    }
  }
  return union;
} 
  
  




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

