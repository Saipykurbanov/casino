import React from 'react';
import crown from '/images/game_slots/crown.png'
import apple from '/images/game_slots/apple.png'
import joker from '/images/game_slots/joker.png'
import cherry from '/images/game_slots/cherry.png'
import clover from '/images/game_slots/clover.png'
import horseshoe from '/images/game_slots/horseshoe.png'
import lemon from '/images/game_slots/lemon.png'
import orange from '/images/game_slots/orange.png'
import watermelon from '/images/game_slots/watermelon.png'
import ruby from '/images/game_slots/ruby.png'

const SlotGame = () => {
    return (
        <div className='game_wrapper'>
            <div className="slot_game">

                <div className="slot">
                    <div className="slot_track">
                        <div className="slot_item">
                            <img src={crown} alt="" className="" />
                        </div>
                        <div className="slot_item">
                            <img src={apple} alt="" className="" />
                        </div>
                        <div className="slot_item">
                            <img src={joker} alt="" className="" />
                        </div>
                    </div>
                </div>

                <div className="slot">
                    <div className="slot_track">
                        <div className="slot_item">
                            <img src={cherry} alt="" className="" />
                        </div>
                        <div className="slot_item">
                            <img src={clover} alt="" className="" />
                        </div>
                        <div className="slot_item">
                            <img src={joker} alt="" className="" />
                        </div>
                    </div>
                </div>

                <div className="slot">
                    <div className="slot_track">
                        <div className="slot_item">
                            <img src={horseshoe} alt="" className="" />
                        </div>
                        <div className="slot_item">
                            <img src={lemon} alt="" className="" />
                        </div>
                        <div className="slot_item">
                            <img src={orange} alt="" className="" />
                        </div>
                    </div>
                </div>

                <div className="slot">
                    <div className="slot_track">
                        <div className="slot_item">
                            <img src={watermelon} alt="" className="" />
                        </div>
                        <div className="slot_item">
                            <img src={ruby} alt="" className="" />
                        </div>
                        <div className="slot_item">
                            <img src={joker} alt="" className="" />
                        </div>
                    </div>
                </div>

                <div className="slot">
                    <div className="slot_track">
                        <div className="slot_item">
                            <img src={watermelon} alt="" className="" />
                        </div>
                        <div className="slot_item">
                            <img src={apple} alt="" className="" />
                        </div>
                        <div className="slot_item">
                            <img src={ruby} alt="" className="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SlotGame;