import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textArea = document.querySelector('textarea[name="user-input"]'); /*obtener el texto del área de texto*/
const metrics = document.querySelectorAll('li'); //trae toda la lista de nodos li


textArea.addEventListener('keyup', function(){ // escucha el evento keyup del textarea, cuando se escribe en el cuadro de texto 

  metrics[0].innerHTML = 'Word Count: ' + analyzer.getWordCount(textArea.value);
  metrics[1].innerHTML = 'Character Count: ' + analyzer.getCharacterCount(textArea.value); //concatenacion del texto con el metodo getCharacterCount
  metrics[2].innerHTML = 'Character Count Excluding Spaces: ' + analyzer.getCharacterCountExcludingSpaces(textArea.value);
  metrics[3].innerHTML = 'Number Count: ' + analyzer.getNumberCount(textArea.value);
  metrics[4].innerHTML = 'Number Sum: ' + analyzer.getNumberSum(textArea.value);
  metrics[5].innerHTML = 'Average Word Length: ' + analyzer.getAverageWordLength(textArea.value);
//console.log(textArea.value);
})

// CLEAR BUTTON //
const button = document.getElementById("reset-button");
button.addEventListener('click', function(){
  textArea.value = '';
  metrics[0].innerHTML = 'Word Cont: ';
  metrics[1].innerHTML = 'Character Count: '; //establece el contenido de la posicion 0 a 'characters'
})