"use client";

import { useAuth } from "@/app/hooks/use-auth";
import React from "react";
import MapIframe from "./components/map";

export default function ProfileLocationPage() {
  const { user } = useAuth();
  const location = user?.location;

  return (
    <div className="flex flex-col gap-y-6">
      <div>
        <strong>Address: </strong> {location?.country}, {location?.state},{" "}
        {location?.city}, {location?.street.name} ({location?.street.number})
      </div>

      <div>
        <strong>Postal Code: </strong> {location?.postcode}
      </div>

      <MapIframe
        lat={location?.coordinates.latitude}
        lng={location?.coordinates.longitude}
      />
    </div>
  );
}
