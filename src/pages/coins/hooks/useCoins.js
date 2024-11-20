import { useState } from "react"


export default function useCoins() {

    const [side, setSide] = useState(0)
    const [bet, setBet] = useState('')

    return {
        side,
        setSide,
        bet,
        setBet,
    }
}