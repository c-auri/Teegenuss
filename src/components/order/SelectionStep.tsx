import { getEntry, type CollectionEntry } from 'astro:content'
import { Input } from '../forms/Input'
import { Controls } from './Controls'

const defaultSelection: Pack = await getEntry('packs', '23-1-Chinas-Schaetze')

export type Pack = CollectionEntry<'packs'>

export function initializeSelection(): Pack[] {
  return [defaultSelection]
}

type Props = {
  initialSelection: Pack[],
  handleBack: () => void,
  handleNext: () => void,
}

const formId = "packs-form"

export function SelectionStep({initialSelection, handleBack, handleNext}: Props) {
  return <>
    <form
      id={formId}
      className={"flex-1 flex flex-col"}
      onSubmit={(e) => {
        e.preventDefault()
        handleNext()
      }}
    >
      <h2 className="pb-6 font-bold text-2xl text-gray-600">Paketauswahl</h2>

      <div className="flex-1">
        <div className="flex flex-col justify-start gap-3">

          <Input
            type="text"
            label="Paket"
            value={initialSelection.map(pack => pack.data.title).join(', ')}
            handleChange={() => undefined}
            isRequired={true}
          />

        </div>
      </div>

      <Controls formId={formId} handleBack={() => handleBack()} />

    </form>
  </>
}
