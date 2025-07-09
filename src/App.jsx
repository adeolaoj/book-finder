import SearchBar from './Components/SearchBar/SearchBar';
import HomeHeader from './Components/HomeHeader/HomeHeader';
import HomeSearchSection from './Components/HomeSearchSection/HomeSearchSection';


const App = () => {
  return (
    <div className="App">
      <main>
          <HomeHeader />
          <HomeSearchSection />
      </main>
    </div>
  )
}

export default App