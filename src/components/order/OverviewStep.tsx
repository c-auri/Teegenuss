import { HiddenInput } from "../forms/Input"
import { Controls } from "./Controls"
import type { CollectionEntry } from "astro:content"
import type { Address } from "./AddressStep"
import type { Contact } from "./ContactStep"

type Props = {
  isVisible: boolean,
  pack: CollectionEntry<'packs'>,
  address: Address,
  contact: Contact
  handleBack: () => void,
}

const formId = "overview-form"

export function OverviewStep({
  isVisible,
  address,
  contact,
  handleBack,
}: Props) {
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
      {HiddenInput("contact-annotation", contact.annotation)}

      <div className="flex-1 flex flex-col justify-end">
        <Controls formId={formId} handleBack={handleBack} textNext={"Bestellen"} />
      </div>
    </form>
  </>
}