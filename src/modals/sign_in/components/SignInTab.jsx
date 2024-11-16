import React from 'react';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';

const SignInTab = ({switchTab}) => {


    return (
        <form action="" onSubmit={''}>
            <h3>Вход в аккаунт</h3>

            <div className="inputs">
                <Input label={'Email'} placeholder={'Введите email'}/>
                <Input label={'Пароль'} placeholder={'Введите пароль'}/>
            </div>

            <div className="buttons_block">
                <Button mode={'fill full pink'}>
                    Войти
                </Button>
                <p onClick={() => switchTab(2)}>Регистрация</p>
            </div>
        </form>
    );
}

export default SignInTab