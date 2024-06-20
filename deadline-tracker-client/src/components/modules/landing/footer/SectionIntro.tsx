import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SectionIntro() {
  return (
    <section className="bg-slate-800 w-full">
      <div className="flex justify-around items-center mx-48 h-40">
        <div className="text-gray-100 flex flex-col gap-2 justify-center items-start">
          <h1 className="text-3xl font-semibold">
            Newsletter - Stay tune and get the latest update
          </h1>
          <p className="text-sm">Far for away, behind the word mountains</p>
        </div>
        <div className="relative w-72 flex items-center border-b-2 border-white ">
          <input
            type="email"
            className="text-sm w-full border-x-0 border-y-0  outline-0 bg-transparent transition-colors text-white"
            placeholder="Enter your email address"
            name="email"
            id="email"
          />
          <Link href="">
            <SendIcon className="text-gray-100" />
          </Link>
        </div>
      </div>
    </section>
  );
}
