# 2 pasos siguientes a la creación de nuestra app y modificaciones:

## 1 mejora de puerto ;
- creación de una variable de entorno para que nuestra app use esta en vez de la 3000 siempre
	const port =  process.env.PORT || 3000
	en el _console.log_ de server.on crear un __template ${port}__
-en bash; __PORT=3001 por ejm__

## 2 instalando/usando __librería _DEBUG_ __ 

- npm i debug
el repo: (https://github.com/debug-js/debug)
Proporciona una manera estructurada de generar mensajes de depuración (logs) que pueden ser activados y desactivados de manera selectiva.

- si queremos abrir el repo de este framework ponemos en la consola: 
_npm repo nombreframework_

- importamos la librería/framework
_import debugFrame from 'debug'_

- creamos const con el nombre que la hemos importado(debugFrame) y usando el name del packagejson ejm:(nodeapp)
_const debug = debugFrame('nodeapp:server')_

- ahora cambiamos nuestro _console.log_ del server.on por la palabra _debug_

- Activar y desactivar mensajes de depuración
- instalamos cross-env para que funcione en Windows o mac por igual
__npm i cross-env__
-ahora usamos esto pero es mejor crear el paso siguiente
__DEBUG=nodeapp:* node --watch server.js__
para hacer esto mas rápido nos vamos al package.json y en "scripts": creamos esto; __"dev": "cross-env DEBUG=nodeapp:* node --watch server.js"__
y en la consola usamos __npm run dev__ en vez de el DEBUG=...etc...

- nos subscribimos al evento error (esto escribe el error en consola) con el siguiente comando, esto lo ponemos encima de el evento listening 
__server.on('error', err => console.error(err))__


