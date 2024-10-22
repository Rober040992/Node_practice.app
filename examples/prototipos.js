"use strict";
function Persona(nombre) {
    this.nombre = nombre
    //this.saluda = function(){console.log("hola, soy", this.nombre)}
}

// El saluda, se lo vamos a poner a su prototipo, para que lo herede

const rober = new Persona("rober");
const luis = new Persona("luis");

Persona.prototype.saluda = function(){console.log("hola, soy", this.nombre)}     //PUM! Y AHORA FUNCIONA, aunque el objeto no tenga el método saluda, usando el prototype se lo puedes meter
const pepe = new Persona("Pepe");


luis.saluda = function(){console.log("sí, digo hola, pero soy luis")} //Aquí puedo cambiar el prototipo de una sola persona
pepe.saluda()
rober.saluda()
luis.saluda()

//Ahora vamos a las herencias. Quiero hacer un tipo de Objetos llamado Agente que herede de Persona

function Agente(nombre) {
    //heredar el constructor de las personas
    //ejecutar el constructor de las personas, pero con mi "this"
    Persona.call(this, nombre) //con esto heredo todo lo que haga persona. si hay más this que no son customizables TAMBIÉN lo heredan. Si son parámetros a meter, habría que ponerlo detrás de nombre separado por coma

}

//Ahora vamos a heredar las propiedades del prototipo de las personas, por que sí, el protitipo no se hereda automáticamente con el call
//vamos a hacer que agentes y personas compartan un protitopo

Object.setPrototypeOf(Agente.prototype, Persona.prototype)

const smith = new Agente("Smith")

smith.saluda()  // ha heredado la capacidad de llamarse smith gracias a las personas y la capacidad de saludar gracias a los prototipo de las personas


//quiero que los agentes hereden tanto de las personas como de los superheroes (HERENCIA MÚLTIPLE se le llama)

function Superheroe() {
    this.vuela = function() {console.log(this.nombre, "está volando")}
}

//copiar todas las propiedades de los Superheroes. Para copiar todas las propiedades de un objeto a otro:
Object.assign(Agente.prototype, new Superheroe())

smith.vuela()

console.log(smith)
console.log(Agente.prototype)
console.log(smith instanceof Persona)
console.log(smith instanceof Agente)
console.log(smith instanceof Superheroe)