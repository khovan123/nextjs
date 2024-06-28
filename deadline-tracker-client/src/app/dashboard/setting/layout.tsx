import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
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
import { cn } from "@/lib/utils";
export default function SettingLayOut({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Dialog open={true}>
      <DialogContent
        className="w-screen h-screen max-w-none bg-slate-800 border-none"
        href="/dashboard"
      >
        <section className="flex bg-slate-800">
          <aside
            className={cn(
              "bg-slate-800 px-2 border-r border-gray-700 pt-6 flex flex-col justify-between items-center w-fit"
            )}
          >
            <ul className="flex flex-col justify-start items-center w-full h-full">
              <li className="w-full">
                <Button
                  className={
                    "w-full justify-start items-center bg-transparent py-5 hover:bg-slate-700 flex gap-2 px-0"
                  }
                >
                  <div className="w-10 flex justify-center items-center ">
                    <UserRound />
                  </div>
                  <span className="text-base font-normal">Profiles</span>
                </Button>
              </li>
              <li className="w-full">
                <Button className="w-full bg-transparent py-5  hover:bg-slate-700 px-0 group">
                  <Link
                    href="/dashboard/profile"
                    className="flex gap-2 justify-start items-center w-full"
                  >
                    <div className="w-10 flex justify-center items-center ">
                      <Shield />
                    </div>
                    <span className="text-base font-normal">
                      Password and security
                    </span>
                  </Link>
                </Button>
              </li>
              <li className="w-full">
                <Button className="w-full bg-transparent py-5  hover:bg-slate-700 px-0 group">
                  <Link
                    href="/dashboard/profile"
                    className="flex gap-2 justify-start items-center w-full"
                  >
                    <div className="w-10 flex justify-center items-center ">
                      <BookUserIcon />
                    </div>
                    <span className="text-base font-normal">
                      Personal Details
                    </span>
                  </Link>
                </Button>
              </li>
            </ul>
          </aside>
          <main>
            <p>Le Bao Nhi</p>
            {children}
          </main>
        </section>
      </DialogContent>
    </Dialog>
  );
}
