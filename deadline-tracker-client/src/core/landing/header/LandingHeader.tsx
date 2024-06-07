import React from "react";
import { LandingNavigation } from "./LandingNavigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LandingHeroSection from "./LandingHeroSection";
export default function LandingHeader() {
  return (
    <header className="w-screen h-full">
      <LandingHeroSection>
        <div className="flex flex-col items-center justify-between h-full w-full mx-32 relative">
          <nav className="flex justify-between items-center w-full">
            <div className="bg-slate-300 text-center px-4 py-2 rounded-md ">
              <p className="font-semibold text-lg">Deadline Tracker</p>
            </div>
            <LandingNavigation />
          </nav>
          {/* <div className="flex gap-12 justify-center items-center"> */}
          {/* <Button className="bg-slate-400">Discover</Button> */}
          <Button className="bg-slate-200 text-cyan-900 absolute top-[80%] hover:bg-slate-300">
            <Link href="/auth/signup" className="font-semibold">
              Getting Started
            </Link>
          </Button>
          {/* </div> */}
        </div>
      </LandingHeroSection>
    </header>
  );
}
