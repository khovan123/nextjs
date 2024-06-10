"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { IDeadlineForm } from "@/components/interfaces/data";

export const DeadlineForm: React.FC<IDeadlineForm> = ({ data, onClose }) => {
  const form = useForm({
    defaultValues: {
      title: data.title || "",
      description: data.description || "",
      time_start:
        new Date(data.time_start).toISOString().split("T")[0] ||
        new Date().toISOString().split("T")[0],
      time_end:
        new Date(data.time_end).toISOString().split("T")[0] ||
        new Date().toISOString().split("T")[0],
      status: data.status || "pending",
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
    onClose();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter title" {...field} required />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter description" {...field} required />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="time_start"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Time</FormLabel>
              <FormControl>
                <Input type="date" {...field} required />
              </FormControl>
              <FormMessage>
                {form.formState.errors.time_start?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="time_end"
          render={({ field }) => (
            <FormItem>
              <FormLabel>End Time</FormLabel>
              <FormControl>
                <Input type="date" {...field} required />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                >
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="success">Success</option>
                  <option value="failed">Failed</option>
                </select>
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-slate-900">
          Save
        </Button>
      </form>
    </Form>
  );
};
