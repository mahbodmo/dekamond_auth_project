"use client";

import React, { useEffect } from "react";
import ProfileSidebar from "./components/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/app/hooks/use-auth";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  let pageTitle = `Dashboard`;

  if (pathname === `/profile/location`) pageTitle = `Location info`;

  const { isAuth } = useAuth();

  useEffect(() => {
    if (!isAuth) router.push(`/login`);
  });

  const breadcrumb = (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/profile">Profile</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );

  return (
    <div className="w-full grid grid-cols-4 items-start gap-x-4">
      <ProfileSidebar />
      <div className="col-span-4 lg:col-span-3">
        <Card>
          <CardContent className="flex flex-col gap-y-4">
            {breadcrumb}
            {children}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
