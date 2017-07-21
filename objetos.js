// prompt ("hola mundo!");

function mainObj() {
    var questions = [
     {    
        question: '¿Cuantos departamentos tiene el Peru?',
        rpta: 24
     },
     { 
        question: '¿Cuantos continentes existen?',
        rpta: 7
     },
     {
        question: '¿Cuantos años tiene tiene PPK?',
        rpta: 78
     }
   ];
   for (var i = 0; i <   questions.length; i++)
      alert ( questions[i].question + " => " + questions[i].rpta);
  
   
   var i = 0, correctos = 0; 
   while ( i < questions.length) {
      var q = questions[i];
      var rpta = parseInt(prompt ( q.question ));
      if (rpta === q.rpta )
         correctos++;
      i++;
   }
   alert ("Numero de respuestas correctas: " + correctos);
   
}

function main () {
   var questions = [
     ['¿Cuantos departamentos tiene el Peru?', 24],
     ['¿Cuantos continentes existen?', 7],
     ['¿Cuantos años tiene tiene PPK?', 78]
   ];
   for (var i = 0; i <   questions.length; i++)
      alert ( questions[i][0] + " => " + questions[i][1]);
   
   var i = 0, correctos = 0; 
   while ( i < questions.length) {
      var q = questions[i];
      var rpta = parseInt(prompt ( q[0] ));
      if (rpta === q[1] )
         correctos++;
      i++;
   }
   alert ("Numero de respuestas correctas: " + correctos);
}
