import React from 'react';
import StatItem from './StatItem';
import online from '/icons/footer/earth.svg'
import players from '/icons/footer/group.svg'
import game from '/icons/footer/play.svg'
import money from '/icons/footer/case.svg'

const Statistic = () => {
    return (
        <div className="statistic">

            <StatItem img={online} title={'ОНЛАЙН'} value={'2200'}/>
            <StatItem img={players} title={'ВСЕГО ИГРОКОВ'} value={'2200'}/>
            <StatItem img={game} title={'ВСЕГО ИГР'} value={'2200'}/>
            <StatItem img={money} title={'ВЫИГРАНО'} value={'2200'}/>

        </div>
    );
};

export default Statistic;