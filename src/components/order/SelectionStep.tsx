import { getCollection } from 'astro:content'
import { Controls } from './Controls'
import { useState } from 'react'

const allPacks = await getCollection('packs')

export type Selection = { name: string, price: number, amount: number, max: number }

export function initializeSelection(): Selection[] {
  return allPacks.reduce<Selection[]>((result, current) => {
    if (current.data.stash > 0) {
      result.push({
        name: current.data.title,
        price: current.data.price,
        amount: 0,
        max: current.data.stash
      })
    }
    return result
  }, [])
}

type Props = {
  initialSelection: Selection[],
  handleBack: () => void,
  handleNext: () => void,
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
      className={"flex-1 flex flex-col"}
      onSubmit={(e) => {
        e.preventDefault()
        handleNext()
      }}
    >
      <h2 className="pb-8 font-bold text-2xl text-gray-600">Paketauswahl</h2>

      <div className="flex-1">
        <div className="flex flex-col justify-start gap-3">

          {
            selection.map(pack => <>
              <Input selection={pack} handleChange={(amount) =>  setAmount(pack, amount)}></Input>
            </>)
          }

        </div>

        <span className="mt-8 text-xl text-slate-600 flex justify-between">
          <span>
            Gesamt&nbsp;
          </span>
          <span>
            {
              selection.reduce<number>((total, current) => total + (current.amount * current.price), 0)
            },00&thinsp;€
          </span>
        </span>

        <span className="text-sm text-slate-400 flex justify-end">
          zuzüglich&nbsp;Versandkosten
        </span>

      </div>

      <Controls formId={formId} handleBack={() => handleBack()} />

    </form>
  </>
}

interface InputProps {
  selection: Selection,
  handleChange: (amount: number) => void
}

function Input({selection, handleChange}: InputProps) {
  return <span className={`w-full px-8 py-3 text-lg text-slate-600 rounded-md border border-slate-300 grid grid-cols-[3fr,2fr,1fr] gap-10`}>
    <div className="flex-1">
      <h3 className="text-slate-700">{selection.name}</h3>
      <span className="text-slate-500">{selection.price},00&thinsp;€</span>
    </div>
    <span className="border rounded-md flex justify-center items-center">
      <span className="mx-3">Anzahl</span>
      <input
        className={`w-10 focus:outline-none`}
        type="number"
        onKeyDown={(event) => event.preventDefault()}
        min="0"
        max={selection.max}
        value={selection.amount}
        onChange={(e) => handleChange(parseInt(e.currentTarget.value))}>
      </input>
    </span>
    <span className="text-right flex justify-end items-center">
      {selection.amount * selection.price},00&thinsp;€
    </span>
  </span>
}
