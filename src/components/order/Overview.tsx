import { calculateShipping, calculateTotal, type Selection } from './SelectionStep'
import type { Contact } from './ContactStep'
import type { Address } from './AddressStep'

type Props = {
  current: number,
  selection: Selection[],
  address: Address,
  contact: Contact,
  message: string,
}

export function Overview({ current, selection, address, contact }: Props) {
  return <>
    <div className={`text-slate-600 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1`}>

      <input type="hidden" name="form-name" value="order" />

      <h2 className="font-bold text-2xl col-span-1 hidden lg:block">
        Übersicht
      </h2>

      {
        current > 1 &&
        <fieldset className="sm:col-span-2 lg:col-span-1">
          <h2 className="font-bold text-lg">Auswahl</h2>

          {
            selection.map((pack, i) =>
              pack.amount > 0 &&
              <p key={i} className="pt-1 flex justify-between gap-8">
                <span>{pack.name}</span>
                <span>{pack.amount * pack.price},00&thinsp;€</span>
              </p>)
          }

          <p className="pb-1 flex justify-between gap-8">
            <span>Versand (Deutschland)</span>
            <span>{calculateShipping(selection)},00&thinsp;€</span>
          </p>

          <div className="my-1 w-full h-px bg-slate-300"></div>

          <p className="py-1 flex justify-between gap-8">
            <span>Gesamt</span>
            <span>{calculateTotal(selection)},00&thinsp;€</span>
          </p>

          <p className="text-right py-1 text-sm text-slate-400">
            ggf. zzgl. Auslandsversandkosten
          </p>
        </fieldset>
      }
      {
        current > 2 &&
        <fieldset className="flex flex-col grid-col-start-2">
          <h2 className="font-bold text-lg">Adresse</h2>
          <TruncatedInput text={address.name} />
          {address.annotation && <TruncatedInput text={address.annotation} />}
          <TruncatedInput text={`${address.street} ${address.number}`} />
          <TruncatedInput text={`${address.postalCode} ${address.town}`} />
          <TruncatedInput text={address.country} />
        </fieldset>
      }
      {
        current > 3 &&
        <fieldset className="max-w-full flex flex-col grid-col-start-2 lg:grid-col-start-1">
          <h2 className="font-bold text-lg">Kontakt</h2>
          <TruncatedInput text={contact.discord} />
          <TruncatedInput text={contact.source} />
        </fieldset>
      }

    </div>
  </>
}

function TruncatedInput({text} : {text: string}) {
  return <span className="max-w-[16rem] lg:max-w-[19rem] truncate" title={text}>
      {text}
  </span>
}