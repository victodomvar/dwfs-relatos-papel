import { Link } from 'react-router-dom'

const featuredBooks = [
  { id: 'el-mapa-secreto', title: 'El mapa secreto', author: 'Irene Solis' },
  { id: 'nieve-de-tinta', title: 'Nieve de tinta', author: 'Gael Vera' },
  { id: 'atlas-del-silencio', title: 'Atlas del silencio', author: 'Luna Prado' },
]

function HomePage() {
  return (
    <section className="page">
      <span className="eyebrow">Catalogo</span>
      <h1>HomePage</h1>
      <p className="lead">
        Vista principal para listar libros disponibles. De momento deja una
        muestra estatica de contenido.
      </p>

      <div className="card-grid">
        {featuredBooks.map((book) => (
          <article key={book.id} className="card">
            <p className="card-kicker">{book.author}</p>
            <h2>{book.title}</h2>
            <Link className="text-link" to={`/books/${book.id}`}>
              Ver detalle
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HomePage
