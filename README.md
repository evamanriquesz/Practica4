#PRÁCTICA 4 - APPLE CON JAVASCRIPT

## OBJETIVO DE LA PRÁCTICA
El objetivo de esta práctica es , empleando los conocimientos adquiridos sobre HTML, CSS y Javascript, crear un documento web
que permita interaccionar con una API REST y visualizar el documento con la información. 

Además, este documento deberá emplear el Framework CSS Bootstrap. 
## EXPLICACIÓN

Para esta práctica, he creaado una página para Apple. 

En la parte superior de cualquiera de las pantallas encontramos la cabecera, que contiene el logo de la empresa y los
botones para cambiar a cualquiera de las otras páginas. En la parte inferior de todas ellas también encontramos un objeto 
de paginación para poder cambiar de ventana desde ahí también, además de tres botones para acceder a las redes sociales de la marca; 
y un botón (flechas hacia arriba), para subir al principio de la página. He empleado Javascript para los eventos que suceden 
al pulsar dichos botones. 

En la página de Inicio, tenemos un Carrusel de imagenes con un texto en su interior indicando que esta sección contiene las
últimas noticias de la empresa. También aparece una alerta para avisar de que el plazo para enviar solicitudes de trabajo
termina hoy. Podemos acceder al formulario pulsando en la palabra Contáctanos de la alerta. Esta alerta puede quitarse pulsando la . 
Debajo, podemos leer un resumen de las noticias, y si queremos, podemos ir a leer la noticia completa pinchando donde nos indican. 

En la página Productos, vemos varios cuadros, con imágenes de los productos en su interior. Estos cuadros son flexibles: se
adaptan a lo que contienen. La primera imagen, la del producto más novedoso de la marca, cuenta con un botón para acceder 
directamente a la web de Apple y poder comprarlo. 

En la página Iniciativas Sostenibles, se recogen tres de las iniciativas de Apple. Pulsando sobre cada imagen se despliega
un objeto modal que nos explica en qué consisten. Además, tanto en la introducción como encima de cada foto, encontramos títulos
y párrafos. 

En la página Bolsa, es donde encontramos la información que hemos obtenido de la API. La API que he utilizado es Alpha Vantage API.
Esta API te devuelve en formato JSON información sobre cualquiera de las empresas que desees. Para indicar sobre qué empresa 
se requiere la información, se añadirá en el fetch un parámetro de la url (simbols), en el que hay que introducir el ticker 
de la empresa (APPL en mi caso). También hay que proporcionar una API key en la url para poder acceder a los datos. 

En primer lugar, he obtenido el valor de apertura, el valor más alto, el más bajo, y el valor de cierre para la última jornada 
disponible (indicándolo en la url con un parámetro: latest). He mostrado la información que me devolvía en Cards. Estas Cards
tienen su header, y debajo, un contenedor para la información. Para extraer la información de la API, en primer lugar he 
creado una función asíncrona (getTimeSeriesDaily), la cual introduce devuelve información en formato JSON. A continuación, 
he creado 4 funciones (addOpenToCard, addHighToCard, addLowToCard, addCloseToCard) para colocar la información en las Cards 
donde les corresponde. Para el código de estas funciones, he probado a hacerlo de la manera clásica, accediendo al DOM, tal 
y como aprendimos en clase, pero he investigado sobre JQuery, y finalmente he optado por usarlo ya que me ha parecido más sencillo. 
No obstante, he dejado comentado el código que en una primera instancia utilicé para navegar por el DOM. Ambos códigos, el 
convencional y el de JQuery, consiguien el mismo resultado. 

Para añadir más funcionalidad a la aplicación, he añadido también los datos de la bolsa de valores de Apple del día anterior
al actual. Para ello, he creado un vector con las fechas que me devuelve el JSON, para poder iterar sobre él, y poder escoger
los datos de los dos últimos días. 

Por último, en la página de la Bolsa he querido mostrar los resultados de algunos competidores de Apple, como son Microsoft, 
Samsung, Xiaomi, o Alphabet (la filial de Google). Para ello, he modificado la url para el fetch, cambiando el parametro simbols. 
Además, para representarlo en la web, he añadido entre las 4 funciones para mostrar los valores, la creación de elementos desde
Javascript en el HTML para que la apariencia sea más amigable, y se entienda correctamente la información.  

En la última página, Contáctanos, podemos enviar nuestra solicitud de trabajo. El formulario nos avisará si entregamos el
formulario con algún campo vacio; o nos mostrará la información si ha sido correcta. 

Para tratar de hacer la página lo más accesible posible, he utilizado el atributo alt en todas las imágenes. 

## PROBAR LA PRÁCTICA

Para probar el correcto funcionamiento de la práctica: 
* En Inicio
  * Deslizarte por el carrusel de imágenes
  * Pinchar en Contáctanos en la alerta para comprobar que te lleva a la página de Contáctanos
  * Eliminar la alerta pulsando en la X
  * Leer las noticias
  * Pinchar en "Pinche aquí" para comprobar que te lleva al lugar correcto
  * Cambiar de página usando los botones superiores o el objeto de paginación inferior
  * Acceder a las redes sociales 
  * Doble click en las fechas para subir arriba
* En Productos
  * Ojear todos los productos
  * Acceder a la página web del Iphone 13 Pro para comprarlo
  * Cambiar de página usando los botones superiores o el objeto de paginación inferior
  * Acceder a las redes sociales
  * Doble click en las fechas para subir arriba
*En Iniciativas Sostenibles
  * Deslizarte para ver todas las imágenes
  * Pinchar en cualquiera de ellas para comprobar que se abre un Objeto Modal 
  * Cerrar ese objeto
  * Cambiar de página usando los botones superiores o el objeto de paginación inferior
  * Acceder a las redes sociales
  * Doble click en las fechas para subir arriba
* Bolsa 
  * Deslizarte para ver todos los valores (y comprobar en Internet que son correctos).
    * Nota. Los datos que nos ofrecerá son los del día anterior y los de hace dos, ya que disponemos de máximos, mínimos, apertura y cierre.
  * Cambiar de página usando los botones superiores o el objeto de paginación inferior
  * Acceder a las redes sociales
  * Doble click en las fechas para subir arriba
* Contáctanos
  * Rellenar el formulario
  * Probar a equivocarse rellenando los campos para ver cómo te avisa
  * Cambiar de página usando los botones superiores o el objeto de paginación inferior
  * Acceder a las redes sociales
  * Doble click en las fechas para subir arriba
