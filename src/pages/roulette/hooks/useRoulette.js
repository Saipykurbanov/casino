import { useEffect, useRef } from "react"

export default function useRoulette() {
    const rouletteRef = useRef(null)
    const rouletteStart = useRef()
    const rouletteFinish = useRef()

    const spinRoullete = (index) =>{
        let card = 100 + 10 
        let landingPosition = (2 * 15 * card) + (index * card);         
        
        var randomize = Math.floor(Math.random() * 100) - (100/2);
        
        if(rouletteRef.current) {
            rouletteRef.current.style.transitionTimingFunction = `cubic-bezier(.2, 0, 0, 1)`
            rouletteRef.current.style.transitionDuration = '6s'
            rouletteRef.current.style.transform = `translate3d(-${landingPosition + 55 + randomize}px, 0px, 0px)`

            rouletteStart.current = setTimeout(() => {
                rouletteRef.current.style.transitionDuration = '0.4s'
                rouletteRef.current.style.transform = `translate3d(-${landingPosition + 55}px, 0px, 0px)`
            }, 6500)
            
            rouletteFinish.current = setTimeout(function(){
                rouletteRef.current.style.transitionTimingFunction = ''
                rouletteRef.current.style.transitionDuration = ''
                
                var resetTo = -(index * card)

                rouletteRef.current.style.transform = `translate3d(${resetTo - 55}px, 0px, 0px)`

                document.querySelectorAll('.roulette_item')[index].style.border = '1px solid red'
            }, 6900);
        }
        
    }

    useEffect(() => {
        spinRoullete(1)
        setInterval(() => {
        }, 10000)
    }, [])

    return { rouletteRef, spinRoullete }
}