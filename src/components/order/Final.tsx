import type { Address } from "./Address"
import type { Contact } from "./Contact"
import { ReadOnlyInput } from "../forms/Input"
import { Controls } from "./Controls"

type Props = {
  isVisible: boolean,
  contact: Contact,
  address: Address,
  handleBack: () => void,
}

const formId = "final-form"

export default function FinalStep({
  isVisible,
  contact,
  address,
  handleBack
}: Props) {
  return <>
    <form
      className={(isVisible ? "block" : "hidden") + " h-full flex flex-col"}
      id={formId}
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="order" />

      <div className="flex-1">

        <h1 className="pb-6 font-bold text-2xl text-gray-600">Bestellübersicht</h1>
        <div className="mb-6 grid grid-cols-2 gap-y-8">

          <fieldset className="flex flex-col">
            <h2 className="font-bold text-lg text-gray-600">Adresse</h2>
            {ReadOnlyInput("address-name", address.name)}
            {address.annotation && ReadOnlyInput("address-annotation", address.annotation)}
            {ReadOnlyInput("address-street", `${address.street} ${address.number}`)}
            {ReadOnlyInput("address-town", `${address.postalCode} ${address.town}`)}
            {ReadOnlyInput("address-country", address.country)}
          </fieldset>

          <fieldset className="flex flex-col">
            <h2 className="font-bold text-lg text-gray-600">Kontakt</h2>
            {ReadOnlyInput("contact-discord", contact.discord)}
            {ReadOnlyInput("contact-source", contact.source)}
          </fieldset>

          {
            contact.annotation.trim() &&
            <fieldset className="col-span-2">
              <h2 className="font-bold text-lg text-gray-600">Anmerkung</h2>
              {ReadOnlyInput("contact-annotation", contact.annotation, "textarea")}
            </fieldset>
          }

        </div>
      </div>

      <Controls formId={formId} handleBack={handleBack} textNext={"Bestellen"} />

    </form>
  </>
}