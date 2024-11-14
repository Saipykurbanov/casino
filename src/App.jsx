import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';


function App() {

  return (
    <main>
      
      <div className="container">

          <Router>
            <Header />
            <Sidebar />

            <Routes>

              <Route path='/' element={<Home />}/>
              <Route path='' element={''}/>
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
