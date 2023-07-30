import { useState } from "react"
import AccordionPanel from "./AccordionPanel.jsx"

export default function Accordion({ entries }) {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <div class="w-full max-w-xl xl:max-w-2xl">
        {
            entries.map((entry, index) => 
                <AccordionPanel
                    key={index}
                    entry={entry} 
                    isOpen={index === activeIndex} 
                    toggle={() => {
                        const newActiveIndex = index !== activeIndex ? index : -1
                        setActiveIndex(newActiveIndex)
                    }}
                />)
        }
        </div>
    )
}