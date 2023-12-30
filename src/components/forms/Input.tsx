interface Props {
    type: string,
    name?: string,
    label?: string,
    value?: string,
    handleChange?: (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    explanation?: string,
    isRequired?: boolean,
    size?: number
}

export function Input({
    type,
    name,
    label,
    value,
    handleChange,
    explanation,
    isRequired = false,
    size
}: Props) {
    return <>
        <label className={(size ? "" : "flex-1 ") + "flex flex-col"}>
            <span className="pl-1 text-gray-600 text-md">{label}{isRequired && " *"}</span>
            {
                type === "textarea"
                ? <textarea
                    className={"peer px-2 py-1 border border-gray-300 bg-transparent rounded-md text-lg text-gray-800 focus:outline-none focus:border-gray-600"}
                    name={name}
                    rows={size}
                    value={value}
                    onChange={handleChange}
                    required={isRequired}
                    autoComplete="off"
                />
                : <input
                    className={"peer px-2 py-1 border border-gray-300 bg-transparent rounded-md text-lg text-gray-800 focus:outline-none focus:border-gray-600"}
                    type={type}
                    name={name}
                    size={size}
                    value={value}
                    onChange={handleChange}
                    required={isRequired}
                    autoComplete="off"
                />
            }
            {
                explanation &&
                <span className="text-sm text-transparent text-right peer-focus:text-gray-500">
                    {explanation}
                </span>
            }
        </label>
    </>
}

export function ReadOnlyInput(name: string, value: string, type: "text" | "textarea" = "text") {
  if (type === "text") {
    return <>
      <label>
        <input
          readOnly
          name={name}
          value={value}
          className="text-lg bg-transparent focus:outline-none"
        />
      </label>
    </>
  } else {
    return <>
      <label>
        <textarea
          readOnly
          name={name}
          value={value}
          className="w-full text-lg bg-transparent resize-none focus:outline-none"
          rows={4}
        />
      </label>
    </>
  }
}