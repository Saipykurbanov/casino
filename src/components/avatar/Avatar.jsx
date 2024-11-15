import React from 'react';
import Api from '../../utils/Api';
import './css/avatar.css';


const Avatar = ({img}) => {
    return (
        <div className='avatar'>
            <img src={`${Api.url}/images/${img}`} alt="" />
        </div>
    );
};

export default Avatar;