import { Switch } from "@/components/ui/switch"
import { Label } from "./ui/label"

export function ToggleBar({
  isChecked,
  onCheckedChange,
  label,
}: {
  isChecked: boolean
  onCheckedChange: (isChecked: boolean) => void
  label: string
}) {
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="deadline-soon"
        checked={isChecked}
        onCheckedChange={onCheckedChange}
        className="data-[state=checked]:bg-accent"
      />
      <Label htmlFor="deadline-soon" className="text-sm text-secondary-700">
        {label}
      </Label>
    </div>
  )
}
