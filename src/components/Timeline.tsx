import { useState } from 'react'
import type { TimelineEntry } from '../data'

function TimelineItem({ item }: { item: TimelineEntry }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={item.description ? () => setOpen(true) : undefined}
      className={
        item.description && !open ? 'group cursor-pointer' : undefined
      }
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[15px] font-semibold text-gray-900">
          {item.title}
        </span>
        {item.dates && (
          <span className="shrink-0 text-[13px] text-gray-400">
            {item.dates}
          </span>
        )}
      </div>
      <div className="mt-1 max-w-md text-[15px] text-gray-600">
        {item.subtitle}
      </div>
      {item.description && (
        <>
          {open && (
            <p className="mt-2 text-[15px] text-gray-500">
              {item.description}
            </p>
          )}
          <span
            onClick={(e) => {
              e.stopPropagation()
              setOpen((o) => !o)
            }}
            className="mt-2 block w-fit cursor-pointer text-[13px] text-gray-400 transition-colors group-hover:text-indigo-600 hover:text-indigo-600"
          >
            {open ? 'Read less' : 'Read more'}
          </span>
        </>
      )}
    </div>
  )
}

export function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div className="space-y-8">
      {items.map((item, i) => (
        <TimelineItem key={`${item.title}-${i}`} item={item} />
      ))}
    </div>
  )
}
