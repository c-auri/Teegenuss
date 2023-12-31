import { Controls } from "./Controls"

type Props = {
  isVisible: boolean,
  initialValue: string,
  handleBack: () => void,
  handleNext: (annotation: string) => void,
}

const formId = "annotation-form"

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
      <h2 className="pb-6 font-bold text-2xl text-gray-600">Anmerkung</h2>

      <div className="flex-1 flex flex-col justify-end">
        <Controls formId={formId} handleBack={handleBack} textNext={"Weiter"} />
      </div>
    </form>
  </>
}