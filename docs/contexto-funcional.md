# Contexto funcional de Relatos de Papel

Este documento resume informacion funcional util extraida del enunciado complementario de Relatos de Papel. Sirve como contexto de dominio para entender hacia donde podria evolucionar la aplicacion, diferenciando entre el alcance implementado en esta practica DWFS y funcionalidades futuras.

## Contexto de negocio

Relatos de Papel es una libreria que busca abordar su transformacion digital mediante una aplicacion web. El objetivo de negocio es ampliar el alcance de la tienda fisica, facilitar la compra en linea y permitir a clientes existentes y nuevos explorar el catalogo desde cualquier ubicacion.

La aplicacion debe conservar la esencia de la libreria, pero adaptarse a nuevos habitos de consumo: compra online, catalogo digital, productos fisicos y productos digitales con entrega inmediata.

## Necesidades funcionales identificadas

### Usuarios

- Registro de usuarios mediante correo electronico.
- Inicio de sesion.
- Recuperacion de acceso a la cuenta.
- Cuenta obligatoria para comprar productos, registrar pedidos, gestionar cancelaciones o modificaciones y acceder a recursos digitales.

### Busqueda y exploracion de productos

- Busqueda de libros por titulo, autor, genero o palabras clave.
- Filtros por precio, popularidad o fecha de lanzamiento.
- Consulta de catalogo actualizado.
- Indicacion clara de stock y productos agotados.

### Carrito y compra

- Adicion de libros al carrito desde el detalle del producto o desde resultados de busqueda.
- Resumen visible del carrito con numero de items y total acumulado.
- Modificacion o eliminacion de items antes del pago.
- Aplicacion de cupones de descuento durante el pago.
- Control de inventario para evitar sobreventa.

### Pago y pedidos

- Proceso de pago con multiples metodos.
- Historial de pedidos con fecha, productos, total pagado y estado del envio.
- Seguimiento de entrega mediante numero de seguimiento.
- Cancelacion o modificacion de pedidos antes del envio, segun politicas de la tienda.

### Productos fisicos y digitales

- Venta de libros fisicos.
- Venta de productos digitales.
- Entrega instantanea para recursos digitales, asociada a la cuenta del usuario.

### Comunidad y resenas

- Visualizacion de comentarios y resenas sobre libros.
- Publicacion de resenas por usuarios que hayan comprado el producto.
- Moderacion de resenas para garantizar relevancia y cumplimiento de normas.

### Soporte e incidencias

- Sistema de soporte integrado para incidencias de envio.
- Gestion de retrasos o problemas en paquetes.
- Posibilidad de reembolso o reenvio segun el caso.

### Internacionalizacion, accesibilidad y rendimiento

- Enfoque multilingue con cambio de idioma desde la cuenta.
- Compatibilidad con navegadores web y dispositivos moviles.
- Diseno responsive.
- Usabilidad y accesibilidad como criterios prioritarios.
- Preparacion para alta demanda.
- Objetivo de busqueda inferior a dos segundos bajo cargas elevadas.

## Alcance implementado en esta practica DWFS

La practica DWFS actual implementa una version frontend y simulada de parte de este dominio:

- SPA desarrollada con React y Vite.
- Landing page de Relatos de Papel.
- Catalogo de libros basado en mocks.
- Busqueda por titulo.
- Detalle de libro.
- Carrito global con gestion de cantidades.
- Login simulado con usuario mock.
- Rutas protegidas para checkout y perfil.
- Checkout simulado mediante confirmacion con window.alert.
- Perfil de usuario con ultimos pedidos mock.
- Persistencia local mediante localStorage.
- Diseno responsive.

## Funcionalidades fuera del alcance actual

Estas funcionalidades aparecen en el contexto funcional del producto, pero no forman parte de la practica DWFS actual al no existir backend real ni integraciones externas:

- Registro real de usuarios.
- Recuperacion real de acceso a cuenta.
- Gestion real de stock.
- Pago real con proveedor externo.
- Cupones reales.
- Historial real de pedidos.
- Seguimiento de envios.
- Recursos digitales descargables o activables.
- Resenas reales y moderacion.
- Sistema de soporte.
- Internacionalizacion completa.
- Optimizacion para alta concurrencia.

## Posible evolucion futura

En actividades posteriores, este frontend podria conectarse con un backend de microservicios para implementar:

- Servicio de usuarios.
- Servicio de catalogo e inventario.
- Servicio de carrito y pedidos.
- Servicio de pagos.
- Servicio de resenas.
- Servicio de soporte.
- Integracion con base de datos.
- Entrega de recursos digitales.
- Observabilidad, escalabilidad y despliegue productivo.
