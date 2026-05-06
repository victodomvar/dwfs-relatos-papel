# Guion video-memoria

Duracion objetivo: entre 15 y 20 minutos.

## 1. Introduccion

- Presentar el proyecto `Relatos de Papel`.
- Explicar que es una SPA de libreria online construida con React + Vite.
- Aclarar que el backend no existe y que los datos se simulan con mocks locales.

## 2. Arranque local

- Abrir terminal en la raiz del repositorio.
- Entrar en la carpeta `frontend`.
- Ejecutar `npm install` si es la primera vez.
- Ejecutar `npm run dev`.
- Mostrar la URL local de Vite.
- Comentar que para compilar se usa `npm run build`.

## 3. Estructura del proyecto

- Mostrar la raiz del repositorio.
- Explicar la separacion entre `docs` y `frontend`.
- Dentro de `frontend/src`, recorrer:
  - `components`
  - `context`
  - `hooks`
  - `mocks`
  - `pages`
  - `router`
  - `styles`
- Explicar que esta estructura separa interfaz, estado global, logica reutilizable y datos simulados.

## 4. Componentes React

- Enseñar `Layout`, `Header` y `Footer` como base comun.
- Explicar componentes del catalogo:
  - `SearchBar`
  - `BookList`
  - `BookCard`
- Explicar componentes del carrito:
  - `Cart`
  - `CartItem`
- Explicar `OrderList` en perfil.
- Comentar `ProtectedRoute` como pieza transversal para seguridad de rutas.

## 5. Router

- Abrir `frontend/src/router/AppRouter.jsx`.
- Explicar uso de `BrowserRouter`, `Routes` y `Route`.
- Recorrer las rutas:
  - `/`
  - `/login`
  - `/books`
  - `/books/:bookId`
  - `/checkout`
  - `/profile`
  - `*`
- Señalar que `/checkout` y `/profile` estan protegidas con `ProtectedRoute`.

## 6. Hooks usados de React

### useState

- Se usa para formularios, texto de busqueda y otros estados locales.
- Ejemplo claro: `LoginPage` y `HomePage`.

### useEffect

- Se usa para sincronizar efectos derivados.
- Ejemplo claro: `BookDetailPage` actualiza `document.title`.
- Ejemplo claro: hooks personalizados que sincronizan estado con `localStorage` o filtran libros.

### useContext

- Se usa para compartir estado global.
- Explicar `AuthContext` y `CartContext`.

## 7. Custom hooks

### useLocalStorage

- Mostrar `frontend/src/hooks/useLocalStorage.js`.
- Explicar que encapsula lectura inicial y persistencia en `localStorage`.
- Comentar que se usa para persistir usuario autenticado y carrito.
- Valor aportado:
  - evita duplicacion de codigo
  - mejora la experiencia al refrescar
  - centraliza la persistencia

### useBookSearch

- Mostrar `frontend/src/hooks/useBookSearch.js`.
- Explicar que recibe `books` y `searchTerm`.
- Devuelve `filteredBooks` filtrando solo por titulo.
- Valor aportado:
  - desacopla la logica de busqueda de `HomePage`
  - deja la pagina mas limpia
  - facilita mantenimiento y evolucion

## 8. Vistas implementadas

### LandingPage

- Presentar la entrada visual de la aplicacion.
- Mostrar accesos a catalogo y login.

### LoginPage

- Explicar login simulado con credenciales mock visibles.
- Mostrar redireccion posterior al perfil.

### HomePage

- Mostrar el catalogo de libros.
- Enseñar el buscador por titulo.
- Explicar que el carrito tambien aparece en esta vista.

### BookDetailPage

- Mostrar lectura de `bookId` por `useParams`.
- Explicar que el detalle es la unica pagina desde la que se puede anadir al carrito.
- Enseñar el cambio dinamico de `document.title`.

### CheckoutPage

- Explicar que es una ruta protegida.
- Mostrar resumen del pedido y confirmacion simulada.
- Comentar el flujo:
  - `alert`
  - `clearCart`
  - `navigate('/books')`

### ProfilePage

- Explicar que es una ruta protegida.
- Mostrar datos del usuario autenticado.
- Mostrar los 5 pedidos recientes desde mocks.

### NotFoundPage

- Enseñar la ruta comodin.

## 9. Carrito

- Abrir `CartContext`.
- Explicar las operaciones:
  - `addToCart`
  - `removeFromCart`
  - `clearCart`
  - `increaseQuantity`
  - `decreaseQuantity`
  - `totalItems`
  - `totalPrice`
- Mostrar que el header refleja el numero de items.
- Comentar que el carrito se persiste en `localStorage`.

## 10. Login y rutas protegidas

- Mostrar `AuthContext`.
- Explicar validacion contra `mockUser`.
- Comentar que no se guarda la password en estado.
- Mostrar `ProtectedRoute` redirigiendo a `/login` cuando no hay sesion.
- Hacer una demo corta:
  - acceder a `/profile` sin login
  - redireccion a `/login`
  - iniciar sesion
  - volver a perfil

## 11. Uso de IA

- Explicar que la IA se uso como apoyo para:
  - crear estructura base de la SPA
  - generar mocks
  - construir componentes y contextos
  - proponer hooks personalizados
  - mejorar estilos responsive
  - redactar parte de la documentacion
- Aclarar que el resultado fue revisado, corregido y validado con build.
- Remitir a `docs/prompts-ia.md` para la trazabilidad.

## 12. Despliegue en Vercel

- Explicar que el proyecto esta preparado para desplegarse como frontend estatico.
- Flujo recomendado:
  - conectar el repositorio en Vercel
  - establecer como raiz del proyecto la carpeta `frontend`
  - comando de build: `npm run build`
  - directorio de salida: `dist`
- Comentar que React Router funciona correctamente en desarrollo y que en despliegue se recomienda configuracion SPA rewrite en caso necesario segun el hosting.

## 13. Cierre

- Resumir objetivos cumplidos:
  - SPA funcional
  - autenticacion simulada
  - carrito global
  - catalogo y detalle
  - checkout protegido
  - perfil con pedidos
  - diseño responsive
- Cerrar con posibles mejoras futuras:
  - backend real
  - pago real
  - registro
  - filtros avanzados
  - panel de administracion
