# Relatos de Papel

SPA de libreria online desarrollada con React y Vite. El proyecto simula una tienda de libros con catalogo, detalle de producto, autenticacion mock, carrito global, checkout protegido y perfil de usuario con pedidos recientes.

## Descripcion

Relatos de Papel es una aplicacion frontend orientada a practicar arquitectura de SPA, enrutado, gestion de estado compartido y experiencia de usuario responsive. No usa backend real: los libros, el usuario y los pedidos se sirven desde mocks locales.

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
│   ├── guion-video.md
│   └── prompts-ia.md
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

- [Guion de video](docs/guion-video.md)
- [Registro de uso de IA](docs/prompts-ia.md)
