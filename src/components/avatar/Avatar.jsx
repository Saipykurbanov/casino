import React from 'react';

const Avatar = ({img, name}) => {
    return (
        <div className='avatar'>
            <div className="avatar_image">
                <img src={`${Api.url}/images/${img}`} alt="" />
            </div>
            <p className="name">{name}</p>
        </div>
    );
};

export default Avatar;