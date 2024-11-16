import React from 'react';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';

const SingUpTab = ({switchTab}) => {
    return (
        <form action="" onSubmit={''}>
            <h3>Регистрация</h3>

            <div className="inputs">
                <Input label={'ФИО'} placeholder={'Введите ФИО'}/>
                <Input label={'Email'} placeholder={'Введите email'}/>
                <Input label={'Пароль'} placeholder={'Введите пароль'}/>
                <Input label={'Телефон'} placeholder={'Введите телефон'}/>
            </div>

            <div className="buttons_block">
                <Button mode={'fill full pink'}>
                    Регистрация
                </Button>
                <p onClick={() => switchTab(1)}>Вход</p>
            </div>
        </form>
    );
}

export default SingUpTab;