import Input from '../forms/Input'
import Button from '../forms/Button'

import { useState } from 'react'

export type Contact = {
    email: string,
    discord: string,
    source: string,
    addition: string,
}

export function initializeContact() {
    return {
        email: "",
        discord: "",
        source: "",
        addition: ""
    }
}

type Props = {
    initialValues: Contact,
    handleSubmit: (contact: Contact) => void
}

export function ContactStep({initialValues, handleSubmit}: Props) {
    const [contact, setContact] = useState(initialValues)

    const update = (property: keyof Contact) => {
        return (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            const newContact = {...contact}
            newContact[property] = e.currentTarget.value
            setContact(newContact)
        }
    }

    return <>
        <form
            className="my-24 flex flex-col gap-6"
            onSubmit={(e) => { e.preventDefault(); handleSubmit(contact)}}
        >
            <h2 className="font-bold text-lg text-gray-600">Kontakt</h2>

            <Input
                type="text"
                label="Discord Benutzername"
                value={contact.discord ?? ""}
                handleChange={update("discord")}
                isRequired={true}
                addition={"Bitte gib deinen einmaligen Benutzernamen an, nicht deinen Anzeigenamen."}
            />

            <Input
                type="text"
                label="Woher kennen wir uns?"
                value={contact.source ?? ""}
                handleChange={update("source")}
                addition={"Kurzer Stichpunkt genügt."} isRequired={true}
            />

            <Input
                type="textarea"
                label="Zusatz"
                value={contact.addition}
                handleChange={update("addition")}
                addition='Falls du mir noch etwas mitteilen möchtest.'
            />

            <p className="text-sm text-gray-600">* Pflichtfeld</p>
            <Button type="submit">Weiter</Button>
        </form>
    </>
}
