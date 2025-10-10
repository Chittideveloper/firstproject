import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <p className="text-sm">This is inside the popover.</p>
          <Button className="w-full">Action</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
