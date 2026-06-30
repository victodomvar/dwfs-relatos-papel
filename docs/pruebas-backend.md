# Pruebas finales del backend

Este documento resume las pruebas finales realizadas sobre el backend local de Relatos de Papel.

## Contexto

Las pruebas se ejecutan contra el API Gateway en:

```text
http://localhost:8080
```

Servicios implicados:

- Eureka Server: `http://localhost:8761`
- API Gateway: `http://localhost:8080`
- Catalogue Service: `http://localhost:8081`
- Orders Service: `http://localhost:8082`
- PostgreSQL: `localhost:5432`

PostgreSQL utiliza dos bases de datos separadas:

- `catalogue_db`
- `orders_db`

Las pruebas de API se realizaron con curl, no con Postman.

## Comandos de prueba

Consultar catalogo:

```bash
curl http://localhost:8080/api/books
```

Consultar pedidos:

```bash
curl http://localhost:8080/api/orders
```

Crear pedido:

```bash
curl -i -X POST http://localhost:8080/api/orders -H "Content-Type: application/json" --data-raw '{"bookId":1,"customerEmail":"cliente3@relatosdepapel.com","quantity":2}'
```

Validar persistencia en PostgreSQL:

```bash
docker exec -it relatos-postgres psql -U relatos -d orders_db -c "SELECT * FROM purchase_orders;"
```

## Resultado esperado

- `GET /api/books` devuelve el catalogo de libros.
- `GET /api/orders` devuelve los pedidos existentes.
- `POST /api/orders` devuelve `HTTP 201 Created`.
- La respuesta del `POST` contiene `status` con valor `CREATED`.
- La respuesta del `POST` contiene `totalPrice` calculado a partir del precio unitario y la cantidad.
- La tabla `purchase_orders` contiene el pedido persistido.

## Conclusion

La prueba confirma la integracion entre API Gateway, Eureka, catalogue-service, orders-service y PostgreSQL con bases de datos separadas.
