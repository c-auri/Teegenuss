import type { PropsWithChildren } from "react"

interface Props {
    type: "button" | "submit" | "link",
    formId?: string,
    style?: "primary" | "secondary",
    handleClick?: (e: React.MouseEvent<HTMLElement>) => void
    href?: string,
}

function getClasses(style: string): string { 
    return "cursor-pointer py-1 px-8 border-2 rounded-md text-lg border-olive-800 hover:border-olive-700 hover:bg-olive-700 hover:text-slate-100" 
    + (style === "primary" ? " text-slate-100 bg-olive-800" : " text-olive-800 bg-white")
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
            <a href={href} className={getClasses(style)}>
                {children}
            </a>
        </>
    } else {
        return <>
            <button type={type} form={formId} onClick={handleClick} className={getClasses(style)}>
                {children}
            </button>
        </>
    }
}
