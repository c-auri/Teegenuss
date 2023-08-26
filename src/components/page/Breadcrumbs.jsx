export default function Breadcrumbs({ navigation }) {
    if (!navigation.segments) 
        return

    return navigation.segments.map((segment, index) => (
        <>
            <a href={buildHref(navigation, index)} className="group cursor-pointer pl-2 pr-4 py-1 hover:text-gray-500 hover:bg-gray-200 hover:rounded-md">
                <svg class="h-5 inline fill-white group-hover:fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" /></svg>
                {segment.entry.data.title}
            </a>
            <span className="pl-1">{index < navigation.segments.length - 1 ? "/" : ""}</span>
        </>))
}

function buildHref(navigation, index) {
    let result = `/${navigation.root}`

    for (let i = 0; i <= index; i++) {
        result += `/${navigation.segments[i].entry.data.route}`
    }

    return result
}