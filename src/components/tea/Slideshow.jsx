import { useState } from "react"
import { modulo } from '../../scripts/modulo'

export default function Slideshow({ images }) {
    const [current, setCurrent] = useState(0)
    const showPrevious = () => setCurrent(modulo(current - 1, images.length))
    const showNext = () => setCurrent(modulo(current + 1, images.length))

    return (
        <div className="grid grid-rows-[auto,auto] grid-cols-2 gap-8 text-6xl text-gray-200 sm:grid-cols-[auto,auto,auto] sm:items-center sm:gap-0 justify-center lg:justify-start">
            <span className="cursor-pointer select-none text-right hover:text-gray-400 row-start-2 sm:row-start-1" onClick={showPrevious}>❮</span>
            {
                images.map((image, index) => Image(image.src, index, current))
            }
            <span className="cursor-pointer select-none text-left hover:text-gray-400 row-start-2 sm:row-start-1" onClick={showNext}>❯</span>
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