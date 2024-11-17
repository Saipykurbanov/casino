import { useState } from "react"


export default function useSidebar() {

    const [isOpen, setIsOpen] = useState('open')

    const toggle = () => {
        if(isOpen === 'open') {
            setIsOpen('close')
        } else {
            setIsOpen('open')
        }
    }

    return {
        isOpen,
        toggle
    }
}