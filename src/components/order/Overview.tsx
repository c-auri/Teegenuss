import type { Address } from "./Address"
import type { Contact } from "./Contact"
import { Controls } from "./Controls"

type Props = {
    isVisible: boolean,
    contact: Contact,
    address: Address,
    handleBack: () => void,
}

export default function Overview({
    isVisible,
    contact,
    address,
    handleBack
}: Props) {
    return <>
        <form
            className={(isVisible ? "block" : "hidden") + " h-full flex flex-col"}
            name="order"
            method="POST"
            data-netlify="true"
        >
            <input type="hidden" name="form-name" value="order" />

            <div className="flex-1">
                <div className="mb-6 flex justify-start">

                    <fieldset>
                        <h2 className="font-bold text-lg text-gray-600">Adresse</h2>
                        {ReadOnlyInput("address-name", address.name)}
                        {ReadOnlyInput("address-annotation", address.annotation)}
                        {ReadOnlyInput("address-street", `${address.street} ${address.number}`)}
                        {ReadOnlyInput("address-town", `${address.postalCode} ${address.town}`)}
                        {ReadOnlyInput("address-country", address.country)}
                    </fieldset>

                    <fieldset>
                        <h2 className="font-bold text-lg text-gray-600">Kontakt</h2>
                        {ReadOnlyInput("contact-discord", contact.discord)}
                        {ReadOnlyInput("contact-source", contact.source)}
                        {ReadOnlyInput("contact-annotation", contact.annotation)}
                    </fieldset>

                </div>
            </div>

            <Controls handleBack={handleBack} textNext={"Bestellen"} />

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
                className="text-lg text-gray-800 bg-transparent focus:outline-none"
            />
        </label>
    </>
}