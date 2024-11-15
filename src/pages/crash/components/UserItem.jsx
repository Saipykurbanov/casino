import React from 'react';
import Avatar from '../../../components/avatar/Avatar';

const UserItem = () => {
    return (
        <div className='user_item'>

            <Avatar />
            <div className="name">Winix123</div>
            <div className="date">22:00:24</div>
            <div className="coef">x1.45</div>
            <div className="bet">1100</div>

        </div>
    );
};

export default UserItem;