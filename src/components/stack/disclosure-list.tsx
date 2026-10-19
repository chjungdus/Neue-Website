import { Plus, Minus } from "@/components/stack/icons"

/** Questions as a bordered field of disclosure rows. Native <details>, so it works without script. */
export default function DisclosureList({
  items,
  firstOpen = false,
}: {
  items: { q: string; a: string }[]
  firstOpen?: boolean
}) {
  return (
    <div className="border-2 border-ink">
      {items.map((f, i) => (
        <details key={f.q} open={firstOpen && i === 0} className={`group ${i > 0 ? "border-t-2 border-ink" : ""}`}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-5 font-extrabold text-deep hover:text-ink group-open:bg-ink group-open:text-paper [&::-webkit-details-marker]:hidden">
            <h3 className="m-0 text-[1.125rem] font-extrabold tracking-normal text-inherit">{f.q}</h3>
            <span className="grid h-7 w-7 flex-none place-items-center border-2 border-ink text-ink group-open:border-paper group-open:text-paper">
              <Plus size={12} className="group-open:hidden" />
              <Minus size={12} className="hidden group-open:block" />
            </span>
          </summary>
          <div className="px-5 pb-5 pt-4">
            <p className="measure">{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  )
}
