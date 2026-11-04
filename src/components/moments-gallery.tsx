
import Image from "next/image";
import { CameraIcon, HeartIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Moment = {
  eyebrow: string;
  title: string;
  thumbnail: string;
  featured?: boolean;
};

const MOMENTS: Moment[] = [
  {
    eyebrow: "Tree Plantation Drive",
    title: "Growing a Greener Future Together",
    thumbnail:
      "https://images.pexels.com/photos/5029923/pexels-photo-5029923.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: true,
  },
  {
    eyebrow: "Food Distribution",
    title: "Sharing Meals, Spreading Hope",
    thumbnail:
      "https://images.pexels.com/photos/6995244/pexels-photo-6995244.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    eyebrow: "Winter Donation Drive",
    title: "Bringing Warmth to Those in Need",
    thumbnail:
      "https://images.pexels.com/photos/6994808/pexels-photo-6994808.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    eyebrow: "Community Health Camp",
    title: "Caring for Healthier Communities",
    thumbnail:
      "https://images.pexels.com/photos/6995212/pexels-photo-6995212.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    eyebrow: "Community Clean-Up",
    title: "Small Actions, Cleaner Communities",
    thumbnail:
      "https://images.pexels.com/photos/9037213/pexels-photo-9037213.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

function MomentCard({ moment }: { moment: Moment }) {
  return (
    <figure
      className={cn(
        "group relative isolate overflow-hidden rounded-2xl bg-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-orange-900/10 dark:bg-slate-900",
        moment.featured
          ? "h-72 sm:h-96 lg:col-span-4 lg:h-[400px]"
          : "h-64 sm:h-80 lg:col-span-2 lg:h-[400px]",
      )}
    >
      {/* Gallery Image */}

      <Image
        src={moment.thumbnail}
        alt={moment.title}
        fill
        sizes={
          moment.featured
            ? "(min-width: 1024px) 66vw, 100vw"
            : "(min-width: 1024px) 33vw, 100vw"
        }
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Image Overlay */}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent transition-colors duration-300 group-hover:from-slate-950/95"
      />

      {/* Top Category Badge */}

      <Badge className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-slate-800 shadow-sm backdrop-blur-sm hover:bg-white sm:left-5 sm:top-5 sm:text-xs">
        {moment.eyebrow}
      </Badge>

      {/* Image Caption */}

      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-6">
        <div className="max-w-[85%]">
          <p className="text-lg font-bold leading-snug text-white sm:text-xl lg:text-2xl">
            {moment.title}
          </p>

          <div className="mt-3 h-1 w-10 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-16" />
        </div>

        {/* Featured Image Icon */}

        {moment.featured && (
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/15 text-white shadow-sm backdrop-blur-md">
            <CameraIcon className="size-5" />
          </span>
        )}
      </figcaption>
    </figure>
  );
}

export function MomentsGallery() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24 dark:bg-slate-950">
      {/* Background Decorations */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 -z-10 size-72 rounded-full bg-orange-100/60 blur-3xl dark:bg-orange-500/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 -z-10 size-80 rounded-full bg-orange-50 blur-3xl dark:bg-orange-500/5"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}

        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="rounded-full border-orange-200 bg-orange-50 px-4 py-1.5 text-[10px] font-bold tracking-[0.15em] text-orange-700 uppercase dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400"
          >
            Kindora in Action
          </Badge>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Every Act of Kindness{" "}
            <span className="text-orange-600 dark:text-orange-400">
              Matters
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
            Discover the people, stories, and meaningful moments behind
            Kindora&apos;s community events. Together, we&apos;re building a
            kinder and stronger society.
          </p>
        </div>

        {/* Photo Gallery */}

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6">
          {MOMENTS.map((moment) => (
            <MomentCard key={moment.title} moment={moment} />
          ))}
        </div>

        {/* Bottom Message */}

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:mt-12 sm:flex-row">
          <span className="flex size-10 items-center justify-center rounded-full bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
            <HeartIcon className="size-5 fill-current" />
          </span>

          <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
            Every helping hand creates a story. Every act of kindness brings
            our community closer together.
          </p>
        </div>
      </div>
    </section>
  );
}
