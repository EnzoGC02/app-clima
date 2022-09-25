# App del Clima

App del clima nos provee información del clima actual y de los próximos cincos días.
Por defecto tomará nuestra ubicación actual, y cuenta con un selector de cuatro de las ciudades
mas importante del mundo, y también incluye la ciudad de Buenos Aires.

## Instalación

A continuación describimos los pasos a seguir para ejecutar el proyecto en local
### Clonamos el proyecto desde GitHub

`git clone url https://github.com/EnzoGC02/app-clima.git`

Una vez clonado el proyecto, desde la raíz del directorio del proyecto clonado ejecutamos

`npm install`

### Configuración de credenciales

Dentro de `src/config` encontraremos un archivo llamado `index.example.js`, copiamos su contenido y dentro
del mismo directorio `src/config` creamos un archivo `index.js` y pegamos el contenido copiado de `index.example.js`
La constante `API_BASE_URL` la dejamos tal y como la copiamos. 
Para la constante `API_KEY` debemos reemplazarla por nuestra API KEY obtenida de [https://openweathermap.org/](https://openweathermap.org/)

Después de instalar las dependencias y configurar credenciales, ejecutamos el proyecto en modo desarrollo con

`npm start`

## Cuestiones de implementación

Es importante destacar las decisiones tomadas para desarrollar los componentes de React como así también los estilos
y metodología CSS utilizada. 
Las decisiones de desarrollo y diseño fueron también condicionadas por el tiempo requerido para desarrollar el proyecto,
siendo conscientes de que para proyectos reales y que buscan escalabilidad quizás los patrones utilizados no necesariamente son los mas adecuados para el mismo.

### Diseño de componentes

Los componentes de React fueron diseñados principalmente con el patron de composición, implementado con las características de React tal como **renders props** y **renders functions** con el objetivo principal de evitar el problema de las *props driling* este unos de los principios que nos ofrece el equipo de React como [filosofia](https://es.reactjs.org/docs/composition-vs-inheritance.html)

#### Manejo del estado

El manejo del estado lo haremos con el uso de *custom hooks*, con el fin de reutilizar la logica de estado de los componentes, en la primera versión del proyecto usaremos estados independientes y simples es decir, no compuestos, con la ayuda de `useState` y `useEffect`.
Esta decisión fue tomada para poder aumentar la velocidad del desarrollo y la entrega del challenge.
Sera subida una nueva rama distinguida de la rama `main`, donde pasaremos de usar estados independientes e imperativos, a usar estados compuestos y declarativos con `useReducer` para perseguir cada vez mas la los principios de la `programación funcional`

### Estilos

Los estilos de CSS se escribieron bajo la metodología *BEM* para perseguir las buenas practicas de CSS.

## Funcionalidades a considerar

Algunas funcionalidades no implementadas podrían mejorar la experiencia del usuario, tal como:
* Cambiar el color del background de la pantalla principal de acuerdo:
    * Si el horario que ingresa el usuario es día o noche con un color representativo del momento
    * Dependiendo del tipo de clima actual\(nublado, despejado, lluvioso, etc\), con un color representativo del mismo
* Mostrar con un acceso directo una cantidad arbitraria de las ultimas ciudades consultadas por el usuario
* Implementar un botón que permita volver a la ubicación actual, después de haber seleccionado una cuidad preestablecida