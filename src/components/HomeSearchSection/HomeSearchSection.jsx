import React, { useState } from 'react'
import BookInputRow from '../BookInputRow/BookInputRow'
import Go from '../Buttons/Go'
import './HomeSearchSection.css'
import { useNavigate } from 'react-router-dom'

const HomeSearchSection = () => {
  const [books, setBooks] = useState([''])
  const navigate = useNavigate()

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

  const handleSearch = () => {
    navigate('/matches')
  }

  return (
    <div className="search-section">
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
      
      <div className="search-buttons">
            <Go onClick={handleSearch} />
      </div>

    </div>
  )
}

export default HomeSearchSection