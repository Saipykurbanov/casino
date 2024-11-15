import React from 'react';
import LastItem from './LastItem';

const Last = () => {
    return (
        <div className='last'>
            <p>Последние:</p>

            <div className="last_container">
                <LastItem num={'1'} mode={'black'}/>
                <LastItem num={'1'} mode={'red'}/>
                <LastItem num={'1'} mode={'black'}/>
                <LastItem num={'1'} mode={'red'}/>
                <LastItem num={'1'} mode={'green'}/>
                <LastItem num={'1'} mode={'red'}/>
                <LastItem num={'1'} mode={'black'}/>
                <LastItem num={'1'} mode={'red'}/>
            </div>
        </div>
    );
};

export default Last;