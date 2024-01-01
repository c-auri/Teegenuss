import type { CollectionEntry } from 'astro:content'
import type { Contact } from './ContactStep'
import type { Address } from './AddressStep'

type Props = {
  pack: CollectionEntry<'packs'>,
  address: Address,
  contact: Contact,
  message: string,
}

export function Overview({ pack, address, contact }: Props) {
  return <>
    <div className={`text-slate-600 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1`}>

      <input type="hidden" name="form-name" value="order" />

      <h1 className="font-bold text-2xl sm:col-span-2 lg:col-span-1">
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
        <fieldset className="flex flex-col">
          <h2 className="font-bold text-lg">Adresse</h2>
          <span>{address.name}</span>
          {address.annotation && <span>{address.annotation}</span>}
          <span>{`${address.street} ${address.number}`}</span>
          <span>{`${address.postalCode} ${address.town}`}</span>
          <span>{address.country}</span>
        </fieldset>
      }
      {
        contact.source.trim() &&
        <fieldset className="flex flex-col">
          <h2 className="font-bold text-lg">Kontakt</h2>
          <span>{contact.discord}</span>
          <span>{contact.source}</span>
        </fieldset>
      }

    </div>
  </>
}