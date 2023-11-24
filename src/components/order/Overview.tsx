import Button from "../forms/Button"
import type { Address } from "./Address"
import type { Contact } from "./Contact"

type Props = {
    isVisible: boolean,
    contact: Contact,
    address: Address,
    goPrev: () => void,
}

export default function Overview({
    isVisible,
    contact,
    address,
    goPrev
}: Props) {
    return <>
        <form
            className={(isVisible ? "flex" : "hidden") + "  flex-col"}
            name="order"
            method="POST"
            data-netlify="true"
        >
            <h2 className="font-bold text-xl text-gray-600">Übersicht</h2>
            <input type="hidden" name="form-name" value="order" />
            <fieldset>
                <h3 className="font-bold text-lg text-gray-600">Kontakt</h3>
                {ReadOnlyInput("contact-discord", contact.discord)}
                {ReadOnlyInput("contact-source", contact.source)}
            </fieldset>
            <fieldset>
                <h3 className="font-bold text-lg text-gray-600">Adresse</h3>
                {ReadOnlyInput("address-name", address.name)}
                {ReadOnlyInput("address-addition", address.addition)}
                {ReadOnlyInput("address-street", address.street)}
                {ReadOnlyInput("address-number", address.number)}
                {ReadOnlyInput("address-postalCode", address.postalCode)}
                {ReadOnlyInput("address-town", address.town)}
                {ReadOnlyInput("address-country", address.country)}
            </fieldset>

            <p className="w-full flex gap-5">
                <Button type="button" handleClick={goPrev}>Zurück</Button>
                <Button type="submit">Bestellen</Button>
            </p>

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