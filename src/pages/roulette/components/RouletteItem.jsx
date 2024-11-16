import React from 'react';

const RouletteItem = ({ num, mode }) => {
    return (
        <div className={`roulette_item ${mode}`}>
            {num}
        </div>
    );
};

export default RouletteItem;