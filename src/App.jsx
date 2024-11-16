import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Crash from './pages/crash/Crash';
import Coins from './pages/coins/Coins';
import Roulette from './pages/roulette/Roulette';
import ScrollToTop from './utils/ScrollToTop';
import Cards from './pages/cards/Cards';


function App() {

  return (
    <>
        <Router>
            <Header />
            <Sidebar />
            <ScrollToTop />
            
            <div className="container">

                <Routes>

                    <Route path='/' element={<Home />}/>
                    <Route path='/crash' element={<Crash />}/>
                    <Route path='/coins' element={<Coins />}/>
                    <Route path='' element={''}/>
                    <Route path='/roulette' element={<Roulette />}/>
                    <Route path='/cards' element={<Cards />}/>

                </Routes>

                <Footer />
            </div>
        </Router>
    </>
  )
}

export default App
