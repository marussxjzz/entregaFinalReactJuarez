Proyecto React CoderHouse e-commerce "Funko's"

Funko's, como lo dice su nombre, es un e-commerce de venta de Funko Pop.

Consiste de:

1. Navbar: Se puede observar siempre desde cualquier componente. Contiene el nombre de la página, una serie de botones que redirigen hacia Home y las categorías. También se puede observar el ícono de un cart que va a ir aumentando la cantidad de productos que se vayan agregando y el cuál, te lleva a tu carrito de compras al clickearlo.
  
2. Homepage: Inicia con un carrusel de los productos a modo de presentación, le sigue un catálogo de las categorías con sus respectivas imágenes que funcionan al igual que las categorías del Navbar y por último, un listado de todos los productos. Estos productos contienen nombre, precio y un botón de ver detalle que lleva hacia las especificaciones del mismo.

3. Categorías: Mi e-commerce consiste únicamente de tres categorías (Attack on Titan, Barbie y Disney). Dentro de cada una, se filtran todos los productos relacionados a las mismas.

4. Detalles del producto: En la vista del detalle del producto, a parte de la información ya prevista, se puede observar un contador que solo permite acceder hasta diez veces el mismo producto para agregarlos al carrito.

5. Cart: Aquí es donde estarán todos los productos seleccionados con su respectivo precio y la cantidad elegida. De querer eliminar un producto, se puede hacer con el boton 'remove item'. Debajo de todos los productos, se encuentra el total de la compra y dos botones: 'Empty Cart' para vaciar el carrito actual y 'Buy' para proceder con la compra.

6. Formulario: Al consentir la compra, se te enviará a un formulario que se debe completar con ciertos datos, para luego enviarlos a nuestra base de datos de colección 'orders'. Luego de completar todo y clickear 'Submit order', se te mostrará un Id de la orden realizada.

7. Empty Cart: De haber seleccionado esta opción en el Cart, se vaciará el carrito, mostrando un alert y un botón para volver a la homepage.

Para la creación del e-commerce, se utlizó: ChakraUI para estilos, react-responsive-carousel para el carrusel, react-router-dom (useParams, Link as RouterLink), context, firebase/firestore (colección 'funkos' para traer los productos y 'orders' para almacenar los datos del formulario).

![entregaFinalReact](https://github.com/marussxjzz/preEntrega2ReactJuarez/assets/135673448/c386417b-7a31-4b35-b925-59a84798fdac)
