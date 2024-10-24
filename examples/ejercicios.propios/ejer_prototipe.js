/*
Ejercicio 1: Agregar métodos adicionales al prototipo
Añade un método al prototipo de Persona llamado despedida, que imprima en consola algo como: "Adiós, soy [nombre]".
Crea un nuevo objeto Persona llamado ana y haz que llame al método despedida.
Resultado esperado:

javascript
Copiar código
ana.despedida(); // "Adiós, soy Ana"
Ejercicio 2: Sobreescribir el método en un solo objeto
Crea un nuevo objeto Persona llamado javier.
Sobreescribe el método saluda solo para javier para que imprima: "¡Hola! Soy Javier, encantado de conocerte".
Verifica que la sobrescritura funcione solo para javier, pero no para otros objetos como rober o pepe.
Resultado esperado:

javascript
Copiar código
javier.saluda(); // "¡Hola! Soy Javier, encantado de conocerte"
rober.saluda();  // "hola, soy rober"
pepe.saluda();   // "hola, soy Pepe"
Ejercicio 3: Crear una nueva clase y heredar de Persona
Crea una nueva clase llamada Cliente que herede de Persona.
Asegúrate de que los objetos de Cliente puedan acceder al método saluda desde el prototipo de Persona.
Crea un nuevo Cliente llamado sofia y haz que llame al método saluda.
Resultado esperado:

javascript
Copiar código
const sofia = new Cliente("Sofia");
sofia.saluda(); // "hola, soy Sofia"
Ejercicio 4: Añadir funcionalidad a través de Object.assign
Crea una nueva función llamada Cocinero, que tenga un método llamado cocina que imprima en consola: "[nombre] está cocinando".
Usa Object.assign para que los objetos de la clase Cliente también puedan cocinar.
Crea un nuevo Cliente llamado manuel y haz que llame a los métodos saluda y cocina.
Resultado esperado:

javascript
Copiar código
manuel.saluda();  // "hola, soy Manuel"
manuel.cocina();  // "Manuel está cocinando"
Ejercicio 5: Herencia múltiple
Crea una nueva función llamada Deportista con un método llamado entrena, que imprima: "[nombre] está entrenando".
Usa Object.assign para que los objetos de la clase Agente también puedan entrenar.
Crea un nuevo Agente llamado gonzalo y haz que llame a los métodos saluda, vuela y entrena.
Resultado esperado:

javascript
Copiar código
gonzalo.saluda();   // "hola, soy Gonzalo"
gonzalo.vuela();    // "Gonzalo está volando"
gonzalo.entrena();  // "Gonzalo está entrenando"
*/