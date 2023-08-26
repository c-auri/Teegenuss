export default function Breadcrumbs({ navigation }) {
    if (!navigation) {
        return
    }

    return navigation.segments.map((segment, segmentIndex) => (
        <div key={`segment-${segmentIndex}`} className="flex items-center">
            <div className="relative group cursor-pointer pl-2 pr-5 py-1 rounded-md hover:bg-gray-200">
                <svg className="h-5 pr-1 inline fill-white group-hover:fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" /></svg>
                <span className="group-hover:text-gray-500 ">{segment.entry.data.title}</span>
                <ul className={`absolute left-0 top-[2rem] py-4 hidden group-hover:block hover:block`}>
                {
                    Dropdown(navigation, segmentIndex, segment.entry)
                }
                </ul>
            </div>
            <span className="pl-6">{segmentIndex < navigation.segments.length - 1 ? "/" : ""}</span>
        </div>))
}

function Dropdown(navigation, segmentIndex, currentEntry) {
    const segment = navigation.segments[segmentIndex]

    return segment.collection.map((entry, entryIndex) => {
        let rounded = ""
        
        if (entryIndex === 0) {
            rounded = "rounded-t-md pt-1"
        } 
        
        if (entryIndex === segment.collection.length - 1) {
            rounded = "rounded-b-md pb-1"
        }

        return <a 
                    className={`${entry.id === currentEntry.id ? "text-gray-500 hover:text-gray-700" : ""} whitespace-nowrap`}
                    href={Href(navigation, segmentIndex, entry)}
                    key={`${entryIndex}`}
                >
            <li className={`${rounded} flex flex-col items-stretch py-1 pl-8 pr-6 bg-gray-100 hover:text-gray-700 hover:bg-gray-200`}>
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