import React from 'react';

import './css/partner.css';

const Partner = () => {
    return (
        <>
            <div className='common_wrapper partner'>
                <p>Пригласи друзей и получи <span>10 монет</span> за каждого нового пользователя!</p>

                <div className="link">
                    <a href="">https:/kfjdnf/djfnd.ndfdnfdnfn/djfdfk</a>
                </div>
            </div>

            <div className='common_wrapper partner'>
                <h3>Всего заработано с реферала</h3>
                <div className="summ">0,00</div>

                <div className="referal_list_header">
                    <div className="name">Реферал</div>
                    <div className="data">Дата регистрации</div>
                </div>

                <div className="referal_list">
                    <div className="referal_list_item">
                        <div className="name">mcGregor</div>
                        <div className="data">12:30 20.04.2024</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Partner;