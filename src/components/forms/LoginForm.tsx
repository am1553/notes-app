"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import authService from "@/config/axiosAuth.config";
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
});

function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await authService.post("/sign-in", data).then((res) => {
        const { token, user, noteID } = res.data;
        Cookies.set("accessToken", token.access);
        localStorage.setItem("user", JSON.stringify(user));
        if (window.innerWidth < 1024) {
          router.push(`/app`);
        } else {
          router.push(`/app/${noteID}`);
        }
      });
    } catch (error) {
      console.error(error);
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
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
          ></FormField>
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
          ></FormField>
          <Button type="submit" className="w-full">
            {isLoading ? <span>...</span> : <span>Login</span>}
          </Button>
        </form>
      </Form>
      <div className="text-center">
        <span>No account yet? </span>
        <Link href={"/sign-up"} className="font-bold ">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
