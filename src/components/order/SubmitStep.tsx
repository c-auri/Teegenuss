import { useState } from "react"
import { Input, HiddenInput } from "../forms/Input"
import { Overview } from "./Overview"
import { Controls } from "./Controls"
import type { Selection } from "./SelectionStep"
import type { Address } from "./AddressStep"
import type { Contact } from "./ContactStep"

type Props = {
  isVisible: boolean,
  selection: Selection[],
  address: Address,
  contact: Contact,
  initialMessage: string,
  handleBack: (message: string) => void,
}

const formId = "order-form"

export function SubmitStep({
  isVisible,
  selection,
  address,
  contact,
  initialMessage,
  handleBack,
}: Props) {
  const [message, setMessage] = useState(initialMessage)

  return <>
    <form
      id={formId}
      name="order"
      className={`${isVisible ? "flex" : "hidden"} flex-1 flex-col`}
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="order" />

      {HiddenInput("address-name", address.name)}
      {HiddenInput("address-annotation", address.annotation)}
      {HiddenInput("address-street", `${address.street} ${address.number}`)}
      {HiddenInput("address-town", `${address.postalCode} ${address.town}`)}
      {HiddenInput("address-country", address.country)}
      {HiddenInput("contact-discord", contact.discord)}
      {HiddenInput("contact-source", contact.source)}
      {HiddenInput("message", message)}

      <section className="text-slate-600 flex-1 flex flex-col gap-6">
        <h2 className="font-bold text-2xl text-gray-600">Bestellbestätigung</h2>

        <p>
          Hier kannst du noch einmal alle Angaben auf Korrektheit überprüfen und mir eine Anmerkung mitgeben, sollte noch etwas ungeklärt sein.
        </p>

        <div className="lg:hidden">
          <Overview selection={selection} address={address} contact={contact} message={message} />
        </div>

        <Input
          type="textarea"
          label="Anmerkung"
          value={message}
          size={4}
          handleChange={(e) => setMessage(e.currentTarget.value)}
        />

        <div className="flex-1 flex flex-col justify-end">
          <Controls formId={formId} handleBack={() => handleBack(message)} textNext={"Bestellen"} />
        </div>
      </section>

    </form>
  </>
}