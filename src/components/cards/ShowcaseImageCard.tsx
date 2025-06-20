// src/components/cards/ShowcaseImageCard.tsx

import Image from "next/image";
import { amazonPalette } from "@/amazonPalette";

type ShowcaseImageCardProps = {
  image: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function ShowcaseImageCard({
  image,
  title,
  description,
  children,
}: ShowcaseImageCardProps) {
  return (
    <div
      className="w-full max-w-[340px] h-full flex flex-col rounded-xl overflow-hidden shadow-lg border cursor-pointer transition-all duration-300"
      style={{
        background: amazonPalette.dark2,
        borderColor: amazonPalette.medium,
        boxShadow: `0 6px 36px ${amazonPalette.dark1}55`,
      }}
    >
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
        <div
          style={{
            background: amazonPalette.light,
            height: 6,
            width: "100%",
            position: "absolute",
            bottom: 0,
            left: 0,
            opacity: 0.9,
          }}
        />
      </div>
      <div
        className="flex-1 flex flex-col justify-between p-6 rounded-b-xl"
        style={{
          background: amazonPalette.dark1,
          color: amazonPalette.light,
        }}
      >
        <div className="mb-6">
          <h3 className="text-2xl font-extrabold mb-2" style={{ color: amazonPalette.light }}>
            {title}
          </h3>
          <p className="text-base" style={{ color: "#f4f7e7" }}>
            {description}
          </p>
        </div>
        <div className="mt-auto">{children}</div>
      </div>
    </div>
  );
}
