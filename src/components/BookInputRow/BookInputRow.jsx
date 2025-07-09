import React from 'react'
import XButton from '../Buttons/XButton'
import PlusButton from '../Buttons/PlusButton'
import SearchBar from '../SearchBar/SearchBar'
import './BookInputRow.css'

const BookInputRow = ({ book, index, onChange, onRemove, onAdd, isLast, canAddMore, showRemove }) => {
    return (
        <div className="input-container">
            <div className="input-row">
                <SearchBar value={book} onChange={(val) => onChange(index, val)} />
            </div>
        </div>
    )
}

export default BookInputRow