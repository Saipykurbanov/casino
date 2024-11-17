import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Games from '../tabs/games/Games';
import CrashHistory from '../tabs/games/tabs/CrashHistory';
import CardsHistory from '../tabs/games/tabs/CardsHistory';
import MonetHistory from '../tabs/games/tabs/MonetHistory';
import SlotsHistory from '../tabs/games/tabs/SlotsHistory';
import RouletteHistory from '../tabs/games/tabs/RouletteHistory';
import Operation from '../tabs/operation/Operation';
import Payments from '../tabs/payments/Payments';
import Withdraw from '../tabs/withdraw/Withdraw';
import Partner from '../tabs/partner/Partner';

const TabsContainer = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        let initialScroll = window.scrollY;
        
        window.scrollTo(0, initialScroll);
    }, [pathname]);

    return (
        <div className='tabs_container'>
            <Routes>
                <Route path='games' element={<Games />}>
                    <Route index element={<CrashHistory />}/>
                    <Route path='cards' element={<CardsHistory />}/>
                    <Route path='monet' element={<MonetHistory />}/>
                    <Route path='slots' element={<SlotsHistory />}/>
                    <Route path='roulette' element={<RouletteHistory />}/>
                </Route>
                <Route path='operation' element={<Operation />}/>
                <Route path='payments' element={<Payments />}/>
                <Route path='withdraw' element={<Withdraw />}/>
                <Route path='partner' element={<Partner />}/>
            </Routes>
        </div>
    );
};

export default TabsContainer;