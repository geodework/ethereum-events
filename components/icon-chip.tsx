import { CATEGORY_META, TCategory } from "@/lib/filter"

export function IconChip({
  icon: Icon,
  label,
}: {
  icon: React.ElementType
  label: string
}): React.ReactElement {
  const bgColor = CATEGORY_META[label as TCategory]?.color || "bg-cyan-100"
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full ${bgColor} px-2 py-1 text-xs font-medium text-secondary-700 mr-2 mb-1`}
    >
      <Icon className="h-3 w-3 text-primary-light-500 " />
      {label}
    </span>
  )
}
