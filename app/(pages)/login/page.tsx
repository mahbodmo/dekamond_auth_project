"use client";

import React, { useEffect } from "react";
import LoginForm from "./components/login-form";
import { Phone } from "lucide-react";
import { useAuth } from "@/app/hooks/use-auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) router.push(`/profile`);
  });

  return (
    <div className="flex flex-col gap-y-4 items-center justify-center w-full">
      <div className="flex items-center gap-x-2">
        <Phone size={18} />
        <p className="max-w-[250px] text-center text-md">
          Enter your mobile number
        </p>
      </div>
      <LoginForm />
    </div>
  );
}
