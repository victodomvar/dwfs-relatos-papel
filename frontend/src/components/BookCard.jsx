import { Link } from 'react-router-dom'

function BookCard({ book }) {
  return (
    <article className="book-card">
      <img
        className="book-card-image"
        src={book.imageUrl}
        alt={`Portada de ${book.title}`}
      />

      <div className="book-card-body">
        <p className="card-kicker">{book.category}</p>
        <h2>{book.title}</h2>
        <p className="book-meta">por {book.author}</p>
        <p className="book-meta">Rating: {book.rating.toFixed(1)} / 5</p>
        <p className="book-price">{book.price.toFixed(2)} EUR</p>
        <Link className="text-link" to={`/books/${book.id}`}>
          Ver detalle
        </Link>
      </div>
    </article>
  )
}

export default BookCard
