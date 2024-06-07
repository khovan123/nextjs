"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Facebook",
    href: "#",
    description: "Providing...",
  },
  {
    title: "Instagram",
    href: "#",
    description: "Providing...",
  },
  {
    title: "Progress",
    href: "#",
    description: "Providing...",
  },
  {
    title: "Youture",
    href: "/#",
    description: "Providing...",
  },
];

export function LandingNavigation() {
  return (
    <NavigationMenu className="">
      <NavigationMenuList className="gap-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="rounded-none bg-transparent text-gray-200 hover:bg-transparent hover:text-gray-200 focus:bg-transparent focus:text-gray-200 dark:bg-transparent dark:hover:bg-transparent dark:focus:bg-transparent relative data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent before:content-stretch before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-slate-200 before:w-0 before:transition-all before:ease-in-out before:duration-300 hover:before:w-full">
            About us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Deadline Tracker
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      This website is very useful for student. It is always
                      check and update your task from source. Having meeting
                      with friends and some other features which you can visit!
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="#" title="Introduction">
                Providing...
              </ListItem>
              <ListItem href="#" title="Installation">
                Providing...
              </ListItem>
              <ListItem href="#" title="Typography">
                Providing...
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="rounded-none bg-transparent text-gray-200 hover:bg-transparent hover:text-gray-200 focus:bg-transparent focus:text-gray-200 dark:bg-transparent dark:hover:bg-transparent dark:focus:bg-transparent relative data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent efore:content-stretch before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-slate-200 before:w-0 before:transition-all before:ease-in-out before:duration-300 hover:before:w-full">
            Service
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "rounded-none bg-transparent text-gray-200 hover:bg-transparent hover:text-gray-200 focus:bg-transparent focus:text-gray-200 relative before:content-stretch before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-slate-200 before:w-0 before:transition-all before:ease-in-out before:duration-300 hover:before:w-full"
              )}
            >
              Contact us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/auth/login" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "rounded-none bg-transparent text-gray-200 hover:bg-transparent hover:text-gray-200 focus:bg-transparent focus:text-gray-200 relative before:content-stretch before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-slate-200 before:w-0 before:transition-all before:ease-in-out before:duration-300 hover:before:w-full"
              )}
            >
              Log in
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/auth/signup" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "font-semibold")}
            >
              Sign up
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
