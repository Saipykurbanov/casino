import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Crash from './pages/crash/Crash';
import Coins from './pages/coins/Coins';


function App() {

  return (
    <>
        <Router>
            <Header />
            <Sidebar />
            
            <div className="container">

                <Routes>

                    <Route path='/' element={<Home />}/>
                    <Route path='/crash' element={<Crash />}/>
                    <Route path='/coins' element={<Coins />}/>
                    <Route path='' element={''}/>

                </Routes>

                <Footer />
            </div>
        </Router>
    </>
  )
}

export default App
