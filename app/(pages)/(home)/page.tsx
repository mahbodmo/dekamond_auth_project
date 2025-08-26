"use client";

import { useAuth } from "@/app/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  const { isAuth } = useAuth();

  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-md font-medium">Nothing to show here</h2>
      <Button asChild>
        <Link href={isAuth ? `/profile` : `/login`}>
          Go to {isAuth ? "Profile" : "Login page"}
          <ChevronRight />
        </Link>
      </Button>
    </div>
  );
}
