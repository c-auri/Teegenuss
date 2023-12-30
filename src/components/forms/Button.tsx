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
                    + (style === "primary" ? " border-slate-100 bg-white text-slate-600" : " bg-white border-slate-100 text-slate-600")
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
                    "cursor-pointer py-1 px-8 border-2 rounded-md text-lg hover:bg-slate-200 hover:text-slate-600 border-slate-200 hover:border-slate-200 "
                    + (style === "primary" ? "text-slate-600 bg-white" : "text-slate-500 bg-neutral-50")
                }
            >
                {children}
            </button>
        </>
    }
}