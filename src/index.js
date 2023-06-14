import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textArea = document.querySelector('textarea[name="user-input"]'); /*obtener el texto del área de texto*/
const metrics = document.querySelectorAll('li'); //trae toda la lista de nodos li


textArea.addEventListener('keyup', function(){ // escucha el evento keyup del textarea, cuando se escribe en el cuadro de texto 

  metrics[0].innerHTML = 'Caracteres: ' + analyzer.getCharacterCount(textArea.value);
  metrics[1].innerHTML = 'Caracteres Sin Espacio: ' + analyzer.getCharacterCountExcludingSpaces(textArea.value);
  metrics[2].innerHTML = 'Palabras: ' + analyzer.getWordCount(textArea.value); //concatenacion del texto con el metodo getCharacterCount
  metrics[3].innerHTML = 'Números: ' + analyzer.getNumberCount(textArea.value);
  metrics[4].innerHTML = 'Suma números: ' + analyzer.getNumberSum(textArea.value);
  metrics[5].innerHTML = 'Promedio longitud: ' + analyzer.getAverageWordLength(textArea.value);
//console.log(textArea.value);
})

// CLEAR BUTTON //
const button = document.getElementById("reset-button");
button.addEventListener('click', function(){
  textArea.value = '';
  metrics[0].innerHTML = 'Caracteres: ';
  metrics[1].innerHTML = 'Caracteres Sin Espacio: '; //establece el contenido de la posicion 0 a 'characters'
  metrics[2].innerHTML = 'Palabras ';
  metrics[3].innerHTML = 'Números: ';
  metrics[4].innerHTML = 'Suma números: ';
  metrics[5].innerHTML = 'APromedio longitud: ';
  
})