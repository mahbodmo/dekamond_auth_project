"use client";

import { useAuth } from "@/app/hooks/use-auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Calendar, Home, Mail, Pencil, Phone, User } from "lucide-react";
import React from "react";
import moment from "moment";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-center gap-x-2">
        <Avatar>
          <AvatarImage src={user?.picture.medium} />
          <AvatarFallback>{user?.name.first}</AvatarFallback>
        </Avatar>
        <h2 className="text-lg">
          Welcome <strong>{user?.name.first}</strong>
        </h2>
      </div>

      <h3>
        Full name: {user?.name.title} {user?.name.first} {user?.name.last}
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-md">
        <div className="flex items-center gap-x-2">
          <Mail size={22} />
          {user?.email}
        </div>

        <div className="flex items-center gap-x-2">
          <User size={22} />
          {user?.gender}
        </div>

        <div className="flex items-center gap-x-2">
          <Calendar size={22} />
          {moment(user?.dob.date).format("YYYY/MM/DD")} ({user?.dob.age} years
          old)
        </div>

        <div className="flex items-center gap-x-2">
          <Pencil size={22} />
          Registered on {moment(user?.registered.date).format("YYYY")} (
          {user?.registered.age} years ago)
        </div>

        <div className="flex items-center gap-x-2">
          <Home size={22} />
          Home Number: {user?.phone}
        </div>

        <div className="flex items-center gap-x-2">
          <Phone size={22} />
          Mobile Number: {user?.cell}
        </div>
      </div>
    </div>
  );
}
