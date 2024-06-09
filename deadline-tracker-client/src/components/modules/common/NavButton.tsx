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
          <Image src={srcIcon} alt="" width={widthIcon} height={heightIcon} />
        )}
        Deadline
      </Button>
      {isSubNavVisible && (
        <div className="top-full mt-2 w-full transition-all duration-300">
          {children}
        </div>
      )}
    </div>
  );
}
