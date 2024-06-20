import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function SettingLayOut({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-red-400 w-full h-full">
      <ul>
        <li>
          <Link href="">
            <Button>Profile</Button>
          </Link>
        </li>
        <li>
          <Link>
            <Button></Button>
          </Link>
        </li>
      </ul>
    </section>
  );
}
