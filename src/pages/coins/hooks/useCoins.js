import { useState } from "react"


export default function useCoins() {

    const [side, setSide] = useState(0)
    const [bet, setBet] = useState('')
    const [status, setStatus] = useState('start')

    const play = () => {
        if(status === 'start') {
            return setStatus('')
        } else {
            return setStatus('start')
        }
    }

    return {
        side,
        setSide,
        bet,
        setBet,
        status,
        play
    }
}