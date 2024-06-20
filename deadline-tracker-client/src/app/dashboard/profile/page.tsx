"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";

import { Input } from "@/components/ui/input";
import { IUser } from "@/components/interfaces/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useForm } from "react-hook-form";
import {
  CalendarIcon,
  CircleXIcon,
  PenBoxIcon,
  PenLineIcon,
  PencilIcon,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import Image from "next/image";
const data: IUser = {
  id: "120aam1",
  username: "minhpnq1807",
  password: "12345678",
  name: "Phan Nguyen Quoc Minh",
  nickname: "Kho Van",
  DoB: new Date("2004-07-18"),
  sex: "male",
  phone: "0767348675",
  email: "minhpnq1807@gmail.com",
  address: "Dien Thang Nam, Dien Ban, Quang Nam",
  status: "busy",
  getting_day: new Date(),
};
export default function ProfilePage() {
  const [isEdit, setIsEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState<String | null>(null);

  const form = useForm({
    defaultValues: {
      id: data.id || Math.round(Math.random()).toString,
      username: data.username || "",
      password: data.password || data.username || "12345678",
      name: data.name || "",
      nickname: data.nickname || "",
      DoB: new Date(data.DoB) || new Date(),
      sex: data.sex || "unknow",
      phone: data.phone || "",
      email: data.email || "",
      address: data.address || "",
      status: data.status || "",
      getting_day: new Date(data.getting_day) || new Date(),
    },
  });

  const onSubmit = (values: any) => {
    const updatedItem = {
      id: values.id,
      title: values.title,
      description: values.description,
      time_start: new Date(values.time_start),
      time_end: new Date(values.time_end),
      status: values.status,
    };
  };

  return (
    <section className="bg-green-800 w-full h-full rounded-lg flex justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full h-full ">
          <div className="grid grid-cols-2 gap-4 py-10 px-52">
            <div className="py-4 px-4 col-span-2">
              <div className="w-full relative flex justify-center">
                <div className="w-40 h-40 relative">
                  <Avatar className="w-40 h-40 bg-blue-600">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem className="absolute z-10 top-0 left-28 bg-white border-2 border-yellow-300 rounded-full">
                        <Dialog
                          open={selectedItem === field.value}
                          onOpenChange={(isOpen) => {
                            if (!isOpen) setSelectedItem(null);
                          }}
                        >
                          <DialogTrigger
                            className="capitalize px-1"
                            onClick={() => {
                              setSelectedItem(field.value);
                            }}
                          >
                            {field.value || "status"}
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Status </DialogTitle>
                            </DialogHeader>
                            <FormControl>
                              <select
                                {...field}
                                className="px-3 py-[10px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="out sick">Out sick</option>
                                <option value="busy">Busy</option>
                                <option value="focusing">Focusing</option>
                                <option value="working from home">
                                  Working from home
                                </option>
                                <option value="on vocation">On Vocation</option>
                              </select>
                            </FormControl>
                          </DialogContent>
                        </Dialog>
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  className="bg-transparent py-0 px-0 hover:bg-transparent focus:bg-transparent absolute bottom-0 right-0 translate-y-full translate-x-full"
                  onClick={() => setIsEdit(!isEdit)}
                >
                  {!isEdit ? (
                    <PenLineIcon />
                  ) : (
                    <CircleXIcon className="text-red-500" />
                  )}
                </Button>
              </div>
            </div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      disabled={!isEdit}
                      className=" disabled:opacity-100"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nickname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nick Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      disabled={!isEdit}
                      className=" disabled:opacity-100"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="w-full flex items-end justify-between">
              <FormField
                control={form.control}
                name="DoB"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger
                        asChild
                        disabled={!isEdit}
                        className=" disabled:opacity-100"
                      >
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full h-full pl-3 text-left font-normal flex items-center justify-center gap-2",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className=" h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sex"
                render={({ field }) => (
                  <FormItem className="w-fit flex flex-col">
                    <FormLabel>Sex</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="pl-3 py-[10px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  disabled:opacity-100"
                        disabled={!isEdit}
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="unknow">Unknow</option>
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      disabled={!isEdit}
                      className=" disabled:opacity-100"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="tel"
                      disabled={!isEdit}
                      className=" disabled:opacity-100"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      disabled={!isEdit}
                      className=" disabled:opacity-100"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {isEdit && (
              <div className="w-full flex justify-end col-span-2 items-center">
                <Button
                  type="submit"
                  className="bg-slate-900 flex justify-center w-fit"
                  onClick={() => setIsEdit(false)}
                >
                  Save
                </Button>
              </div>
            )}
          </div>
        </form>
      </Form>
    </section>
  );
}
