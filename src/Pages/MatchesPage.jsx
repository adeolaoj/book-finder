import './MatchesPage.css'

const MatchesPage = () => {
  return (
    <div className="matches-page" >
      <div className="header">
        <h1>Here’s what we got. You can also refine your search!</h1>
        <p>Click any book to read a synopsis. Hover over the banners to read more about each match.</p>
      </div>

      <div className="results">
        <h2>Top Matches</h2>
        <div className="result-books">
          <div className="book">Book One</div>
          <div className="book">Book Two</div>
          <div className="book">Book Three</div>
          <div className="book">Book Four</div>
        </div>
      </div>

      <div className="search-buttons">
        <div className="search-again">Search Again</div>
        <div className="personalized-search">Get More Personalized Results</div>
      </div>
      
    
    </div>
  )
}

export default MatchesPage