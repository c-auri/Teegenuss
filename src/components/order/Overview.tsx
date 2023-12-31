import type { CollectionEntry } from 'astro:content'
import type { Contact } from './Contact'
import type { Address } from './Address'
import { ReadOnlyInput } from "../forms/Input"

type Props = {
  pack: CollectionEntry<'packs'>,
  address: Address,
  contact: Contact,
  annotation: string
}

export function Overview({ pack, address, contact, annotation }: Props) {
  return <>
    <form
      className={`grid text-slate-600 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1`}
      method="POST"
      data-netlify="true"
    >

      <input type="hidden" name="form-name" value="order" />

      <h1 className="pb-6 font-bold text-2xl sm:col-span-2 lg:col-span-1">
        Übersicht
      </h1>

      {
        pack &&
        <fieldset className="sm:col-span-2 lg:col-span-1">
          <h2 className="font-bold text-lg">Bestellung</h2>

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
        </fieldset>
      }
      {
        address.name.trim() &&
        <fieldset className="pt-8 flex flex-col">
          <h2 className="font-bold text-lg">Adresse</h2>
          {ReadOnlyInput("address-name", address.name)}
          {address.annotation && ReadOnlyInput("address-annotation", address.annotation)}
          {ReadOnlyInput("address-street", `${address.street} ${address.number}`)}
          {ReadOnlyInput("address-town", `${address.postalCode} ${address.town}`)}
          {ReadOnlyInput("address-country", address.country)}
        </fieldset>
      }
      {
        contact.source.trim() &&
        <fieldset className="pt-8 flex flex-col">
          <h2 className="font-bold text-lg">Kontakt</h2>
          {ReadOnlyInput("contact-discord", contact.discord)}
          {ReadOnlyInput("contact-source", contact.source)}
        </fieldset>
      }
      {
        annotation.trim() &&
        <fieldset className="block pt-8 sm:col-span-2 lg:hidden">
          <h2 className="font-bold text-lg">Anmerkung</h2>
          {ReadOnlyInput("contact-annotation", annotation, "textarea")}
        </fieldset>
      }

    </form>
  </>
}