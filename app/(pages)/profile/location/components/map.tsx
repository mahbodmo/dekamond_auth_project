"use client";

type MapProps = {
  lat: string | undefined;
  lng: string | undefined;
};

export default function GoogleMap({ lat, lng }: MapProps) {
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;

  return (
    <div className="w-full h-[400px]">
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
      />
    </div>
  );
}
