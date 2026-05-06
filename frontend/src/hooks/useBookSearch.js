import { useEffect, useState } from 'react'

function useBookSearch(books, searchTerm) {
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
  }, [books, searchTerm])

  return filteredBooks
}

export default useBookSearch
