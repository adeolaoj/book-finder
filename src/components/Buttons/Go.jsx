import React from 'react'
import './ButtonStyles.css'

const Go = ({ onClick }) => {
    return (
        <button
            className="go-button"
            onClick={onClick}>
                Go
            </button>
    )
}

export default Go