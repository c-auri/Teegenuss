import type { CollectionEntry } from 'astro:content'
import { Controls } from './Controls'
import { useState } from 'react'

export type Selection = { 
  name: string, 
  price: number, 
  numberOfTeas: number, 
  amount: number, 
  min: number, 
  max: number 
}

export function toString(selection: Selection[]) {
  return selection.map(pack => `${pack.amount}x ${pack.name}: ${pack.amount * pack.price},00€`).join(' + ')
}

export function calculateTotal(selection: Selection[]) {
  return selection.reduce<number>(
    (total, current) => total + (current.amount * current.price),
    calculateShipping(selection))
}

export function calculateShipping(selection: Selection[]) {
  const numberOfTeas = selection.reduce((result, current) => result += current.amount * current.numberOfTeas, 0)

  if (numberOfTeas === 0) return 0
  if (numberOfTeas <= 10) return 3
  if (numberOfTeas <= 20) return 5

  return 8
}

export function initializeSelection(packs: CollectionEntry<'packs'>[]): Selection[] {
  return packs.reduce<Selection[]>((result, current) => {
    if (current.data.stash > 0) {
      result.push({
        name: current.data.title,
        price: current.data.price,
        numberOfTeas: current.data.numberOfTeas,
        amount: packs.length > 1 ? 0 : 1,
        min: packs.length > 1 ? 0 : 1,
        max: current.data.stash
      })
    }
    return result
  }, [])
}

type Props = {
  initialSelection: Selection[],
  handleBack: (selection: Selection[]) => void,
  handleNext: (selection: Selection[]) => void,
}

const formId = "packs-form"

export function SelectionStep({initialSelection, handleBack, handleNext}: Props) {
  const [selection, setSelection] = useState(initialSelection)

  const setAmount = (pack: Selection, amount: number) => {
    const newPack = pack
    newPack.amount = amount
    const newSelection = [...selection]
    const index = newSelection.findIndex(p => p.name === pack.name)
    newSelection.splice(index, 1, newPack)
    setSelection(newSelection)
  }

  return <>
    <form
      id={formId}
      className={"flex-1 flex flex-col gap-8"}
      onSubmit={(e) => {
        e.preventDefault()
        handleNext(selection)
      }}
    >
      <h2 className="font-bold text-2xl text-gray-600">Paketauswahl</h2>

      <div className="flex-1">
        <div className="mb-8 flex flex-col justify-start gap-3">

          {
            selection.map((pack, i)=> <>
              <Input key={i} selection={pack} handleChange={(amount) =>  setAmount(pack, amount)}></Input>
            </>)
          }

        </div>

        <span className="my-4 text-md text-slate-600 flex justify-between">
          <span>
            Versand&nbsp;
          </span>
          <span>
            {calculateShipping(selection)},00&thinsp;€
          </span>
        </span>

        <div className="my-3 w-full h-px bg-slate-200"></div>

        <span className="text-xl text-slate-600 flex justify-between">
          <span>
            Gesamt&nbsp;
          </span>
          <span>
            {
              calculateTotal(selection)
            },00&thinsp;€
          </span>
        </span>

        <span className="text-sm text-slate-400 flex justify-end">
          ggf.&nbsp;zzgl.&nbsp;Auslandsversandkosten
        </span>

      </div>

      <Controls formId={formId} handleBack={() => handleBack(selection)} isValid={() => selection.reduce((total, current) => total + current.amount, 0) > 0} />

    </form>
  </>
}

interface InputProps {
  selection: Selection,
  handleChange: (amount: number) => void
}

function Input({selection, handleChange}: InputProps) {
  return <span className={`w-full px-4 py-3 text-lg text-slate-600 rounded-md border border-slate-300 grid grid-cols-[3fr,2fr,1fr] gap-10`}>
    <div className="flex-1">
      <h3 className="text-slate-700">{selection.name}</h3>
      <span className="text-slate-500">{selection.price},00&thinsp;€</span>
    </div>
    <span className="flex justify-center items-center">
      <span className="hidden md:inline px-3 py-2">Anzahl</span>
      <button type="button" class="w-8 px-3 py-2 border-l border-t border-b rounded-l-md bg-slate-200 hover:bg-slate-300 hover:border-slate-300" onClick={() => selection.amount > selection.min && handleChange(selection.amount - 1)}>-</button>
      <input
        className={`w-12 text-center px-3 py-2 border-t border-b focus:outline-none bg-transparent`}
        type="text"
        onKeyDown={(event) => event.preventDefault()}
        value={selection.amount}>
      </input>
      <button type="button" class="w-8 px-3 py-2 border-t border-b border-r rounded-r-md bg-slate-200 hover:bg-slate-300 hover:border-slate-300" onClick={() => selection.amount < selection.max && handleChange(selection.amount + 1)}>+</button>
    </span>
    <span className="text-right flex justify-end items-center">
      {selection.amount * selection.price},00&thinsp;€
    </span>
  </span>
}
