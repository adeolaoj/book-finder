import './HomeHeader.css'
import React from 'react'

const HomeHeader = () => {
    return (
        <div className="header-container">
            <h1>Find your next read here</h1>
            <div className="subheader-container">
                <p>I want books similar to...</p>
                <p>(add up to 3 books)</p>
            </div>
        </div>
    )
}

export default HomeHeader