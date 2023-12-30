import type { PropsWithChildren } from "react"

interface Props {
    type: "button" | "submit" | "link",
    formId?: string,
    style?: "primary" | "secondary",
    handleClick?: (e: React.MouseEvent<HTMLElement>) => void
    href?: string,
}

export default function Button({
    type,
    formId="",
    style = "primary",
    handleClick,
    href,
    children
}: PropsWithChildren<Props>) {
    if (type === 'link') {
        return  <>
            <a
                href={href}
                className=
                {
                    "cursor-pointer py-1 px-8 border-2 rounded-md text-lg hover:bg-slate-200 hover:text-slate-600 hover:border-slate-200 "
                    + (style === "primary" ? " border-slate-100 bg-slate-100 text-slate-600" : " bg-white border-slate-100 text-slate-600")
                }
            >
                {children}
            </a>
        </>
    } else {
        return <>
            <button
                type={type}
                form={formId}
                onClick={handleClick}
                className=
                {
                    "cursor-pointer py-1 px-8 border-2 rounded-md text-lg border-slate-200 "
                    + (style === "primary" && " text-slate-500 bg-slate-200 hover:bg-slate-300 hover:text-slate-600 hover:border-slate-300 first-letter:")
                    + (style === "secondary" && " text-slate-400 bg-white hover:text-slate-500 hover:border-slate-300 ")
                }
            >
                {children}
            </button>
        </>
    }
}