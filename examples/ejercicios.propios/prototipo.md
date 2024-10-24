# Ejercicios de práctica

1. Añade un método al prototipo de `Persona` llamado `despedida`, que imprima en consola algo como: "Adiós, soy [nombre]". Crea un nuevo objeto `Persona` llamado `ana` y haz que llame al método `despedida`. 
**Resultado esperado**: ```javascript ana.despedida(); // "Adiós, soy Ana" ```

2. Crea un nuevo objeto `Persona` llamado `javier`. Sobreescribe el método `saluda` solo para `javier` para que imprima: "¡Hola! Soy Javier, encantado de conocerte". Verifica que la sobrescritura funcione solo para `javier`, pero no para otros objetos como `rober` o `pepe`. 
**Resultado esperado**: ```javascript javier.saluda(); // "¡Hola! Soy Javier, encantado de conocerte" rober.saluda();  // "hola, soy rober" pepe.saluda();   // "hola, soy Pepe" ```

3. Crea una nueva clase llamada `Cliente` que herede de `Persona`. Asegúrate de que los objetos de `Cliente` puedan acceder al método `saluda` desde el prototipo de `Persona`. Crea un nuevo `Cliente` llamado `sofia` y haz que llame al método `saluda`. 
**Resultado esperado**: ```javascript const sofia = new Cliente("Sofia"); sofia.saluda(); // "hola, soy Sofia" ```

4. Crea una nueva función llamada `Cocinero`, que tenga un método llamado `cocina` que imprima en consola: "[nombre] está cocinando". Usa `Object.assign` para que los objetos de la clase `Cliente` también puedan cocinar. Crea un nuevo `Cliente` llamado `manuel` y haz que llame a los métodos `saluda` y `cocina`. 
**Resultado esperado**: ```javascript manuel.saluda();  // "hola, soy Manuel" manuel.cocina();  // "Manuel está cocinando" ```

5. Crea una nueva función llamada `Deportista` con un método llamado `entrena`, que imprima: "[nombre] está entrenando". Usa `Object.assign` para que los objetos de la clase `Agente` también puedan entrenar. Crea un nuevo `Agente` llamado `gonzalo` y haz que llame a los métodos `saluda`, `vuela` y `entrena`. 
**Resultado esperado**: ```javascript gonzalo.saluda();   // "hola, soy Gonzalo" gonzalo.vuela();    // "Gonzalo está volando" gonzalo.entrena();  // "Gonzalo está entrenando" ```
