# App del Clima

App del clima nos provee informacion del clima actual y de los proximos cincos dias.
Por defecto tomará nuestra ubicacion actual, y cuenta con un selector de cuatro de las ciudades
mas importante del mundo, y tambien incluye la ciudad de Buenos Aires.

## Instalación

Clonamos el proyecto desde GitHub

`git clone url https://github.com/EnzoGC02/app-clima.git`

Una vez clonado el proyecto, desde la raiz del directorio de la carpeta del proyecto clonado ejecutamos

`npm install`

Despues de instalar las dependencias, desde la raiz del directorio ejecutamos el proyecto en modo desarrollo con

`npm start`

## Cuestiones de implementacion

Es importante destacar las desiciones tomadas para desarrollar los componentes de React como asi tambien los estilos
y metodoliga CSS utilizada. 
Las desiciones de desarrollo y diseño fueron tambien condicionadas por el tiempo requerido para desarrollar el proyecto,
siendo concientes de que para proyectos reales y que buscan escalabilidad quizas los patrones utilizados no necesariamente
son los mas adecuados para el mismo.

### Componentes de React

Los componentes de React fueron diseñados principalmente con el patron de **renders props** con el fin de evitar
el problema de las *props driling* y evitamos tambien el uso de alguna tecnica mas compleja como lo es Context, o incluso
Redux.

#### Ventajas

La principal ventaja fué mencionada anteriormente, al evitarnos las *props driling* pero es tambien importante destacar que
el patron de **renders props** nos deja un codigo facilmente escalable hacia una arquitectura de componentes mas compleja como 
un **diseño atomico** por ejemplo.

### Estilos

Los estilos de CSS se escribieron bajo la metodologia *BEM* para perseguir las buenas practicas de CSS.

### Funcionalidades a considerar

Algunas funcionalidades no implementadas podrian mejorar la experiencia del usuario, tal como:
*Cambiar el color del background de la pantalla principal de acuerdo:
    *Si el horario que ingresa el usuario es dia o noche con un color representativo del momento
    *Dependiendo del tipo de clima actual\(nublado, despejado, lluvioso, etc\), con un color representativo del mismo
*Mostrar con un acceso directo una cantidad arbitraria de las ultimas ciudades consultadas por el usuario