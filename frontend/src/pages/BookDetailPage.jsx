import { Link, useParams } from 'react-router-dom'

function BookDetailPage() {
  const { bookId } = useParams()

  return (
    <section className="page">
      <span className="eyebrow">Detalle de libro</span>
      <h1>BookDetailPage</h1>
      <p className="lead">
        Ruta dinamica preparada para mostrar la informacion del libro
        seleccionado.
      </p>
      <div className="detail-panel">
        <p>
          <strong>bookId:</strong> {bookId}
        </p>
        <p>La ficha completa se implementara en una siguiente iteracion.</p>
        <Link className="button button-secondary" to="/books">
          Volver al catalogo
        </Link>
      </div>
    </section>
  )
}

export default BookDetailPage
