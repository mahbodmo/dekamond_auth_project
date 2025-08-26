"use client";

import React from "react";

type Props = {
  lat: string | undefined;
  lng: string | undefined;
};

export default function MapIframe({ lat, lng }: Props) {
  const src = `https://www.google.com/maps?q=${lat},${lng}&output=embed`;

  return (
    <div className="h-[350px]">
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl"
      />
    </div>
  );
}
