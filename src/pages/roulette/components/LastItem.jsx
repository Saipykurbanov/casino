import React from 'react';

const LastItem = ({ num, mode }) => {
    return (
        <div className={`last_item ${mode}`}>
            {num}
        </div>
    );
};

export default LastItem;