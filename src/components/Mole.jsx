import { useEffect } from "react"
import mole from '../embedded/mole.png'

const RAND_DEFAULT = 5000
const RAND_MINIMUM = 2000

export default function Mole({onMoleClick, setIsShowing}) {
    useEffect(() => {
        let randMilSeconds = Math.ceil(Math.random() * RAND_DEFAULT + RAND_MINIMUM)
        let timer = setTimeout(() => {
            setIsShowing(false)
        }, randMilSeconds)

        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img
                style={{'width':'30vw' }} 
                src={mole} 
                onClick={onMoleClick} alt="Mole popup"
            />
        </div>
    )
}