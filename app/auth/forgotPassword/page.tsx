import DialogComponent from "@/components/common/Dailogue"
import InputOTPComponent from "@/components/forgetPassword/OPT"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

const ForgotPassword = () =>{
    return (
      <section className="w-full max-w-sm h-[100vh] flex justify-center items-center m-auto">            
        <Card>
        <CardHeader>
            <CardTitle className="text-2xl">Forgot Password</CardTitle>
            <CardDescription>
            Enter your email below to reset your password.
            </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
            <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
            </div>            
        </CardContent>
        <CardFooter className="flex-col gap-3">
                    <DialogComponent
                        buttonTitle="Reset Not"
                        title="Verify OPT"
                        dialogDescription="Check your message OPT has been sent to 311 9863"
                        RenderItm={<InputOTPComponent />}
                        dialogActionTitle="Submit"
                        buttonVariant="default"
                    />
                    <Link href="/auth" className="text-muted-foreground block self-start">Already have account? Login Now</Link>
        </CardFooter>
        </Card>
      </section>
  )
}
 
export default ForgotPassword;

