import React from 'react';
import Avatar from '../../../components/avatar/Avatar';
import Button from '../../../components/button/Button';

const HistoryItem = () => {

    return (
        <div className='history_item'>
            <div className="player">
                <Avatar />
                <div className="name">Winix228</div>
            </div>
            <div className="bet">100</div>
            <div className="hit">1</div>
            <div className="coef">x1.9</div>
            <div className="win sum">350</div>
            <Button mode={'fill small'}>
                Подробнее
            </Button>
        </div>
    );
}

export default HistoryItem;