import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";

const reviews = [
  {
    name: "Dian",
    username: "@diantraveler",
    body: "Perjalanan ke Ijen sangat nyaman dengan mobil Honda. Sopir ramah dan profesional!",
    img: "https://avatar.vercel.sh/dian",
  },
  {
    name: "Rama",
    username: "@ramabromo",
    body: "Paket tour Bromo 3D2N-nya lengkap dan pelayanannya memuaskan! ⭐⭐⭐⭐⭐",
    img: "https://avatar.vercel.sh/rama",
  },
  {
    name: "Sarah",
    username: "@sarahsurf",
    body: "Plengkung Beach trip-nya luar biasa! Surfing dan sunrise-nya gila banget!!",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Joko",
    username: "@jokoadventure",
    body: "Mobil Honda-nya irit banget dan bersih. Liburan jadi makin lancar.",
    img: "https://avatar.vercel.sh/joko",
  },
  {
    name: "Lia",
    username: "@liabwi",
    body: "Rekomendasi banget buat wisata Banyuwangi bareng keluarga!",
    img: "https://avatar.vercel.sh/lia",
  },
  {
    name: "Andi",
    username: "@andiijen",
    body: "Blue fire Ijen dan dokumentasinya keren. Next time ikut lagi!",
    img: "https://avatar.vercel.sh/andi",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => (
  <figure
    className={cn(
      "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
      "border-gray-200 bg-white hover:bg-gray-100",
      "dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    )}
  >
    <div className="flex flex-row items-center gap-2">
      <Image
        className="rounded-full"
        width={32}
        height={32}
        alt={name}
        src={img}
        loading="lazy"
      />
      <div className="flex flex-col">
        <figcaption className="text-sm font-medium dark:text-white">
          {name}
        </figcaption>
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
          {username}
        </p>
      </div>
    </div>
    <blockquote className="mt-2 text-sm text-gray-600 dark:text-gray-300">
      {body}
    </blockquote>
  </figure>
);

export function MarqueeReview() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-6 bg-blue-50 dark:bg-gray-900">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-blue-50 to-transparent dark:from-gray-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-blue-50 to-transparent dark:from-gray-900"></div>
    </div>
  );
}
