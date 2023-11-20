import type { Contact } from "./ContactForm"

type Props = {
    contact: Contact,
}

export default function Overview({
    contact
}: Props) {
    return <>
        <form>
            <h2 className="font-bold text-xl text-gray-600">Übersicht</h2>
            <h3 className="font-bold text-lg text-gray-600">Kontakt</h3>
            {ReadOnlyInput(contact.email)}
            {ReadOnlyInput(contact.discord)}
            {ReadOnlyInput(contact.source)}
        </form>
    </>
}

function ReadOnlyInput(value: string) {
    return <>
        <label>
            <input
                readOnly
                value={value}
                className="text-lg text-gray-800 focus:outline-none"
            />
        </label>
    </>
}