import React from 'react';
import About from './components/About';
import './css/home.css';
import Slider from './components/Slider';
import Games from './components/Games';


const Home = () => {

    

    return (
        <div className='home'>

            <About />

            <Slider />

            <Games />
            
        </div>
    );
};

export default Home;