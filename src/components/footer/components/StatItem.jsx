import React from 'react';

const StatItem = ({img, title, value}) => {
    return (
        <div className='statistic__item'>

            <img src={img} alt="" />

            <div>
                <h3>{title}</h3>

                <p>{value}</p>
            </div>

        </div>
    );
};

export default StatItem;