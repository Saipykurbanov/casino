import { useState } from "react"


export default function useCrash() {

    const [status, setStatus] = useState('')
    const [bet, setBet] = useState('')
    const [coef, setCoef] = useState('')

    const toggle = () => {
        if(status === 'play') {
            setStatus('')
        } else {
            setStatus('play')
        }
    }

    return {
        status,
        toggle,
        bet,
        setBet,
        coef,
        setCoef
    }
}