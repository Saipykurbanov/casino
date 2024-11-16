import { useEffect, useState } from "react"


export default function useApp() {

    const [load, setLoad] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            setLoad(true)
        }, 1000)

    }, [])

    return {
        load
    }
}