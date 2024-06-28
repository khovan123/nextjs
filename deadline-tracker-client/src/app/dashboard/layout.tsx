"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  BellIcon,
  BookUserIcon,
  CalendarHeart,
  ClipboardList,
  LogOutIcon,
  SettingsIcon,
  Shield,
  UserRound,
} from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DashBoardLayOut({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSubNavVisible, setIsSubNavVisible] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  const [isLockAside, setIsLockAside] = useState(false);
  const [isChangeLayout, setIsChangeLayout] = useState(false);
  return (
    <section className="bg-slate-800 w-screen h-full overflow-x-hidden">
      <div className="grid h-full grid-rows-[auto_1fr] grid-cols-[auto_1fr]">
        <header className="flex justify-between items-center py-3 pr-6 border-b border-gray-700 col-span-2 ">
          <div className="flex gap-6 justify-center items-center w-full ml-2">
            <Button
              className="bg-transparent hover:bg-slate-700 flex justify-center items-center px-0 py-0"
              onClick={() => {
                setIsExpand(!isExpand);
                setIsLockAside(!isLockAside);
                setIsSubNavVisible(false);
              }}
            >
              <div className="w-10 flex justify-center items-center ">
                <CalendarHeart />
              </div>
            </Button>
            <Link
              className="text-gray-100 w-full font-semibold text-2xl"
              href="/"
            >
              Deadline Tracker
            </Link>
          </div>
          <nav className="w-full flex justify-end items-center gap-3 ">
            <Button className="bg-transparent hover:bg-slate-700">
              <Link href="#">
                <BellIcon />
              </Link>
            </Button>

            <Link href="/dashboard/profile">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          </nav>
        </header>
        <aside
          className={cn(
            "bg-slate-800 px-2 border-r border-gray-700 pt-6 flex flex-col justify-between items-center ",
            isExpand ? "w-52" : "w-fit"
          )}
          onPointerLeave={() => !isLockAside && setIsSubNavVisible(false)}
          onPointerOut={() => !isLockAside && setIsExpand(false)}
          onPointerOver={() => !isLockAside && setIsExpand(true)}
        >
          <ul className="flex flex-col justify-start items-center gap-3 w-full h-full">
            <li className="w-full">
              <Button
                onClick={() => setIsSubNavVisible(!isSubNavVisible)}
                className={
                  "w-full justify-start items-center bg-transparent py-5 hover:bg-slate-700 flex gap-2 px-0"
                }
              >
                <div className="w-10 flex justify-center items-center ">
                  <ClipboardList />
                </div>
                {isExpand && (
                  <span className="text-base font-normal">Deadline</span>
                )}
              </Button>
              {isSubNavVisible && (
                <div className="top-full mt-2 w-full transition-all duration-300">
                  <ul className="flex flex-col">
                    <li>
                      <Button className="w-full justify-start items-center bg-transparent py-5 hover:bg-slate-700 ">
                        <Link
                          href="/dashboard/deadline/personal"
                          className="px-8 py-2 text-base font-normal flex gap-3"
                        >
                          Personal
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button
                        className="w-full justify-start items-center bg-transparent py-5 hover:bg-slate-700  "
                        // disabled -> for prime
                      >
                        <Link
                          href="/dashboard/deadline/group"
                          className="px-8 py-2 text-base font-normal flex gap-3"
                        >
                          Group
                        </Link>
                      </Button>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="w-full">
              <Button className="w-full bg-transparent py-5  hover:bg-slate-700 px-0 group">
                <Link
                  href="/dashboard/profile"
                  className="flex gap-2 justify-start items-center w-full"
                >
                  <div className="w-10 flex justify-center items-center ">
                    <UserRound />
                  </div>
                  {isExpand && (
                    <span className="text-base font-normal">Profile</span>
                  )}
                </Link>
              </Button>
            </li>
          </ul>
          <ul
            className={cn(
              " w-full py-6",
              isExpand
                ? "flex flex-row-reverse justify-around items-center px-4 "
                : "flex flex-col justify-center items-center gap-3"
            )}
          >
            <li>
              <Button
                className={cn(
                  "bg-transparent py-2 px-2 hover:bg-slate-700",
                  isExpand && "justify-center items-center rounded-full"
                )}
                onClick={() => setIsChangeLayout(true)}
              >
                <Link href="/dashboard/setting" className="w-fit">
                  <SettingsIcon />
                </Link>
              </Button>
            </li>
            <li>
              <Button
                className={cn(
                  "bg-transparent py-2 px-2 hover:bg-slate-700",
                  isExpand && "justify-center items-center rounded-full"
                )}
              >
                <Link href="/" className="w-fit">
                  <LogOutIcon />
                </Link>
              </Button>
            </li>
          </ul>
        </aside>

        <main className="bg-slate-900 py-4 px-4 w-full">
          <div className="w-full h-full ">{children}</div>
        </main>
      </div>
    </section>
  );
}
