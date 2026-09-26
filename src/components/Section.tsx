import type { ReactNode } from 'react'

export function Section({
  label,
  children,
  className,
}: {
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <div className="text-[13px] text-gray-400">{label}</div>
      <div className="mt-4">{children}</div>
    </div>
  )
}
