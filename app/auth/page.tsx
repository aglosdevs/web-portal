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

const Auth = () =>{
    return (
      <section className="w-full max-w-sm h-[100vh] flex justify-center items-center m-auto">            
        <Card>
        <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
            Enter your email below to login to your account.
            </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
            <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
            </div>
        </CardContent>
        <CardFooter className="flex-col gap-3">
                    <Button className="w-full">Sign in</Button>
                    <Link href="/auth/forgotPassword" className="text-muted-foreground block self-start">Forgot password</Link>
        </CardFooter>
        </Card>
      </section>
  )
}
 
export default Auth;

