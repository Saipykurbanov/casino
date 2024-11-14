import React from 'react';

const Slider = () => {
    return (
        <div className='slider'>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>

            <div className="pagination">
                <span className='active'></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Slider;