import React from 'react'
import './ButtonStyles.css'

const PersonalizedSearchButton = ({ onClick }) => {
    return (
        <button
            className="personalized-search-button"
            onClick={onClick}>
                Get More Personalized Results
            </button>
    )
}

export default PersonalizedSearchButton