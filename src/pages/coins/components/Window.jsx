import React from 'react';
import CoefListItem from './CoefListItem';

const Window = ({status}) => {

    const coef_list = ['1.9', '3.8', '7.6', '15.2', '30.4', '60.8', '121.6', '243.2', '484.4', '972.8']

    return (
        <div className='window'>

            <div className="game_process">
                <div className="coins_info">
                    <div className="number">0</div>
                    <p>Раунд</p>
                </div>
                <div class={`coin ${status}`}>
                    <div class="side up"></div>
                    <div class="side x"></div>
                </div>
                <div className="coins_info">
                    <div className="number">x0</div>
                    <p>Коэфф.</p>
                </div>
            </div>

            <div className="coef_list">

                {coef_list.map((el, i) => (
                    <CoefListItem key={i} number={el}/>
                ))}

            </div>
        </div>
    );
};

export default Window;