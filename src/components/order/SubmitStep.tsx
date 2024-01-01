import { useState } from "react"
import { Input, HiddenInput } from "../forms/Input"
import { Overview } from "./Overview"
import { Controls } from "./Controls"
import type { CollectionEntry } from "astro:content"
import type { Address } from "./AddressStep"
import type { Contact } from "./ContactStep"

type Props = {
  isVisible: boolean,
  pack: CollectionEntry<'packs'>,
  address: Address,
  contact: Contact,
  initialMessage: string,
  handleBack: (message: string) => void,
}

const formId = "order-form"

export function SubmitStep({
  isVisible,
  pack,
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
      className={`${isVisible ? "block" : "hidden"} flex-1 flex flex-col`}
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

      <div className="lg:hidden">
        <Overview pack={pack} address={address} contact={contact} message={message} />
      </div>

      <Input
        type="textarea"
        label="Anmerkung"
        value={message}
        size={4}
        handleChange={(e) => setMessage(e.currentTarget.value)}
        explanation='Falls du mir noch etwas mitteilen möchtest.'
      />

      <div className="flex-1 flex flex-col justify-end">
        <Controls formId={formId} handleBack={() => handleBack(message)} textNext={"Bestellen"} />
      </div>
    </form>
  </>
}