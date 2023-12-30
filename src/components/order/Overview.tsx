import type { CollectionEntry } from 'astro:content'

type Props = {
  current: string,
  pack: CollectionEntry<'packs'>,
}

export function Overview({ current, pack }: Props) {
  return <>
    <div className={current !== "terms" ? "block" : "hidden"}>

      <h1 className="pb-6 font-bold text-2xl text-slate-600">
        Übersicht
      </h1>

      <p className="pt-1 flex justify-between gap-8">
        <span>{pack.data.title}</span>
        <span>{pack.data.price},00&thinsp;€</span>
      </p>

      <p className="pb-1 flex justify-between gap-8">
        <span>Versand (Deutschland)</span>
        <span>3,00&thinsp;€</span>
      </p>

      <div className="my-1 w-full h-px bg-slate-300"></div>

      <p className="py-1 flex justify-between gap-8">
        <span>Gesamt</span>
        <span>{pack.data.price + 3},00&thinsp;€</span>
      </p>

      <p className="text-right py-1 text-sm text-slate-400">
        ggf. zzgl. Auslandsversandkosten
      </p>

    </div>
  </>
}