# Relatos de Papel

SPA de libreria online desarrollada con React y Vite. El proyecto simula una tienda de libros con catalogo, detalle de producto, autenticacion mock, carrito global, checkout protegido y perfil de usuario con pedidos recientes.

## Descripcion

Relatos de Papel es una aplicacion frontend orientada a practicar arquitectura de SPA, enrutado, gestion de estado compartido y experiencia de usuario responsive. No usa backend real: los libros, el usuario y los pedidos se sirven desde mocks locales.

## Contexto funcional del producto

El proyecto se basa en el caso transversal Relatos de Papel: una libreria que aborda su transformacion digital para ampliar su alcance mas alla de la tienda fisica, permitir la exploracion de catalogo online y facilitar la compra de libros fisicos y digitales.

El contexto funcional completo contempla gestion de usuarios, busqueda avanzada por titulo, autor, genero o palabras clave, filtros, carrito, control de stock, pagos, pedidos, productos digitales, resenas, soporte, internacionalizacion, accesibilidad y requisitos de rendimiento.

En esta practica DWFS se implementa una version frontend simulada centrada en catalogo, busqueda por titulo, detalle de libro, carrito, login mock, checkout protegido y perfil con pedidos. El detalle del alcance implementado y de la posible evolucion futura esta documentado en [Contexto funcional](docs/contexto-funcional.md).

## Arquitectura futura

La version actual corresponde al frontend de la solucion. Como evolucion futura, Relatos de Papel podria convertirse en una arquitectura full stack basada en una SPA React desplegada en Vercel o Netlify y un backend de microservicios Spring Boot.

La arquitectura propuesta contempla un API Gateway, servicios de catalogo, pedidos, usuarios y comunicaciones, bases de datos independientes por servicio, cache con Redis, busqueda con Elasticsearch u OpenSearch, mensajeria asincrona con RabbitMQ, comunicaciones en tiempo real mediante WebSocket e integraciones externas como pasarela de pago, SMTP y APIs de IA.

Esta vision queda documentada en [Arquitectura futura](docs/arquitectura-futura.md). No forma parte del alcance implementado en esta practica, pero justifica como el frontend actual podria evolucionar hacia la aplicacion completa.

## Tecnologias usadas

- React 19
- Vite 8
- React Router DOM
- Context API
- Custom hooks
- CSS global responsive
- Datos mock locales en JavaScript

## Estructura del proyecto

```text
.
├── README.md
├── docs
│   ├── arquitectura-futura.md
│   ├── contexto-funcional.md
│   ├── guion-video.md
│   ├── prompts-ia.md
│   └── url-despliegue.txt
└── frontend
    ├── package.json
    ├── public
    └── src
        ├── components
        ├── context
        ├── hooks
        ├── mocks
        ├── pages
        ├── router
        ├── styles
        ├── App.jsx
        └── main.jsx
```

### Carpetas relevantes

- `frontend/src/components`: componentes reutilizables como `Header`, `Cart`, `BookCard` u `OrderList`.
- `frontend/src/context`: contexto global de autenticacion y carrito.
- `frontend/src/hooks`: hooks personalizados `useLocalStorage` y `useBookSearch`.
- `frontend/src/mocks`: datos simulados de libros, usuario y pedidos.
- `frontend/src/pages`: vistas principales de la SPA.
- `frontend/src/router`: configuracion central de rutas.
- `frontend/src/styles`: hoja global `main.css`.

## Instalacion de dependencias

```bash
cd frontend
npm install
```

## Ejecucion en local

```bash
cd frontend
npm run dev
```

La aplicacion quedara disponible en la URL local que indique Vite, normalmente `http://localhost:5173`.

## Build de produccion

```bash
cd frontend
npm run build
```

Para revisar el resultado compilado en local:

```bash
cd frontend
npm run preview
```

## Despliegue

La aplicacion esta desplegada en Vercel:

```text
https://dwfs-relatos-papel.vercel.app/
```

## Rutas principales

- `/`: landing page
- `/login`: login mock
- `/books`: catalogo con buscador y carrito visible
- `/books/:bookId`: detalle de libro y punto de entrada al carrito
- `/checkout`: checkout protegido
- `/profile`: perfil protegido con pedidos recientes
- `*`: pagina 404

## Credenciales mock de login

- Email: `lucia.fernandez@example.com`
- Password: `relatos123`

## Funcionalidades implementadas

- Estructura SPA con `BrowserRouter`, `Routes` y `Route`
- Layout comun con header y footer
- Landing page de entrada
- Login simulado con `AuthContext`
- Rutas protegidas con `ProtectedRoute`
- Persistencia en `localStorage` para usuario autenticado y carrito
- Catalogo de 30 libros mock
- Busqueda por titulo con hook personalizado
- Detalle de libro con actualizacion de `document.title`
- Carrito global con gestion de cantidades, borrado y total
- Checkout protegido con confirmacion simulada de pedido
- Perfil protegido con datos del usuario y ultimos pedidos
- Estilos responsive para movil, tablet y desktop

## Notas de desarrollo

- Todos los comandos npm deben ejecutarse desde `frontend`.
- La aplicacion no integra backend, base de datos ni pasarela de pago.
- Los datos de usuario, libros y pedidos son simulados.

## Documentacion adicional

- [Contexto funcional](docs/contexto-funcional.md)
- [Arquitectura futura](docs/arquitectura-futura.md)
- [Guion de video](docs/guion-video.md)
- [Registro de uso de IA](docs/prompts-ia.md)
- [URL de despliegue](docs/url-despliegue.txt)
