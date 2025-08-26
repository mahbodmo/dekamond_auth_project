"use client";

import { useAuth } from "@/app/hooks/use-auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import HeaderDropDown from "../header-dropdown";

export default function Header() {
  const { isAuth } = useAuth();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="p-4 bg-black text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          {isAuth && (
            <HeaderDropDown
              isOpen={isOpen}
              onOpen={() => setIsOpen(true)}
              onClose={() => setIsOpen(false)}
            />
          )}
          <Link href={`/`}>Dekamond Project</Link>
        </div>
        <Button variant="outline" className="text-black" asChild>
          <Link href={isAuth ? `/profile` : `/login`}>
            {isAuth ? "Profile" : "Login"}
          </Link>
        </Button>
      </div>
    </div>
  );
}
