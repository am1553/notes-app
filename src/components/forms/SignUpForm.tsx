"use client";
import React, { useEffect, useRef, useState } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { authService } from "@/config/axios";
import { redirect } from "next/navigation";
const formSchema = z.object({
  email: z
    .string()
    .min(5, { message: "Email should be atleast 5 characters." })
    .max(320, { message: "Email cannot exceed 320 characters." })
    .email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(8, { message: "Password should be atleast 8 characters." })
    .max(50, { message: "Password cannot exceed 50 characters" }),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
});

function SignUpForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const passwordRef = useRef<HTMLInputElement>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      await authService.post("/users", data).then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setIsLoading(false);
        redirect("/app");
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const togglePasswordVis = () => setShowPassword((prev) => !prev);

  useEffect(() => {
    if (!passwordRef.current) return;
    if (showPassword) {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  }, [showPassword]);

  return (
    <div className="flex flex-col gap-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field}></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field}></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field}></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative h-fit w-full">
                    <Input
                      placeholder="Enter password"
                      type="password"
                      {...field}
                      ref={passwordRef}
                      className="pr-10"
                    ></Input>
                    <button
                      type="button"
                      onClick={togglePasswordVis}
                      className="absolute top-2/4 -translate-y-2/4 right-3"
                    >
                      <Image
                        src={
                          showPassword
                            ? "/icon-hide-password.svg"
                            : "/icon-show-password.svg"
                        }
                        height={20}
                        width={20}
                        alt="password visibility"
                      />
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </Form>
      <div className="text-center">
        <span>Already have an account? </span>
        <Link href={"/"} className="font-bold ">
          Login
        </Link>
      </div>
    </div>
  );
}

export default SignUpForm;
