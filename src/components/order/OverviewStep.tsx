import { Controls } from "./Controls"
import { formId } from "./Overview"

type Props = {
  isVisible: boolean,
  initialValue: string,
  handleBack: () => void,
  handleNext: (annotation: string) => void,
}

export function OverviewStep({
  isVisible,
  initialValue,
  handleBack,
  handleNext
}: Props) {

  return <>
    <form
      className={(isVisible ? "block" : "hidden") + " flex-1 flex flex-col"}
      id={formId}
      onSubmit={(e) => {
        e.preventDefault()
        handleNext(initialValue)
      }}
    >
      <div className="flex-1 flex flex-col justify-end">
        <Controls formId={formId} handleBack={handleBack} textNext={"Weiter"} />
      </div>
    </form>
  </>
}