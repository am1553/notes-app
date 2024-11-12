"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { apiService } from "@/config/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title cannot be shorted than 3 characters." })
    .max(255, { message: "Title cannot be longer than 255 characters." }),
  tags: z
    .string()
    .min(3, { message: "Tag cannot be less than 3 characters" })
    .max(50, { message: "Tag cannot be greater than 15 characters." }),
  description: z
    .string()
    .min(10, { message: "Description cannot be less than 10 characters." })
    .max(1000, {
      message: "Description cannot exceed more than 1000 characters.",
    }),
});

function CreateNotePage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const formSubmitaBtnRef = useRef<HTMLButtonElement>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      tags: "",
      description: "",
    },
  });

  const handleSave = () => {
    if (!formSubmitaBtnRef.current) return;
    formSubmitaBtnRef.current.click();
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await apiService.post("/notes", data).then((res) => {
        setIsLoading(false);
        console.log(res);
      });
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="bg-white h-full py-5 px-4 md:px-8 md:py-6 rounded-t-lg flex flex-col gap-3">
      <header className="text-preset-4 flex justify-between">
        <Link href={"/app"} className="flex items-center">
          <Image
            src={"/icon-arrow-left.svg"}
            height={18}
            width={18}
            alt="right arrow"
          />
          <span>Go Back</span>
        </Link>

        <div className="flex gap-2">
          <Link href={"/app"}>Cancel</Link>
          <button type="button" onClick={handleSave} className="text-blue-500">
            Save
          </button>
        </div>
      </header>
      <hr />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 h-full"
          ref={formRef}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter a title..."
                    className="text-preset-1 font-bold outline-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-preset-6">
                <div className="flex items-center gap-1 text-preset-6">
                  <Image
                    src={"/icon-tag.svg"}
                    width={20}
                    height={20}
                    alt="tag"
                  />
                  <span>Tags</span>
                </div>
                <FormControl>
                  <Input
                    placeholder="e.g. Work, Planning"
                    className="outline-none py-0"
                    {...field}
                  />
                </FormControl>
                <div
                  className="flex items-center gap-1 text-preset-6 h-full"
                  style={{ margin: 0 }}
                >
                  <Image
                    src={"/icon-clock.svg"}
                    width={20}
                    height={20}
                    alt="tag"
                  />
                  <span>Last Edited</span>
                </div>
                <Input
                  className="outline-none py-0 text-neutral-400 text-preset-6"
                  value={"Not yet saved"}
                  readOnly
                />
              </FormItem>
            )}
          />
          <hr />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="h-full">
                <FormControl>
                  <textarea {...field} className="h-full w-full outline-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            className="hidden"
            ref={formSubmitaBtnRef}
            type="submit"
          ></button>
        </form>
      </Form>
    </div>
  );
}

export default CreateNotePage;
