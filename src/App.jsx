import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import MatchesPage from './Pages/MatchesPage'

const App = () => {
  return (
    <div className="App">
      <div className="app-wrapper">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/matches" element={<MatchesPage />} />
          </Routes>
        </Router>
        <style>{'body { background-color: #fdf3ec; }'}</style>
      </div>
    </div>
  )
}

export default App