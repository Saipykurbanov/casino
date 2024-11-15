import React from 'react';
import RouletteItem from './RouletteItem';

const RouletteGame = () => {
    return (
        <div className="roulette_wrapper">
            <div className="roulette_game">
                <div className="roulette_track">
                    <RouletteItem num={'1'} mode={'red'}/>
                    <RouletteItem num={'2'} mode={'black'}/>
                    <RouletteItem num={'6'} mode={'red'}/>
                    <RouletteItem num={'14'} mode={'green'}/>
                    <RouletteItem num={'8'} mode={'black'}/>
                    <RouletteItem num={'5'} mode={'green'}/>
                    <RouletteItem num={'9'} mode={'red'}/>
                    <RouletteItem num={'22'} mode={'black'}/>
                    <RouletteItem num={'4'} mode={'red'}/>
                    <RouletteItem num={'8'} mode={'black'}/>
                </div>

                <div className="line"></div>
            </div>
        </div>
    );
};

export default RouletteGame;