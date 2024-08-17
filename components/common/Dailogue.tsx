import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader } from "lucide-react"
import { ReactNode } from "react"

const DialogComponent = (
    { buttonTitle, title, dialogDescription, RenderItm, dialogActionTitle, buttonVariant, handleSubmit, loading = false }:
        { buttonTitle?: string, title?: string, dialogDescription?: string, RenderItm?: ReactNode, dialogActionTitle?: string, buttonVariant: any, handleSubmit?: ()=> void, loading?: boolean }
) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} className="w-full">{buttonTitle}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {dialogDescription}
          </DialogDescription>
        </DialogHeader>
            {RenderItm}
        <DialogFooter>
                  <Button onClick={handleSubmit} disabled={loading}>                      
                      {loading && <Loader className="mr-3 animate-spin" /> }
                      {dialogActionTitle}
                      </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DialogComponent;