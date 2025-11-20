"use client";

import CardWrapper from "./card-wrapper";
import { RegisterSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios, { AxiosError } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { useState, useTransition } from "react";
import FormError from "../ui/form-error";
import FormSuccess from "../ui/form-success";

const RegisterForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  function onSubmitFun(values: z.infer<typeof RegisterSchema>) {
    // console.log("Response Recived");
    // console.log(values);
    // toast("You Have Sent The Following Data", {
    //   description: () => (
    //     <div className="text-emerald-400">{JSON.stringify(values)}</div>
    //   ),
    //   closeButton: true,
    // });

    startTransition(async () => {
      let response;
      try {
        response = await axios({
          method: "POST",
          url: "http://localhost:3001/v1/register/addUser",
          data: values,
        });
        setSuccess(response.data.message);
      } catch(error:unknown) {
        if(error instanceof AxiosError){
          setError(error.response?.data.message);
        }
        setError("Error in registering user");
      }
    });
  }
  return (
    <CardWrapper
      topText="Register"
      headerLabel="Welcome Back"
      backButtonLabel="Already Have An Account? Login"
      backButtonUrl="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmitFun)} className="space-y-6">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Joe Doe"
                      type="text"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormDescription>Enter Your Name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="joe@example.com"
                      type="email"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormDescription>Enter Your Login Email</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="*******"
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            Register
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
