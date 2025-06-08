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
    <div className="flex items-center space-x-3 group">
      <Switch
        id={id}
        checked={isChecked}
        onCheckedChange={onCheckedChange}
        className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-secondary-300 transition-all duration-200 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
      />
      <Label 
        htmlFor={id} 
        className="text-sm font-medium text-secondary-700 cursor-pointer transition-colors group-hover:text-primary"
      >
        {label}
      </Label>
    </div>
  )
}
