import type { Contact } from "./Contact"
import Button from '../forms/Button'

type Step = Contact

type Props = {

    handleSubmit: (contact: Contact) => void
}

export default function Step({
    handleSubmit
}: Props) {
    return <>
        <form
            className="my-24 flex flex-col gap-6"
            onSubmit={(e) => { e.preventDefault(); handleSubmit(contact)}}
        >
            <h2 className="font-bold text-lg text-gray-600">Kontakt</h2>

            <p className="text-sm text-gray-600">* Pflichtfeld</p>
            <Button type="submit">Weiter</Button>
        </form>
    </>
}