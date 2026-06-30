# Uso de IA en el backend

Este documento recoge el uso de herramientas de inteligencia artificial durante el desarrollo del backend de la practica Relatos de Papel.

El backend se ha desarrollado con Java 17, Spring Boot y Spring Cloud, siguiendo una arquitectura de microservicios compuesta por Eureka Server, API Gateway, catalogue-service, orders-service y PostgreSQL con bases de datos separadas.

## Objetivo del uso de IA

La IA se utilizo como apoyo para acelerar tareas de generacion inicial, configuracion, documentacion y validacion tecnica. Las respuestas obtenidas no se incorporaron de forma automatica sin revision, sino que se contrastaron con el comportamiento real del codigo, los perfiles de ejecucion y las pruebas locales.

## Prompts relevantes utilizados

### Crear Eureka Server

> "Crea un proyecto Maven Spring Boot para relatos-eureka-server con Java 17, Spring Cloud Netflix Eureka Server, Actuator, puerto 8761, @EnableEurekaServer y configuracion para que no se registre a si mismo."

### Crear catalogue-service

> "Crea un microservicio Spring Boot Maven catalogue-service con Java 17, Spring Web, Spring Data JPA, Validation, H2, Eureka Client y Actuator. Debe exponer /api/books, usar capas controller, service, repository, dto y entity, incluir filtros combinables y cargar datos iniciales de libros."

### Crear orders-service

> "Crea un microservicio Spring Boot Maven orders-service con Java 17, Spring Web, Spring Data JPA, Validation, H2, Eureka Client, Actuator y cliente para consultar catalogue-service. Debe exponer /api/orders, crear pedidos, calcular precio total y persistir ordenes."

### Crear gateway

> "Crea un API Gateway con Spring Cloud Gateway que se registre en Eureka y enrute /api/books/** a CATALOGUE-SERVICE y /api/orders/** a ORDERS-SERVICE."

### Crear bases separadas

> "Prepara PostgreSQL con Docker Compose para crear dos bases de datos separadas, catalogue_db y orders_db, con scripts SQL independientes para books y purchase_orders. No usar schemas separados como solucion principal."

### Anadir perfil postgres

> "Actualiza catalogue-service y orders-service para soportar PostgreSQL mediante un perfil postgres, manteniendo H2 como configuracion por defecto, anadiendo driver PostgreSQL y usando spring.sql.init.mode=never."

### Documentar pruebas

> "Anade documentacion de pruebas manuales con curl y validacion directa en PostgreSQL para demostrar que GET /api/books, GET /api/orders y POST /api/orders funcionan correctamente."

## Resultados obtenidos

Parte del codigo generado fue aceptado directamente, especialmente la estructura inicial de proyectos Spring Boot, configuraciones base, controladores REST y ejemplos de documentacion.

Otra parte requirio ajustes manuales de configuracion, rutas, perfiles y pruebas. Entre los puntos revisados estuvieron el registro en Eureka, las rutas reales del gateway, el uso de nombres logicos de servicio, la separacion entre `catalogue_db` y `orders_db`, y la inicializacion de esquemas desde los scripts SQL.

La solucion se valido con:

- `mvn clean package` en los proyectos Maven.
- Arranque local de PostgreSQL, Eureka, catalogue-service, orders-service y API Gateway.
- Comprobacion visual del registro de servicios en Eureka.
- Pruebas con `curl` sobre el gateway.
- Consultas directas a PostgreSQL para verificar la persistencia.

## Estimacion

- Respuestas correctas o parcialmente correctas: 80-90%.
- Respuestas incorrectas o que requirieron correccion: 10-20%.
- Lineas aproximadas generadas con ayuda de IA: pendiente de rellenar manualmente.
- Tiempo ahorrado estimado: pendiente de rellenar manualmente.

## Valoracion academica

El uso de IA fue util como apoyo para estructurar el backend y reducir tiempo en tareas repetitivas, pero requirio revision tecnica continua. Las decisiones finales sobre arquitectura, persistencia, rutas, perfiles y pruebas se comprobaron sobre el proyecto ejecutable, evitando asumir como validas respuestas no verificadas.
