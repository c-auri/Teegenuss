export default function Breadcrumbs({ navigation }) {
    if (!navigation) {
        return
    }

    return navigation.segments.map((segment, segmentIndex) => (
        <div key={`segment-${segmentIndex}`} className="group flex items-center select-none tracking-wider text-md text-gray-400 fill-gray-400">
            <div className="relative cursor-pointer rounded-md hover:fill-gray-500 group-hover:text-gray-500 group-hover:bg-gray-100">
                <div className="pl-2 pr-4 py-1 rounded-md hover:bg-gray-200">
                    <svg className="h-5 pr-1 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" /></svg>
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

function Dropdown(navigation, segmentIndex, currentEntry) {
    const segment = navigation.segments[segmentIndex]
    const filteredCollection = segment.collection.filter(entry => entry.id != currentEntry.id)

    return filteredCollection.map((entry, entryIndex) => {
        let rounded = ""
        
        if (entryIndex === 0) {
            rounded = "rounded-t-md pt-1"
        } 
        
        if (entryIndex === filteredCollection.length - 1) {
            rounded = "rounded-b-md pb-1"
        }

        return <a 
                    className="whitespace-nowrap"
                    href={Href(navigation, segmentIndex, entry)}
                    key={`${entryIndex}`}
                >
            <li className={`${rounded} flex flex-col items-stretch py-1 pl-8 pr-6 bg-gray-100 hover:text-gray-500 hover:bg-gray-200`}>
                {entry.data.title}
            </li>
        </a>
    })
}

function Href(navigation, segmentIndex, entry) {
    let result = `/${navigation.root}`

    for (let i = 0; i < segmentIndex; i++) {
        result += `/${navigation.segments[i].entry.data.route}`
    }

    result += `/${entry.data.route}`

    return result
}