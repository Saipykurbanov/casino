import React from 'react';
import Avatar from '../../../components/avatar/Avatar';
import Button from '../../../components/button/Button';

const BetListItem = () => {
    return (
        <div className='bet_list_item'>
            <div className="player">
                <Avatar />

                <div className="name">mcGregor</div>
            </div>

            <div className="bet">1000,00</div>

            <div className="possible_winning">2,00 - 15,00</div>

            <div className="winning">0,25</div>

            <Button mode={'fill small'}>Подробнее</Button>
        </div>
    );
};

export default BetListItem;