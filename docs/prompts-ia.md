# Prompts IA

## Prompt usado

```text
Estamos en un repositorio cuya aplicación React + Vite está dentro de la carpeta frontend. Todos los comandos npm deben ejecutarse desde frontend.

Implementa los datos mock de la aplicación Relatos de Papel.

Crea:
- frontend/src/mocks/books.js
- frontend/src/mocks/user.js
- frontend/src/mocks/orders.js

Requisitos para books.js:
- Exporta una constante books.
- Debe contener 30 libros ficticios.
- Cada libro debe tener:
  id, title, author, isbn, price, description, category, imageUrl, stock, rating.
- Usa ids simples compatibles con rutas, por ejemplo "book-1", "book-2".
- Usa imágenes externas estables o placeholders mediante URLs.
- Los títulos deben estar en español y encajar con una tienda de libros.

Requisitos para user.js:
- Exporta una constante mockUser.
- Debe tener id, name, surname, email, password, avatarUrl y address.

Requisitos para orders.js:
- Exporta una constante orders.
- Debe tener 5 pedidos asociados al usuario mock.
- Cada pedido debe tener id, date, status, total y items.
- Cada item debe tener bookId, title, quantity y price.

Actualiza docs/prompts-ia.md añadiendo el prompt usado y una nota indicando que estos mocks han sido generados con IA.

No modifiques todavía las páginas para consumir estos datos.

Ejecuta cd frontend && npm run build.
Si el build pasa, haz commit con mensaje: "Add mock data for books user and orders".
Haz push.
```

## Nota

Los archivos de mocks `frontend/src/mocks/books.js`, `frontend/src/mocks/user.js` y `frontend/src/mocks/orders.js` han sido generados con ayuda de IA a partir del prompt anterior.
