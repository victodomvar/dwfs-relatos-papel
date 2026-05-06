import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Cart from '../components/Cart'
import { useCart } from '../context/CartContext'
import { books } from '../mocks/books'

function BookDetailPage() {
  const { bookId } = useParams()
  const { addToCart } = useCart()
  const book = books.find((item) => item.id === bookId)

  useEffect(() => {
    const previousTitle = document.title

    if (book) {
      document.title = `${book.title} | Relatos de Papel`
    } else {
      document.title = 'Libro no encontrado | Relatos de Papel'
    }

    return () => {
      document.title = previousTitle
    }
  }, [book])

  if (!book) {
    return (
      <section className="page page-book-detail page-book-detail-empty">
        <span className="eyebrow">Detalle de libro</span>
        <h1>Libro no encontrado</h1>
        <p className="lead">
          No existe ningun libro asociado al identificador solicitado.
        </p>
        <div className="detail-panel">
          <Link className="button button-secondary" to="/books">
            Volver al catalogo
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="page page-book-detail">
      <span className="eyebrow">Detalle de libro</span>
      <h1>{book.title}</h1>
      <p className="lead">
        Ficha completa del libro seleccionado, con la unica entrada activa al
        carrito desde la experiencia de catalogo.
      </p>

      <div className="book-detail-layout">
        <div className="book-detail-main">
          <article className="book-detail-card">
            <img
              className="book-detail-image"
              src={book.imageUrl}
              alt={`Portada de ${book.title}`}
            />

            <div className="book-detail-copy">
              <p className="card-kicker">{book.category}</p>
              <p className="book-detail-author">por {book.author}</p>
              <p className="book-detail-description">{book.description}</p>

              <div className="book-specs">
                <p>
                  <strong>ISBN:</strong> {book.isbn}
                </p>
                <p>
                  <strong>Precio:</strong> {book.price.toFixed(2)} EUR
                </p>
                <p>
                  <strong>Categoria:</strong> {book.category}
                </p>
                <p>
                  <strong>Stock:</strong> {book.stock} unidades
                </p>
                <p>
                  <strong>Rating:</strong> {book.rating.toFixed(1)} / 5
                </p>
                <p>
                  <strong>Imagen:</strong>{' '}
                  <a href={book.imageUrl} target="_blank" rel="noreferrer">
                    Ver URL de portada
                  </a>
                </p>
              </div>

              <div className="actions">
                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => addToCart(book)}
                >
                  Anadir al carrito
                </button>
                <Link className="button button-secondary" to="/books">
                  Volver al catalogo
                </Link>
              </div>
            </div>
          </article>
        </div>

        <div className="book-detail-cart">
          <Cart />
        </div>
      </div>
    </section>
  )
}

export default BookDetailPage
