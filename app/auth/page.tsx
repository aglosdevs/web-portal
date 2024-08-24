"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation'
import useUserHook from "@/hook/userHooks";

const formSchema = z.object({
	email: z
		.string()
		.min(6, {
			message: 'Email is required',
		})
		.email({
			message: 'Please enter a valid email',
		}),
	password: z.string().min(6, {
		message: 'Password is required',
	}),
})


const Auth = () => {

  const router = useRouter();
  const userLoginHook = useUserHook();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {       
    userLoginHook.handleUSerLogin(data);    
		router.push('/')
	}

  return (
    <section className="w-full max-w-sm h-[100vh] flex justify-center items-center m-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter Email"
                          {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter Password"
                          {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-3">
              <Button className="w-full" type="submit">
                Sign in
              </Button>
              <Link
                href="/auth/forgotPassword"
                className="text-muted-foreground block self-start"
              >
                Forgot password
              </Link>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </section>
  );
};

export default Auth;
