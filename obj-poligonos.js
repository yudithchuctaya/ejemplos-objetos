function Poligono(n, L){
   this.n = n;
   this.L = L;
   this.area = function() {
      var apotema =  this.L / ( 2 * Math.tan (  3.1416 / this.n));
      return apotema * this.perimetro ()  / 2; 
   }
   this.perimetro = function () {
      return this.n * this.L;
   }
}

function main () {
   
   var lados = [5, 6, 7, 9, 12 , 15];
   for ( var i in lados ) {
      var n = lados [i];      
      var p = new Poligono (n, 10);
      
      alert ("Poligono de " + n + " lados \n" + 
             "Area: " + p.area () + "\n " + "Perimetro: " + p.perimetro() );
   }
   
}