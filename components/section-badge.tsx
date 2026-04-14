export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-[var(--green-3)] text-[var(--green-11)] text-xs font-medium px-3 py-1.5 rounded-full mb-4">
      <span className="w-3 h-px bg-[var(--green-9)] rounded-full" />
      {children}
      <span className="text-[var(--green-9)]">›</span>
    </span>
  )
}
