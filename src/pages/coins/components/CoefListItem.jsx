import React from 'react';

const CoefListItem = ({number}) => {

    return (
        <div className='coef_item'>
            <div className="coef_avatar">?</div>
            <p>x{number}</p>
        </div>
    );
}

export default CoefListItem;