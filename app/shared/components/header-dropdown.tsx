import { logOut } from "@/app/store/auth-slice";
import { useAppDispatch } from "@/app/store/main";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut as LogoutIcon, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

export default function HeaderDropDown({ isOpen, onOpen, onClose }: Props) {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  const handleOpen = () => {
    onOpen();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="flex lg:hidden">
      <DropdownMenu open={isOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="text-black" onClick={handleOpen}>
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Profile</DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={handleClose}>
            <Link href={`/profile`}>Dashboard</Link>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={handleClose}>
            <Link href={`/profile/location`}>Location info</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator className="my-2" />

          <Button onClick={handleLogout} className="w-full">
            <LogoutIcon /> Logout
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
