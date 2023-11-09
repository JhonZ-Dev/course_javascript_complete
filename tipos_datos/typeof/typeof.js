//tipos de datos string
var nombre = "Jhon";
console.log(nombre);
console.log(typeof nombre); //indica que tipo de dato se esta utilizando

nombre = 10.5;
console.log(typeof nombre); // cambio de tipo de dato

//tipos de datos objeto
var objeto = {
    nombre: "Jhon",
    apellido: "Gomez",
    telefono: "1234567890"
}
console.log(typeof objeto); //indica que tipo de dato se esta utilizando

//Tipos de datos funcion
function miFuncion() {}
console.log(typeof miFuncion); //indica que tipo de dato se esta utilizando

//Tipos de clases 
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona); //indica que tipo de dato se esta utilizando