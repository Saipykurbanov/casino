import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Roulette from './pages/roulette/Roulette';


function App() {

  return (
    <main>
      
      <div className="container">

          <Router>

            <Routes>

              <Route path='' element={''}/>
              <Route path='/roulette' element={<Roulette />}/>
              <Route path='' element={''}/>
              <Route path='' element={''}/>

            </Routes>

            <Footer />
            
          </Router>

      </div>

    </main>
  )
}

export default App
