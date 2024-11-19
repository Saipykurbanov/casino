import React, { useEffect, useState } from 'react';
import RouletteItem from './RouletteItem';

const RouletteGame = ({ rouletteRef }) => {

    const [clone, setClone] = useState([])

    useEffect(() => {
        let list = []

        for(let i = 0; i<8; i++) {
            list.push(i)
        }

        setClone(list)

    }, [])

    return (
        <div className="roulette_wrapper">
            <div className="roulette_game" >
                    <div className="roulette_track" ref={rouletteRef}>
                        {clone.map((i) => (
                            <section  key={i}>
                                <RouletteItem num={'0'} mode={'red'}/>
                                <RouletteItem num={'9'} mode={'black'}/>
                                <RouletteItem num={'6'} mode={'red'}/>
                                <RouletteItem num={'14'} mode={'green'}/>
                                <RouletteItem num={'8'} mode={'black'}/>
                                <RouletteItem num={'5'} mode={'green'}/>
                                <RouletteItem num={'7'} mode={'red'}/>
                                <RouletteItem num={'7'} mode={'black'}/>
                                <RouletteItem num={'4'} mode={'red'}/>
                                <RouletteItem num={'8'} mode={'black'}/>
                                <RouletteItem num={'5'} mode={'green'}/>
                                <RouletteItem num={'9'} mode={'red'}/>
                                <RouletteItem num={'22'} mode={'black'}/>
                                <RouletteItem num={'4'} mode={'red'}/>
                                <RouletteItem num={'14'} mode={'black'}/>
                            </section>
                        ))}
                    </div>
                <div className="line"></div>
            </div>
        </div>
    );
};

export default RouletteGame;