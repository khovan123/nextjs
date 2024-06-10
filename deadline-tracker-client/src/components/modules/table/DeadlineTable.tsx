"use client";
import { IDeadline } from "@/components/interfaces/data";
import { Button } from "@/components/ui/button";
import { getRemainingTime, sortByTime } from "@/utils/Helper/remainingTime";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { DeadlineForm } from "../common/DeadlineForm";
type DeadlineTableProps = {
  data: IDeadline[];
};

const DeadlineTable: React.FC<DeadlineTableProps> = ({ data }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedItem, setSelectedItem] = useState<IDeadline | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const headers = Object.keys(data[0]).filter((header) => header !== "id");
  const isDate = (value: any): value is Date => value instanceof Date;
  const getStyleStatus = (status: string) => {
    switch (status) {
      case "processing":
        return "before:content-[''] before:bg-blue-600 before:w-2 before:h-2 before:absolute relative before:rounded-full before:top-1/2 before:left-0 before:-translate-y-1/2";
      case "pending":
        return "before:content-[''] before:bg-yellow-600 before:w-2 before:h-2 before:absolute relative before:rounded-full before:top-1/2 before:left-0 before:-translate-y-1/2";
      case "success":
        return "before:content-[''] before:bg-green-600 before:w-2 before:h-2 before:absolute relative before:rounded-full before:top-1/2 before:left-0 before:-translate-y-1/2";
      case "failed":
        return "before:content-[''] before:bg-red-600 before:w-2 before:h-2 before:absolute relative before:rounded-full before:top-1/2 before:left-0 before:-translate-y-1/2";
      default:
        return "";
    }
  };

  return (
    <section className="overflow-x-hidden">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-slate-700">
            {headers.map((header) => (
              <th
                key={header}
                className={cn(
                  "px-4 py-2 text-gray-200 capitalize text-left ",
                  header === "title" && "rounded-l-lg"
                )}
              >
                {header.replace(/_/g, " ").replace(/\b\w/g, (char) => char)}
              </th>
            ))}
            <th
              key="remaining-time"
              className="px-4 py-2  text-gray-200 capitalize text-left"
            >
              Remaining
            </th>
            <th className="px-4 py-2 text-gray-200 capitalize text-left rounded-r-lg"></th>
          </tr>
        </thead>
        <tbody>
          {sortByTime(data).map((item) => (
            <tr key={item.id} className="border-b border-gray-700">
              {headers.map((header) => {
                const value = item[header as keyof IDeadline];
                return (
                  <td
                    key={header}
                    className={cn(
                      "px-4 py-4  text-gray-200 capitalize text-left ",
                      { [getStyleStatus(item.status)]: header === "status" }
                    )}
                  >
                    {isDate(value) ? value.toLocaleDateString() : value}
                  </td>
                );
              })}
              <td
                key="remaining-time"
                className="px-4 py-4  text-gray-200 capitalize text-left "
              >
                {getRemainingTime(
                  new Date(item.time_start),
                  new Date(item.time_end)
                )}
              </td>
              <td className="px-4 py-4  text-gray-200 capitalize text-left font-medium flex justify-center items-center">
                <div className="flex gap-3">
                  <Dialog
                    open={selectedItem === item}
                    onOpenChange={(isOpen) => {
                      if (!isOpen) setSelectedItem(null);
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button
                        className="flex justify-center items-center gap-2 bg-blue-600 px-3 hover:bg-blue-700"
                        onClick={() => setSelectedItem(item)}
                      >
                        <Image
                          src="/assets/edit.png"
                          width={25}
                          height={25}
                          alt=""
                        />
                        <span>Edit</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit</DialogTitle>
                      </DialogHeader>
                      <DeadlineForm
                        data={item}
                        onClose={() => setSelectedItem(null)}
                      />
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="flex justify-center items-center gap-2 bg-red-600 px-2 hover:bg-red-700">
                        <Image
                          src="/assets/delete.png"
                          width={25}
                          height={25}
                          alt=""
                        />
                        <span>Delete</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Delete this deadline</DialogTitle>
                        <DialogDescription>
                          Are you sure about this action?
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className="w-full">
                        <DialogClose asChild>
                          <Button
                            className="bg-gray-200 text-slate-800 hover:bg-gray-400"
                            type="button"
                          >
                            Accept
                          </Button>
                        </DialogClose>
                        <DialogClose asChild>
                          <Button type="button" className="bg-slate-900">
                            Close
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default DeadlineTable;
