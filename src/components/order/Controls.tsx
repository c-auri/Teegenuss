import Button from '../forms/Button'

type Props = {
  formId: string,
  handleBack?: () => void,
  isValid?: () => boolean,
  textBack?: string,
  textNext?: string,
}

export function Controls({ formId, handleBack, isValid = () => true, textBack = "Zurück", textNext = "Weiter" }: Props) {
  return <>
    <p className="w-full min-h-[6rem] my-6 flex flex-col gap-1 lg:my-0 lg:min-h-0 lg:flex-row lg:justify-start lg:gap-2">
      {
        handleBack &&
        <Button type="button" handleClick={handleBack} style="secondary">{textBack}</Button>
      }
      {
        isValid() &&
        <Button formId={formId} type="submit">{textNext}</Button>
      }
    </p>
  </>
}