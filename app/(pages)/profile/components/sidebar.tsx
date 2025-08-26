import { logOut } from "@/app/store/auth-slice";
import { useAppDispatch } from "@/app/store/main";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function ProfileSidebar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const activePage = `bg-gray-200`;

  const handleLogout = () => {
    dispatch(logOut());
    router.push(`/login`);
    window.scrollTo(0, 0);
  };

  return (
    <Card className="h-full lg:flex flex-col justify-between hidden">
      <CardContent className="flex flex-col gap-y-2">
        <Button
          variant="ghost"
          className={`w-full ${pathname === "/profile" && activePage}`}
          asChild
        >
          <Link href={`/profile`}>Dashboard</Link>
        </Button>

        <Button
          variant="ghost"
          className={`w-full ${pathname === "/profile/location" && activePage}`}
          asChild
        >
          <Link href={`/profile/location`}>Location info</Link>
        </Button>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleLogout}>
          <LogOutIcon />
          Log out
        </Button>
      </CardFooter>
    </Card>
  );
}
