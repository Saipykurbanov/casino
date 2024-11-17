import React from 'react';

const Window = ({status}) => {

    return (
        <div className='window'>
            <div className="window_wrapper">
                <div className={`rocket ${status}`}>
                    <img src="/images/rocket.svg" className='rocket_img' alt="" />
                    <img src="/images/fire.gif" className={`fire ${status}`} alt="" />
                </div>
                <div className={`sky ${status}`}>
                    <img src="/images/stars.svg" alt="" className="start" />
                    <img src="/images/stars.svg" alt="" className="start" />
                    <img src="/images/stars.svg" alt="" className="start" />
                </div>
                <div className="coef">x1.67</div>
            </div>
        </div>
    );
};

export default Window;