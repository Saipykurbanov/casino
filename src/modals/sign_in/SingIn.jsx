import React from 'react';
import './css/sign_in.css';
import useSignIn from '../hooks/useSignIn';
import SignInTab from './components/SignInTab';
import SingUpTab from './components/SingUpTab';


const SignIn = () => {

    const singIn = useSignIn()

    if(!singIn.isOpen) return null

    return (
        <div className={`sing_in ${singIn.isOpen}`} onPointerDown={singIn.close}>

            
            <div className="form_container" onPointerDown={(e) => e.stopPropagation()}>

                {singIn.tab === 1 
                ?<SignInTab switchTab={singIn.switchTab}/>
                :<SingUpTab switchTab={singIn.switchTab}/>}
                
            </div>

        </div>
    );
}

export default SignIn;