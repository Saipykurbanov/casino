import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';


function App() {

  return (
    <main>
      
      <div className="container">

          <Router>

            <Header />
            <Sidebar />

            <Routes>

              <Route path='' element={''}/>
              <Route path='' element={''}/>
              <Route path='' element={''}/>
              <Route path='' element={''}/>

            </Routes>

          </Router>

      </div>

    </main>
  )
}

export default App
