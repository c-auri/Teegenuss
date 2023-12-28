export default function Breadcrumbs({ navigation }) {
    return <div className="flex gap-5">
        {
            navigation?.segments.map((segment, segmentIndex) => (
                <div key={`segment-${segmentIndex}`} className="group flex items-center select-none tracking-wider text-md text-slate-500 fill-slate-500">
                    <div className="relative cursor-pointer rounded-md hover:fill-slate-500 group-hover:text-slate-500 group-hover:bg-slate-100">
                        <div className="pl-2 pr-4 py-1 rounded-md flex items-center gap-1 hover:bg-slate-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 -960 960 960">
                                <path d="M480-120 300-300l58-58 122 122 122-122 58 58-180 180ZM358-598l-58-58 180-180 180 180-58 58-122-122-122 122Z"/>
                            </svg>
                            <a href={Href(navigation, segmentIndex, segment.entry)}>{segment.entry.data.title}</a>
                        </div>
                        <ul className={`absolute left-0 top-full py-4 hidden group-hover:block hover:block`}>
                        {
                            Dropdown(navigation, segmentIndex, segment.entry)
                        }
                        </ul>
                    </div>
                    <span className="pl-5">{segmentIndex < navigation.segments.length - 1 ? "/" : ""}</span>
                </div>))
        }
    </div>
}

function Dropdown(navigation, segmentIndex, currentEntry) {
    const collection = navigation.segments[segmentIndex].collection

    return collection.map((entry, entryIndex) => {
        let rounded = ""
        
        if (entryIndex === 0) {
            rounded = "rounded-t-md pt-1"
        } 
        
        if (entryIndex === collection.length - 1) {
            rounded = "rounded-b-md pb-1"
        }

        return <a 
            className="whitespace-nowrap"
            href={Href(navigation, segmentIndex, entry)}
            key={`${entryIndex}`}
        >
            <li className={`${rounded} py-1 pl-3 pr-6 flex items-center gap-2 bg-slate-100 hover:text-slate-500 hover:bg-slate-200`}>
                <span className="w-3"></span>
                <span className={entry.id === currentEntry.id ? "text-slate-900" : ""}>{entry.data.title}</span>
            </li>
        </a>
    })
}

function Href(navigation, segmentIndex, entry) {
    let currentDirectory = `/${navigation.root}`

    for (let i = 0; i < segmentIndex; i++) {
        currentDirectory += `/${navigation.segments[i].entry.data.route}`
    }

    return currentDirectory + `/${entry.data.route}`
}