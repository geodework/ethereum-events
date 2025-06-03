import { Switch } from "@/components/ui/switch"
import { Label } from "./ui/label"

export function ToggleBar({
  id,
  isChecked,
  onCheckedChange,
  label,
}: {
  id: string
  isChecked: boolean
  onCheckedChange: (isChecked: boolean) => void
  label: string
}) {
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id={id}
        checked={isChecked}
        onCheckedChange={onCheckedChange}
        className="data-[state=checked]:bg-accent"
      />
      <Label htmlFor={id} className="text-sm text-secondary-700">
        {label}
      </Label>
    </div>
  )
}
