const analyzer = {  

  
  getWordCount: (text) => {
  //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    return text.split(' ').length; //metodo slip toma una cadena como argumento y devuelve una matriz de subcadenas. La matriz contiene todas las palabras de la cadena original
  //length devuelve un numero entero que representa el numero de palabras en la cadena                     
  },
  // console.log('Primer resultado: ' + text)

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length; 
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const regex = /\S/g; //Es una expresión regular donde \s significa "coincidir con espacios en blanco" 
    //y g es una bandera que significa "global", es decir, coincide con todos los 
    //espacios en blanco, no solo con el primero.
    
    return text.split(regex).length - 1;
  },

  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const aveLeng = text.split(' ');
    
    let sumaAveLeng = 0;
    for(let i=0; i<aveLeng.length; i++){
      sumaAveLeng += aveLeng[i].length
    }
    return Math.round(sumaAveLeng/aveLeng.length);
    

  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    /*const cadena = text.replace(/[^0-9]+/g, "");
    console.log(cadena)
    return cadena.length;*/

    /*const cadena = text.replace(/[^0-9]+/g, "");
    const resul = cadena.split('');
    console.log(resul)
    return cadena.length;*/

    let countNumber = 0;
    //const cadena = text.replace(/[^0-9]+/g, "");
    const resul = text.split(' '); // [HOLA12, 12, 3, CHAO]
    //console.log(countNumber+resul)
    

    for(let i=0; i<(resul.length); i++){
      // if(typeof cadena[i]!== 'numero' || !Number.isInteger(cadena[i])){  
      if (resul[i] === '') {
        continue;
      }  
      if(!isNaN(resul[i])){
        //if(isNaN(cadena[i])){
        countNumber= countNumber+1;
      }
      
    }
    return countNumber;

    //extrar el arreglo de caracteres con split
    //recorrer el arreglo  con un for 
    //dentro del for preguntar con la expresion regular si cada caracter  me devuelve un true
    //si la expresion regular me da true aumenta el contador
    //retornar contador
    // console.log(expr.test(text))

  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    
    const cadenaN = text.split(' '); // [HOLA12, 12, 3, CHAO]
    let sumNumber = 0;
    for(let i=0; i<cadenaN.length; i++){ 
      if(cadenaN[i] === '') {
        continue;
      }  
      if(!isNaN(cadenaN[i])){
        sumNumber = sumNumber + parseFloat(cadenaN[i]); //el dato lo convierte a entero
      }
    }
    return sumNumber;
  },
  
};

export default analyzer;









