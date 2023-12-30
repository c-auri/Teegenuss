import Button from '../forms/Button'

type Props = {
  formId: string,
  handleBack?: () => void,
  textBack?: string,
  textNext?: string,
}

export function Controls({ formId, handleBack, textBack = "Zurück", textNext = "Weiter" }: Props) {
  return <>
    <p className="w-full flex flex-col gap-1 lg:flex-row-reverse lg:justify-end lg:gap-4">
      <Button formId={formId} type="submit">{textNext}</Button>
      {
        handleBack &&
        <Button type="button" handleClick={handleBack}>{textBack}</Button>
      }
    </p>
  </>
}