function main () {
   var person = {
     name: "Alex",
     surname: "Ocsa",
     dni: 43585849,
     bithday : "12/04/86",
     adress: "Los Olmos D1",
     nationality : "Peruano",
     age : function () {

     }
   };
   for (var property in person ) 
      alert (property + " : " + person [property] );
}
