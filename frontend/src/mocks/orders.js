export const orders = [
  {
    id: 'order-1',
    userId: 'user-1',
    date: '2026-02-14',
    status: 'Entregado',
    total: 48.0,
    items: [
      { bookId: 'book-1', title: 'La casa de las mareas', quantity: 1, price: 18.9 },
      { bookId: 'book-10', title: 'Manual para domesticar cometas', quantity: 1, price: 13.5 },
      { bookId: 'book-23', title: 'El rumor de los tejados', quantity: 1, price: 15.6 },
    ],
  },
  {
    id: 'order-2',
    userId: 'user-1',
    date: '2026-03-01',
    status: 'Enviado',
    total: 51.6,
    items: [
      { bookId: 'book-7', title: 'El reloj de sal', quantity: 1, price: 17.25 },
      { bookId: 'book-12', title: 'Pan y constelaciones', quantity: 1, price: 19.4 },
      { bookId: 'book-6', title: 'Cartas al faro', quantity: 1, price: 14.95 },
    ],
  },
  {
    id: 'order-3',
    userId: 'user-1',
    date: '2026-03-20',
    status: 'Preparando',
    total: 43.3,
    items: [
      { bookId: 'book-17', title: 'Los nombres del bosque', quantity: 1, price: 22.0 },
      { bookId: 'book-14', title: 'Museo de cosas perdidas', quantity: 1, price: 21.3 },
    ],
  },
  {
    id: 'order-4',
    userId: 'user-1',
    date: '2026-04-05',
    status: 'Entregado',
    total: 58.3,
    items: [
      { bookId: 'book-24', title: 'Las mareas del cobre', quantity: 1, price: 23.5 },
      { bookId: 'book-29', title: 'Los pasos del humo', quantity: 1, price: 20.4 },
      { bookId: 'book-18', title: 'Cafe para el ultimo tren', quantity: 1, price: 14.4 },
    ],
  },
  {
    id: 'order-5',
    userId: 'user-1',
    date: '2026-04-22',
    status: 'Pendiente',
    total: 58.6,
    items: [
      { bookId: 'book-5', title: 'La biblioteca sumergida', quantity: 1, price: 22.4 },
      { bookId: 'book-21', title: 'La luna en la imprenta', quantity: 1, price: 17.1 },
      { bookId: 'book-30', title: 'El mar de los cuadernos', quantity: 1, price: 19.1 },
    ],
  },
]
