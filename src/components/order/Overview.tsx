import Button from "../forms/Button"
import type { Contact } from "./Contact"

type Props = {
    contact: Contact,
}

export default function Overview({
    contact
}: Props) {
    return <>
        <form className="my-24 flex flex-col" name="order" method="POST" data-netlify="true">
            <h2 className="font-bold text-xl text-gray-600">Übersicht</h2>
            <fieldset>
                <h3 className="font-bold text-lg text-gray-600">Kontakt</h3>
                <input type="hidden" name="form-name" value="order" />
                {ReadOnlyInput("contact-email", contact.email)}
                {ReadOnlyInput("contact-discord", contact.discord)}
                {ReadOnlyInput("contact-source", contact.source)}
            </fieldset>
            <Button type="submit">Bestellen</Button>
        </form>
    </>
}

function ReadOnlyInput(name: string, value: string) {
    return <>
        <label>
            <input
                readOnly
                name={name}
                value={value}
                className="text-lg text-gray-800 focus:outline-none"
            />
        </label>
    </>
}