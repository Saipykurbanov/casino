import React from 'react';
import Statistic from './Statistic';
import UserHeader from './UserHeader';
import TabsContainer from './TabsContainer';

const UserDetail = () => {

    return (
        <div className='user_detail'>
            <Statistic />

            <UserHeader />

            <TabsContainer />
        </div>
    );
};

export default UserDetail;