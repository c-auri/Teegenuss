import { useState } from "react"
import { Input } from "../forms/Input"
import { Controls } from "./Controls"

type Props = {
  isVisible: boolean,
  initialValue: string,
  handleBack: () => void,
  handleNext: (annotation: string) => void,
}

const formId = "overview-form"

export function OverviewStep({
  isVisible,
  initialValue,
  handleBack,
  handleNext
}: Props) {
  const [ annotation, setAnnotation ] = useState(initialValue)

  return <>
    <form
      className={(isVisible ? "block" : "hidden") + " flex-1 flex flex-col"}
      id={formId}
      onSubmit={(e) => {
        e.preventDefault()
        handleNext(annotation)
      }}
    >
      <div className="hidden lg:block">
        <Input
          type="textarea"
          label="Anmerkung"
          value={annotation}
          size={4}
          handleChange={e => setAnnotation(e.currentTarget.value)}
          explanation='Falls du mir noch etwas mitteilen möchtest.'
        />
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <Controls formId={formId} handleBack={handleBack} textNext={"Bestellen"} />
      </div>
    </form>
  </>
}