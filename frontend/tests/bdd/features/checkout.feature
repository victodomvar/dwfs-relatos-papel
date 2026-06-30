Feature: Compra de un libro desde el catalogo

  Scenario: Buscar un libro, anadirlo al carrito y confirmar el pedido
    Given el cliente esta en el catalogo de libros
    When busca el libro "La biblioteca sumergida"
    And abre el detalle del libro
    And anade el libro al carrito
    And va al checkout
    And inicia sesion con el usuario mock si es necesario
    And confirma el pedido
    Then el pedido queda confirmado y el cliente vuelve al catalogo
