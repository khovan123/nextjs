"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
export default function NavButton({
  children,
  className,
  srcIcon,
  widthIcon,
  heightIcon,
}) {
  const [isSubNavVisible, setIsSubNavVisible] = useState(false);

  const toggleSubNav = () => {
    setIsSubNavVisible(!isSubNavVisible);
  };
  return (
    <div className="w-full">
      <Button onClick={toggleSubNav} className={cn(className)}>
        {srcIcon && (
          <div className="w-10 flex justify-center items-center ">
            <Image src={srcIcon} alt="" width={widthIcon} height={heightIcon} />
          </div>
        )}
        <span className="text-base font-normal">Deadline</span>
      </Button>
      {isSubNavVisible && (
        <div className="top-full mt-2 w-full transition-all duration-300">
          {children}
        </div>
      )}
    </div>
  );
}
