import { useEffect, useRef, useState } from "react"
import Store from "../../utils/Store"


export default function useSignIn() {

    const [isOpen, setIsOpen] = useState(false)
    const [tab, setTab] = useState(1)
    const timer = useRef(null)

    const close = () => {
        setIsOpen('close')
        document.body.style.overflow = 'visible'
        timer.current = setTimeout(() => {
            setIsOpen(false)
        }, 600)
    }

    Store.useListener('signIn', (data) => {
        setTab(data)
        setIsOpen('open')
        document.body.style.overflow = 'hidden'
    })

    const switchTab = (tab) => {
        setTab(tab)
    }

    useEffect(() => {

        return () => {
            if(timer.current) {
                clearTimeout(timer.current)
            }
        }

    }, [])

    return {
        isOpen,
        close,
        tab,
        switchTab
    }
}