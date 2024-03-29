import { useState } from "react"

const patchCevronUp = "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
const pathCevronDown = "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"

export default function Accordion({ entries }) {
    const [activeIndex, setActiveIndex] = useState(0)
    
    return <>
        <div className="border-t border-slate-300 w-full">
        {
            entries.map((entry, index) => 
                <Panel
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
        <p className="w-full text-end px-1 py-3">
            <a className="italic text-slate-500 hover:text-slate-600" href="/glossar">
                zum Glossar
            </a>
        </p>
    </>
}

function Panel({ entry, isOpen, toggle }) {
    const path = isOpen ? patchCevronUp : pathCevronDown

    return (
        <article className="border-b border-slate-300">
            <header className="cursor-pointer my-2 md:my-3 flex justify-between items-center" onClick={toggle}>
                <h3 className="text-xl font-bold">{entry.data.title}</h3>
                <svg className="h-8 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d={path} /></svg>
            </header>
            {
                isOpen &&
                <div className="mt-3 md:mt-4">
                {
                    entry.data.translation &&
                    <p className="text-lg md:text-xl text-slate-600">Übersetzt: {entry.data.translation}</p>
                }
                {
                    entry.data.synonyms &&
                    <p className="text-lg md:text-xl text-slate-600">Auch: {entry.data.synonyms}</p>
                }
                </div>
            }
            {
                isOpen && 
                <p className="mt-2 mb-8 text-lg md:text-xl">{entry.body}</p>
            }
        </article>
    )
}