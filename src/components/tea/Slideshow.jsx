import { useState } from "react"
import { modulo } from '../../scripts/modulo'

export default function Slideshow({ images }) {
    const [index, setIndex] = useState(0)
    const showPrevious = () => setIndex(modulo(index - 1, images.length))
    const showNext = () => setIndex(modulo(index + 1, images.length))

    return (
        <div className="grid grid-rows-[auto,auto] grid-cols-2 gap-8 text-6xl text-gray-200 sm:grid-cols-[auto,auto,auto] sm:items-center sm:gap-0 justify-center lg:justify-start">
            <span className="cursor-pointer select-none text-right hover:text-gray-400 row-start-2 sm:row-start-1" onClick={showPrevious}>❮</span>
            <img width="600" height="600" className="w-xl col-span-2 max-w-screen aspect-square col-start-1 col-end-3 justify-self-center sm:row-start-1 sm:col-start-2 sm:col-end-3" src={images[index].src} />
            <span className="cursor-pointer select-none text-left hover:text-gray-400 row-start-2 sm:row-start-1" onClick={showNext}>❯</span>
        </div>
    )
}