import React, { useEffect } from 'react';
import User from './components/User';
import UserDetail from './components/UserDetail';

import './css/profile.css';

const Profile = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return (
        <div className='profile'>
            <User />

            <UserDetail />
        </div>
    );
};

export default Profile;