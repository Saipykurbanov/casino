import React from 'react';
import './css/loading.css';


const MainLoading = ({load}) => {
    return (
        <div className={`main_loading ${load ? 'close' : ''}`}>
            <img src="/images/LOGO.svg" alt="" />
            <div className="spinner">
                <div className="inner"></div>
            </div>
        </div>
    );
}

export default MainLoading;