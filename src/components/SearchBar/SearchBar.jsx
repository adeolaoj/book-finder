import React, {useState, useCallback, useEffect} from 'react'
import './SearchBar.css'
import { Search, Mic } from 'lucide-react'

const sampleData = [
    {
        id: 1,
        title: 'A Court of Thorns and Roses',
        url: 'https://www.goodreads.com/',
    },
    {
        id: 2,
        title: 'A Court of Mist and Fury',
        url: 'https://www.goodreads.com/',
    },
    {
        id: 3,
        title: 'A Court of Wings and Ruin',
        url: 'https://www.goodreads.com/',
    },
    {
        id: 4,
        title: 'A Court of Frost and Starlight',
        url: 'https://www.goodreads.com/',
    },
    {
        id: 5,
        title: 'A Court of Silver Flames',
        url: 'https://www.goodreads.com/',
    }
]


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])

    // Debounce function: trigger search results only after short delay in typing
    const debounce = (func, delay) => {
        let timeoutId
        return (...args) => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => func(...args), delay)
        }
    }

    const handleSearch = useCallback(
        debounce((term) => {
            if (term.trim() === '') {
                setSearchResults([])
            } else {
                const results = sampleData.filter((item) =>
                    item.title.toLowerCase().includes(term.toLowerCase()),
                )
                setSearchResults(results)
            }
        }, 300),
        [],
    )

    useEffect(() => {
        handleSearch(searchTerm)
    }, [searchTerm, handleSearch])

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return (

    <div className="search-bar-container">
        <form onSubmit={(e) => e.preventDefault()} className="search-form">
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                className="search-input"
                placeholder="Search By Title, ISBN, Author..."
            />
        </form>

        {searchResults.length > 0 && (
            <div className="search-results">
            <h2>Search Results:</h2>
            <ul>
                {searchResults.map((result) => (
                <li key={result.id}>
                    <a href={result.url} target="_blank" rel="noopener noreferrer">
                    {result.title}
                    </a>
                </li>
                ))}
            </ul>
            </div>
        )}
    </div>

  )

}

export default SearchBar