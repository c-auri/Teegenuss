export default function Panel({ entry, isOpen, toggle }) {
    const path = isOpen ? "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" : "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
    return (
        <article className="border-b border-gray-300 py-3">
            <header className="cursor-pointer flex justify-between items-center" onClick={toggle}>
                <h3 className="text-lg font-bold">{entry.data.title}</h3>
                <svg className="h-8 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d={path} /></svg>
            </header>
            {
                isOpen &&
                <div className="mt-3">
                {
                    entry.data.translation &&
                    <p className="text-md text-gray-600">Übersetzt: {entry.data.translation}</p>
                }
                {
                    entry.data.synonyms &&
                    <p className="text-md text-gray-600">Auch: {entry.data.synonyms}</p>
                }
                </div>
            }
            {
                isOpen && 
                <p className="mt-2 mb-4 text-md">{entry.body}</p>
            }
        </article>
    )
}