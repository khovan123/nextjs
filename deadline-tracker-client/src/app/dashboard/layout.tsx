import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavButton from "@/components/modules/common/NavButton";

export default function DashBoardLayOut({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-slate-800 w-screen h-screen overflow-hidden">
      <div className="grid h-full grid-rows-[auto_1fr] grid-cols-[auto_1fr]">
        <header className="flex justify-between items-center px-3 py-3 pr-6 border-b border-gray-700 col-span-2  ">
          <div className="flex gap-2 justify-center items-center w-full">
            <Button className="bg-transparent hover:bg-slate-700">
              <Image
                src="/assets/fries-menu.png"
                alt=""
                width={25}
                height={25}
              />
            </Button>
            <span className="text-gray-100 w-full font-semibold text-lg">
              Deadline Tracker
            </span>
          </div>
          <nav className="w-full flex justify-end items-center gap-3 ">
            <Button className="bg-transparent hover:bg-slate-700">
              <Link href="#">
                <Image src="/notification.svg" alt="" width={20} height={20} />
              </Link>
            </Button>
            <Button className="bg-transparent hover:bg-slate-700">
              <Link href="#">
                <Image src="/assets/menu.png" alt="" width={20} height={20} />
              </Link>
            </Button>
            <Link href="#">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          </nav>
        </header>
        <nav className="bg-slate-800 px-3 border-r border-gray-700 pt-6 w-64">
          <ul className="flex flex-col justify-center items-start gap-3">
            <li className="w-full">
              <NavButton
                className={
                  "w-full justify-start items-center bg-transparent py-5 hover:bg-slate-700 text-base font-normal flex gap-3"
                }
                srcIcon="/assets/deadlinelist.png"
                widthIcon={25}
                heightIcon={25}
              >
                <ul className="flex flex-col">
                  <li>
                    <Button className="w-full justify-start items-center bg-transparent py-5 hover:bg-slate-700 ">
                      <Link
                        href="/dashboard/personal"
                        className="px-7 py-2 hover:bg-gray-700 text-base font-normal flex gap-3"
                      >
                        Personal
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button className="w-full justify-start items-center bg-transparent py-5 hover:bg-slate-700 ">
                      <Link
                        href="/dashboard/group"
                        className="px-7 py-2 hover:bg-gray-700 text-base font-normal flex gap-3"
                      >
                        Gruop
                      </Link>
                    </Button>
                  </li>
                </ul>
              </NavButton>
            </li>
            <li className="w-full">
              <Button className="w-full justify-start bg-transparent py-5 hover:bg-slate-700">
                <Link
                  href="/dashboard/profile"
                  className="text-base font-normal flex gap-3 justify-start items-center"
                >
                  <Image
                    src="/assets/user-account.png"
                    alt=""
                    width={25}
                    height={25}
                  />
                  Profile
                </Link>
              </Button>
            </li>
            <li className="w-full">
              <Button className="w-full justify-start bg-transparent py-5 hover:bg-slate-700">
                <Link
                  href="/dashboard/inbox"
                  className="text-base font-normal flex gap-3 justify-start items-center"
                >
                  <Image
                    src="/assets/inbox.png"
                    alt=""
                    width={25}
                    height={25}
                  />
                  Inbox
                </Link>
              </Button>
            </li>
            <li className="w-full">
              <Button className="w-full justify-start bg-transparent py-5 hover:bg-slate-700">
                <Link
                  href="/"
                  className="text-base font-normal flex gap-3 justify-start items-center"
                >
                  <Image
                    src="/assets/logout-square.png"
                    alt=""
                    width={25}
                    height={25}
                  />
                  Log Out
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
        <main className="bg-slate-900 pt-4 px-4 w-full">
          <div className="w-full h-full bg-slate-800 rounded-t-md">
            {children}
          </div>
        </main>
      </div>
    </section>
  );
}
