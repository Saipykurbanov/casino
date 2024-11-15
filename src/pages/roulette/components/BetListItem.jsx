import React from 'react';
import Avatar from '../../../components/avatar/Avatar';

const BetListItem = ({ img, bet, name }) => {
    return (
        <div className='bet_list_item'>
            <div className="player">
                <Avatar />

                <p className="name">{name}</p>
            </div>

            <div className="bet">{bet}</div>
        </div>
    );
};

export default BetListItem;