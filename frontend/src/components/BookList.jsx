import BookCard from './BookCard'

function BookList({ books }) {
  if (books.length === 0) {
    return (
      <div className="empty-state">
        <p className="card-kicker">Sin resultados</p>
        <h2>No hemos encontrado libros con ese titulo.</h2>
        <p>Prueba con otro termino de busqueda para explorar el catalogo.</p>
      </div>
    )
  }

  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  )
}

export default BookList
