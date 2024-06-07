import React from "react";
import { LandingNavigation } from "./LandingNavigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroSection from "./HeroSection";
export default function LandingHeader() {
  return (
    <HeroSection>
      <header className="bg-slate-900 h-[90vh] w-full py-12 flex items-center justify-center">
        <div className="flex flex-col items-center justify-between h-full w-full mx-32 relative">
          <nav className="flex justify-between items-center w-full">
            <div className="bg-slate-300 text-center px-4 py-2 rounded-md ">
              <p className="font-semibold text-lg">Deadline Tracker</p>
            </div>
            <LandingNavigation />
          </nav>
          {/* <div className="flex gap-12 justify-center items-center"> */}
          {/* <Button className="bg-slate-400">Discover</Button> */}
          <Button className="group text-slate-900 items-center justify-center rounded-md bg-background text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 absolute top-[90%]">
            <Link href="/auth/signup" className="font-semibold">
              Getting Started
            </Link>
          </Button>
          {/* </div> */}
        </div>
      </header>
    </HeroSection>
  );
}
