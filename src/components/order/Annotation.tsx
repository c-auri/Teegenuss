import { useState } from 'react'
import { Input } from '../forms/Input'
import { Controls } from "./Controls"

type Props = {
  isVisible: boolean,
  initialValue: string,
  handleBack: () => void,
  handleNext: (annotation: string) => void,
}

const formId = "annotation-form"

export function AnnotationStep({
  isVisible,
  initialValue,
  handleBack,
  handleNext
}: Props) {
  const [annotation, setAnnotation] = useState(initialValue)

  return <>
    <form
      className={(isVisible ? "block" : "hidden") + " h-full flex flex-col"}
      id={formId}
      onSubmit={(e) => {
        e.preventDefault()
        handleNext(annotation)
      }}
    >
      <h2 className="pb-6 font-bold text-2xl text-gray-600">Anmerkung</h2>
      <Input
            type="textarea"
            label="Anmerkung"
            value={annotation}
            size={4}
            handleChange={e => setAnnotation(e.currentTarget.value)}
            explanation='Falls du mir noch etwas mitteilen möchtest.'
          />

      <div className="flex-1 flex flex-col justify-end">
        <Controls formId={formId} handleBack={handleBack} textNext={"Weiter"} />
      </div>
    </form>
  </>
}