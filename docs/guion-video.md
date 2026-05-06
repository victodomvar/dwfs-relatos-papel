## Hooks personalizados

### useLocalStorage

`useLocalStorage` encapsula la lectura inicial desde `localStorage` y la escritura sincronizada cada vez que cambia el estado. En esta solucion se usa para persistir el usuario autenticado y el carrito entre recargas, evitando que la experiencia se reinicie al refrescar la SPA.

### useBookSearch

`useBookSearch` recibe la coleccion de libros y el texto de busqueda, y devuelve `filteredBooks` con el filtrado aplicado solo sobre el titulo. Internamente centraliza el `useEffect` y deja `HomePage` mas limpia y orientada a composicion de interfaz.

### Valor aportado

Estos hooks separan comportamiento reutilizable de la capa visual. `useLocalStorage` mejora la continuidad de uso y reduce logica repetida en los contextos, mientras que `useBookSearch` concentra la logica de filtrado del catalogo para facilitar mantenimiento, pruebas y evolucion futura.
