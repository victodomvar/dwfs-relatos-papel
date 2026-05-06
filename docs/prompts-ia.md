# Prompts IA

## Resumen de prompts usados

Durante el desarrollo se usaron prompts sucesivos para construir y refinar la aplicacion:

- Crear la estructura base de la SPA con React Router, layout comun y paginas iniciales.
- Generar mocks de libros, usuario y pedidos.
- Implementar autenticacion simulada y rutas protegidas.
- Implementar carrito global con contexto y componentes asociados.
- Construir el catalogo con busqueda por titulo.
- Implementar detalle de libro y flujo de anadir al carrito.
- Implementar checkout protegido.
- Implementar perfil protegido con pedidos recientes.
- Extraer hooks personalizados para persistencia y busqueda.
- Mejorar el diseño responsive y la consistencia visual.
- Redactar la documentacion final del proyecto.

## Que se genero con IA

La IA se utilizo como apoyo para generar o acelerar:

- Estructura inicial de la SPA.
- Configuracion del router.
- Layout, header y footer.
- Paginas principales.
- Contextos `AuthContext` y `CartContext`.
- Componentes de catalogo, carrito y pedidos.
- Mocks de libros, usuario y pedidos.
- Hooks personalizados `useLocalStorage` y `useBookSearch`.
- Hoja global `frontend/src/styles/main.css`.
- README y documentos de apoyo en `docs`.

## Trazabilidad concreta

- Los archivos de mocks `frontend/src/mocks/books.js`, `frontend/src/mocks/user.js` y `frontend/src/mocks/orders.js` fueron generados con ayuda de IA.
- La hoja `frontend/src/styles/main.css` fue generada y refinada con ayuda de IA.
- Parte de la documentacion final tambien fue redactada con apoyo de IA y despues revisada.

## Calidad estimada de respuestas

- Respuestas correctas o parcialmente correctas: `92%`
- Respuestas incorrectas: `8%`

Estas cifras son una estimacion manual basada en el flujo real de trabajo, incluyendo pequeños ajustes posteriores de estilos, contenido o integracion.

## Lineas aproximadas generadas con IA

- Aproximadamente `2200` a `2600` lineas entre componentes, contextos, hooks, mocks, estilos y documentacion.

## Tiempo estimado ahorrado

- Ahorro estimado: entre `8` y `12` horas de trabajo manual, especialmente en scaffolding, estilos base, mocks, documentacion y tareas repetitivas de integracion.

## Criterio de uso

La IA se utilizo para acelerar implementacion y redaccion, pero cada cambio se reviso en el repositorio y se valido con `npm run build` ejecutado desde `frontend`.
