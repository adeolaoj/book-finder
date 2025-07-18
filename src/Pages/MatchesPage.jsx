import './MatchesPage.css'
import PersonalizedSearchButton from '../Components/Buttons/PersonalizedSearchButton'
import { useNavigate } from 'react-router-dom'

const MatchesPage = () => {
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate('/personalized-search')
  }

  return (
    <div className="matches-page" >
      <div className="header">
        <h1>Here’s what we got. You can also refine your search!</h1>
        <p>Click any book to read a synopsis. Hover over the banners to read more about each match.</p>
      </div>

      <div className="results">
        <h2>Top Matches</h2>
        <div className="result-books">
          <div className="book-column">
            <div className="book">Book One</div>
            <p className="book-title">Book One Title</p>
          </div>
          
          <div className="book-column">
            <div className="book">Book Two</div>
            <p className="book-title">Book Two Title</p>
          </div>

          <div className="book-column">
            <div className="book">Book Three</div>
            <p className="book-title">Book Three Title</p>
          </div>

          <div className="book-column">
            <div className="book">Book Four</div>
            <p className="book-title">Book Four Title</p>
          </div>

        </div>
      </div>

      <div className="search-buttons">
        <button className="search-again">Search Again</button>
        <PersonalizedSearchButton onClick={handleSearch} />
      </div>
      
    
    </div>
  )
}

export default MatchesPage