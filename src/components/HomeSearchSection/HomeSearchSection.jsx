import React, { useState } from 'react'
import BookInputRow from '../BookInputRow/BookInputRow'

const HomeSearchSection = () => {
  const [books, setBooks] = useState([''])

  const handleAddBook = () => {
    if (books.length < 3) {
      setBooks([...books, ''])
    }
  }

  const handleRemoveBook = (index) => {
    const updated = books.filter((_, i) => i !== index)
    setBooks(updated)
  }

  const handleChange = (index, value) => {
    const updated = [...books]
    updated[index] = value
    setBooks(updated)
  }

  return (
    <div>
      {books.map((book, index) => (
        <BookInputRow
          key={index}
          book={book}
          index={index}
          onChange={handleChange}
          onRemove={handleRemoveBook}
          showRemove={books.length > 1}
          onAdd={handleAddBook}
          isLast={index === books.length - 1}
          canAddMore={books.length < 3}
        />
      ))}
    </div>
  )
}

export default HomeSearchSection