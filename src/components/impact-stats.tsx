import { HeartIcon, MapPinIcon, TrophyIcon, UsersIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const IMPACT_STATS = [
  { icon: TrophyIcon, value: "500+", label: "Events Organized" },
  { icon: UsersIcon, value: "5,000+", label: "Active Volunteers" },
  { icon: MapPinIcon, value: "100+", label: "Communities Reached" },
  { icon: HeartIcon, value: "10,000+", label: "Lives Directly Impacted" },
];

export function ImpactStats() {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-16 sm:py-20">
      {/* Decorative dotted circles */}
      <div
        aria-hidden
        className="absolute -top-24 -left-24 size-72 -z-10 rounded-full border border-dashed border-white/10"
      />
      <div
        aria-hidden
        className="absolute -right-32 -bottom-32 size-96 -z-10 rounded-full border border-dashed border-white/10"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="rounded-full border-transparent bg-white/15 px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] text-primary-foreground uppercase">
            Our Collective Footprint
          </Badge>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Together, We Create Lasting Change
          </h2>
          <p className="mt-3 text-sm text-primary-foreground/60 lg:text-base">
            Grassroots mobilization across cities, empowering local
            change-makers every single day.
          </p>
        </div>

        {/* Stat cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-2xl bg-foreground/15 py-8 text-center ring-1 ring-white/10 shadow-lg"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-primary-foreground/80">
                <stat.icon className="size-5" />
              </span>
              <p className="mt-4 font-heading text-3xl font-bold text-primary-foreground sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-primary-foreground/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
