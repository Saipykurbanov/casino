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
import Slots from './pages/slots/Slots';
import Profile from './pages/profile/Profile';
import NotFound from './pages/not_found/NotFound';
import MainLoading from './components/loading/MainLoading';
import { useState } from 'react';
import useApp from './useApp';
import SignIn from './modals/sign_in/SingIn';


function App() {

    const main = useApp()

    return (
        <>
            <Router>
                <Header />
                <Sidebar />
                <ScrollToTop />

                <MainLoading load={main.load}/>

                {/* Модальные окна */}
                <SignIn />
                
                <div className="container">

                    <Routes>

                        <Route path='/'         element={<Home />}/>
                        <Route path='/crash'    element={<Crash />}/>
                        <Route path='/roulette' element={<Roulette />}/>
                        <Route path='/slots'    element={<Slots />}/>
                        <Route path='/coins'    element={<Coins />}/>
                        <Route path='/cards'    element={<Cards />}/>
                        <Route path='/profile/*'  element={<Profile />}/>
                        <Route path='*'    element={<NotFound />}/>

                    </Routes>

                    <Footer />
                </div>
            </Router>
        </>
  )
}

export default App
