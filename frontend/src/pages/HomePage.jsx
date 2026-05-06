import { useEffect, useState } from 'react'
import BookList from '../components/BookList'
import Cart from '../components/Cart'
import SearchBar from '../components/SearchBar'
import { books } from '../mocks/books'

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredBooks, setFilteredBooks] = useState(books)

  useEffect(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    if (!normalizedSearch) {
      setFilteredBooks(books)
      return
    }

    setFilteredBooks(
      books.filter((book) => book.title.toLowerCase().includes(normalizedSearch)),
    )
  }, [searchTerm])

  return (
    <section className="page">
      <span className="eyebrow">Catalogo</span>
      <h1>Nuestros libros</h1>
      <p className="lead">
        Explora el catalogo completo de Relatos de Papel y revisa tu carrito sin
        salir de la vista principal.
      </p>

      <div className="catalogue-layout">
        <div className="catalogue-main">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <BookList books={filteredBooks} />
        </div>

        <div className="catalogue-cart">
          <Cart />
        </div>
      </div>
    </section>
  )
}

export default HomePage
