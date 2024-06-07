import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LandingIntro() {
  return (
    <section className="bg-slate-800 w-full">
      <div className="flex justify-around items-center mx-40 h-40 px-32">
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
          <Button className="p-0 h-0">
            <Image src="/assets/send.png" alt="" width={15} height={15} />
          </Button>
        </div>
      </div>
    </section>
  );
}
