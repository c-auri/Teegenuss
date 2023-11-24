import Input from '../forms/Input'
import { useState } from 'react'
import { Controls } from './Controls'

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
    isVisible: boolean,
    initialValues: Contact,
    handleBack: () => void,
    handleNext: (contact: Contact) => void,
}

export function ContactStep({isVisible, initialValues, handleBack, handleNext}: Props) {
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
            className={(isVisible ? "block" : "hidden") + " h-full flex flex-col"}
            onSubmit={(e) => {
                e.preventDefault()
                handleNext(contact)
            }}
        >
            <h2 className="my-3 font-bold text-lg text-gray-600">Kontakt</h2>

            <div className="flex-1">
                <div className="my-3 flex flex-col justify-start gap-3">

                    <Input
                        type="text"
                        label="Discord Benutzername"
                        value={contact.discord ?? ""}
                        handleChange={update("discord")}
                        isRequired={true}
                        addition={"Bitte gib den einmaligen Benutzernamen an, nicht den Anzeigenamen."}
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

                </div>
            </div>

            <p className="pt-2 pb-5 text-sm text-gray-600">* Pflichtfeld</p>

            <Controls handleBack={handleBack} />

        </form>
    </>
}
