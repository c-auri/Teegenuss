import { useState } from "react"
import { modulo } from '../../scripts/modulo'

export default function Slideshow({ images }) {
    const [current, setCurrent] = useState(0)
    const pathPrevious = "M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"
    const pathNext = "M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
    const showPrevious = () => setCurrent(modulo(current - 1, images.length))
    const showNext = () => setCurrent(modulo(current + 1, images.length))

    return (
        <div className="grid grid-rows-[auto,auto] grid-cols-2 text-6xl sm:grid-cols-[1rem,auto,1rem] sm:items-center sm:gap-0 justify-center xl:justify-start">
            { images.length > 1 && Control("previous", pathPrevious, showPrevious)}
            { 
                images.length > 0 ? 
                images.map((image, index) => Image(image.src, index, current)) :
                Image("/images/teas/empty-cup.png")
            }
            { images.length > 1 && Control("next", pathNext, showNext) }
        </div>
    )
}

function Image(src, index, current) {
    return <img
        key={index}
        src={src}
        width="600"
        height="600"
        className={(index === current ? "block" : "hidden") + " w-xl col-span-2 max-w-screen aspect-square col-start-1 col-end-3 justify-self-center sm:row-start-1 sm:col-start-2 sm:col-end-3"}
    />
}

function Control(title, path, onClick) {
    return (
        <span 
            title={title === "previous" ? "vorherige Abbildung" : "nächste Abbildung"}
            onClick={onClick} 
            className={(title === "previous" ? "justify-self-end" : "justify-self-start") + " cursor-pointer select-none px-3 py-1 rounded-md row-start-2 lg:justify-self-center fill-slate-400 hover:fill-slate-500 hover:bg-slate-200 sm:row-start-1 sm:py-3 sm:px-1"}
        >
            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960">
                <path d={path}/>
            </svg>
        </span>)
}