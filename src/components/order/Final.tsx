import { Controls } from "./Controls"

type Props = {
  isVisible: boolean,
  handleBack: () => void,
}

const formId = "final-form"

export function FinalStep({
  isVisible,
  handleBack
}: Props) {
  return <>
    <form
      className={(isVisible ? "block" : "hidden") + " h-full flex flex-col"}
      id={formId}
      method="POST"
      data-netlify="true"
    >
      <Controls formId={formId} handleBack={handleBack} textNext={"Bestellen"} />
    </form>
  </>
}