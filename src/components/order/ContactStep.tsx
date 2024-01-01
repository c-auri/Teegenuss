import { Input } from '../forms/Input'
import { useState } from 'react'
import { Controls } from './Controls'

export type Contact = {
  email: string,
  discord: string,
  source: string,
  annotation: string,
}

export function initializeContact() {
  return {
    email: "",
    discord: "",
    source: "",
    annotation: "",
  }
}

type Props = {
  isVisible: boolean,
  initialValues: Contact,
  handleBack: () => void,
  handleNext: (contact: Contact) => void,
}

const formId = "contact-form"

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
      id={formId}
      className={(isVisible ? "block" : "hidden") + " flex-1 flex flex-col"}
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

          <div className="lg:hidden">
            <Input
              type="textarea"
              label="Anmerkung"
              value={contact.annotation}
              size={4}
              handleChange={update("annotation")}
              explanation='Falls du mir noch etwas mitteilen möchtest.'
            />
          </div>

        </div>
      </div>

      <p className="pt-2 pb-5 flex-1 text-sm text-gray-600">* Pflichtfeld</p>

      <Controls formId={formId} handleBack={handleBack} />

    </form>
  </>
}
