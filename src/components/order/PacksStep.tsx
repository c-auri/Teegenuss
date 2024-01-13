import type { CollectionEntry } from 'astro:content'
import { Input } from '../forms/Input'
import { Controls } from './Controls'

export type Packs = CollectionEntry<'packs'>[]

export function initializePacks() {
  return []
}

type Props = {
  initialValues: Packs,
  handleBack: () => void,
  handleNext: () => void,
}

const formId = "packs-form"

export function PacksStep({initialValues, handleBack, handleNext}: Props) {
  return <>
    <form
      id={formId}
      className={"flex-1 flex flex-col"}
      onSubmit={(e) => {
        e.preventDefault()
        handleNext()
      }}
    >
      <h2 className="pb-6 font-bold text-2xl text-gray-600">Paketwauswahl</h2>

      <div className="flex-1">
        <div className="flex flex-col justify-start gap-3">

          <Input
            type="text"
            label="Paket"
            value="Chinas Schätze"
            handleChange={() => undefined}
            isRequired={true}
          />

        </div>
      </div>

      <Controls formId={formId} handleBack={() => handleBack()} />

    </form>
  </>
}
