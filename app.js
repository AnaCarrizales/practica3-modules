//SEGUNDA PARTE DE LA PRÁCTICA
require('./greet') //mandar llamar el module


//PRIMERA PARTE DE LA PRÁCTICA
/*function greet() {
    console.log('Hello');
}
let logGreeting = (miParametro) => miParametro();

logGreeting(greet);
*/

//Código refactorizado
let logGreeting = (miParametro) => miParametro();
logGreeting(function () { //Function created on the fly
    console.log('Hello from a function created on the fly')//mensaje a imprimir
})

//"Clasic" string interpolation
let logGreeting1 = (miNombre, miColor) => {
    console.log("Hola " + miNombre + " buenos días! Tu color favorito es el " + miColor); //los signos de + y las comillas "" son usados para interpolar las variables con las cadenas
}
logGreeting1("Ana","verde");//Llenamos variables miNombre y miColor
