
import {
  HeartIcon,
  MapPinIcon,
  TrophyIcon,
  UsersIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const IMPACT_STATS = [
  { icon: TrophyIcon, value: "500+", label: "Events Organized" },
  { icon: UsersIcon, value: "5,000+", label: "Active Volunteers" },
  { icon: MapPinIcon, value: "100+", label: "Communities Reached" },
  { icon: HeartIcon, value: "10,000+", label: "Lives Directly Impacted" },
];

export function ImpactStats() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 dark:bg-slate-950">
      {/* Background Decorations */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 -z-10 size-72 rounded-full border border-dashed border-orange-200 dark:border-orange-500/15"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 -z-10 size-96 rounded-full border border-dashed border-orange-200 dark:border-orange-500/15"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-100/50 blur-[100px] dark:bg-orange-500/5"
      />

      {/* Main Container */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}

        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="rounded-full border-orange-200 bg-orange-50 px-4 py-2 text-[10px] font-bold tracking-[0.18em] text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400"
          >
            OUR COLLECTIVE FOOTPRINT
          </Badge>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Together, We Create{" "}
            <span className="text-orange-600 dark:text-orange-400">
              Lasting Change
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
            Grassroots mobilization across cities, empowering local
            change-makers every single day.
          </p>
        </div>

        {/* Impact Statistics Cards */}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {IMPACT_STATS.map((stat) => (
            <Card
              key={stat.label}
              className="group relative gap-0 overflow-hidden rounded-2xl border border-slate-200 bg-white text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-orange-500/40"
            >
              {/* Top Accent */}

              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-orange-500 transition-transform duration-300 group-hover:scale-x-100" />

              <CardContent className="flex flex-col items-center px-5 py-8">
                {/* Icon */}

                <span className="flex size-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white dark:bg-orange-500/10 dark:text-orange-400 dark:group-hover:bg-orange-600 dark:group-hover:text-white">
                  <stat.icon className="size-5 transition-transform duration-300 group-hover:scale-110" />
                </span>

                {/* Stat Value */}

                <p className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                  {stat.value}
                </p>

                {/* Stat Label */}

                <p className="mt-2 text-sm font-medium leading-6 text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Message */}

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 text-center">
          <HeartIcon className="size-4 fill-orange-500 text-orange-500" />

          <p className="text-sm text-slate-600 dark:text-slate-400">
            Every number represents people coming together for a better world.
          </p>
        </div>
      </div>
    </section>
  );
}
