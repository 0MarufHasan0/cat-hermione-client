import Image from "next/image";
import { CameraIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "cn";

type Moment = {
  eyebrow: string;
  title: string;
  thumbnail: string;
  /** The big card in the first row. */
  featured?: boolean;
};

const MOMENTS: Moment[] = [
  {
    eyebrow: "Environment Drive",
    title: "Seedling the Future at Lake Park",
    thumbnail:
      "https://images.pexels.com/photos/5029923/pexels-photo-5029923.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: true,
  },
  {
    eyebrow: "Nourish Dhaka",
    title: "500+ Hot Meals Shared",
    thumbnail:
      "https://images.pexels.com/photos/6995244/pexels-photo-6995244.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    eyebrow: "Relief Supply Sorting",
    title: "Winter Warmth Drive",
    thumbnail:
      "https://images.pexels.com/photos/6994808/pexels-photo-6994808.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    eyebrow: "Health Camps",
    title: "Annual Blood Drive",
    thumbnail:
      "https://images.pexels.com/photos/6995212/pexels-photo-6995212.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    eyebrow: "Green City Missions",
    title: "Zero Waste Action",
    thumbnail:
      "https://images.pexels.com/photos/9037213/pexels-photo-9037213.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

function MomentCard({ moment }: { moment: Moment }) {
  return (
    <figure
      className={cn(
        "group relative overflow-hidden rounded-2xl shadow-md",
        moment.featured ? "lg:col-span-4 h-72 sm:h-96 lg:h-[400px]" : "lg:col-span-2 h-64 sm:h-80 lg:h-[400px]"
      )}
    >
      <Image
        src={moment.thumbnail}
        alt={moment.title}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* Bottom fade so the caption stays readable */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"
      />
      <figcaption className="absolute bottom-0 p-4 sm:p-5">
        <p className="text-[10px] font-bold tracking-[0.18em] text-white/80 uppercase sm:text-xs">
          {moment.eyebrow}
        </p>
        <p className="mt-1 font-heading text-lg font-bold text-white sm:text-xl">
          {moment.title}
        </p>
      </figcaption>
      {moment.featured && (
        <span className="absolute right-4 bottom-4 flex size-8 items-center justify-center rounded-lg bg-card/90 text-primary shadow-sm">
          <CameraIcon className="size-4" />
        </span>
      )}
    </figure>
  );
}

export function MomentsGallery() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="rounded-full border-primary/15 bg-primary/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] text-primary uppercase"
          >
            On-the-Ground Moments
          </Badge>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Moments That Matter
          </h2>
          <p className="mt-3 text-sm text-foreground/70 lg:text-base">
            Real snapshots of compassion, unity, and dedicated hands across our
            seasonal campaigns.
          </p>
        </div>

        {/* Photo mosaic */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {MOMENTS.map((moment) => (
            <MomentCard key={moment.title} moment={moment} />
          ))}
        </div>
      </div>
    </section>
  );
}
