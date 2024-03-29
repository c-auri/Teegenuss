import { Input } from '../forms/Input'
import { useState } from 'react'
import { Controls } from './Controls'

export type Contact = {
  email: string,
  discord: string,
  source: string,
}

export function initializeContact() {
  return {
    email: "",
    discord: "",
    source: "",
  }
}

type Props = {
  initialValues: Contact,
  handleBack: (contact: Contact) => void,
  handleNext: (contact: Contact) => void,
}

const formId = "contact-form"

export function ContactStep({initialValues, handleBack, handleNext}: Props) {
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
      id={formId}
      className={"flex-1 flex flex-col"}
      onSubmit={(e) => {
        e.preventDefault()
        handleNext(contact)
      }}
    >
      <h2 className="pb-6 font-bold text-2xl text-gray-600">Kontakt</h2>

      <div className="">
        <div className="flex flex-col justify-start gap-3">

          <Input
            type="text"
            label="Discord Benutzername"
            value={contact.discord ?? ""}
            handleChange={update("discord")}
            isRequired={true}
            explanation={"Bitte gib den einmaligen Benutzernamen an, nicht den Anzeigenamen."}
          />

          <Input
            type="text"
            label="Woher kennen wir uns?"
            value={contact.source ?? ""}
            handleChange={update("source")}
            explanation={"Kurzer Stichpunkt genügt."} isRequired={true}
          />

        </div>
      </div>

      <p className="pt-2 pb-5 flex-1 text-sm text-gray-400">* notwendige Angabe</p>

      <Controls formId={formId} handleBack={() => handleBack(contact)} />

    </form>
  </>
}
