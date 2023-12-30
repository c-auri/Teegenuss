import type { CollectionEntry } from 'astro:content'
import type { Contact } from './Contact'
import type { Address } from './Address'
import { ReadOnlyInput } from "../forms/Input"

type Props = {
  current: string,
  pack: CollectionEntry<'packs'>,
  address: Address,
  contact: Contact,
}

export function Overview({ current, pack, address, contact }: Props) {
  return <>
    <div className={current !== "terms" ? "block" : "hidden"}>

      <h1 className="pb-6 font-bold text-2xl text-slate-600">
        Bestellübersicht
      </h1>

      <p className="pt-1 flex justify-between gap-8">
        <span>{pack.data.title}</span>
        <span>{pack.data.price},00&thinsp;€</span>
      </p>

      <p className="pb-1 flex justify-between gap-8">
        <span>Versand (Deutschland)</span>
        <span>3,00&thinsp;€</span>
      </p>

      <div className="my-1 w-full h-px bg-slate-300"></div>

      <p className="py-1 flex justify-between gap-8">
        <span>Gesamt</span>
        <span>{pack.data.price + 3},00&thinsp;€</span>
      </p>

      <p className="text-right py-1 text-sm text-slate-400">
        ggf. zzgl. Auslandsversandkosten
      </p>

      <input type="hidden" name="form-name" value="order" />

      <div className="flex-1">

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

    </div>
  </>
}