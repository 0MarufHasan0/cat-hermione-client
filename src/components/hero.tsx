
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRightIcon,
  CalendarDaysIcon,
  CirclePlusIcon,
  HeartHandshakeIcon,
  MapPinIcon,
  SproutIcon,
  StarIcon,
  HeartIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// ==================== HERO STATISTICS ====================

const STATS = [
  {
    value: "120+",
    label: "Community Events",
  },
  {
    value: "2,500+",
    label: "Volunteers",
  },
  {
    value: "50+",
    label: "Cities & Wards",
  },
];

// ==================== HERO COMPONENT ====================

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Background Decorations */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 size-[500px] rounded-full bg-orange-200/40 blur-[120px] dark:bg-orange-500/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 size-[400px] rounded-full bg-amber-100/60 blur-[100px] dark:bg-orange-500/5"
      />

      {/* Main Container */}

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
        {/* Left Content */}

        <div className="max-w-2xl">
          {/* Hero Badge */}

          <Badge
            variant="outline"
            className="h-auto gap-2 rounded-full border-orange-200 bg-orange-50 px-4 py-2.5 text-xs font-semibold text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400"
          >
            <SproutIcon className="size-4" />

            Together We Make a Difference

            <span className="size-1.5 animate-pulse rounded-full bg-orange-500" />
          </Badge>

          {/* Main Heading */}

          <h1 className="mt-7 text-4xl leading-[1.12] font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Small Actions,
            <br />

            <span className="relative inline-block text-orange-600 dark:text-orange-400">
              Big Changes
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 -z-10 h-3 w-full rounded-full bg-orange-200/70 dark:bg-orange-500/20"
              />
            </span>
          </h1>

          {/* Description */}

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9 dark:text-slate-400">
            Discover meaningful community initiatives, volunteer together,
            and create a better tomorrow with local grassroots action.
            Every small effort brings us one step closer to a better world.
          </p>

          {/* CTA Buttons */}

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="group h-12 rounded-full bg-orange-600 px-7 font-semibold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl hover:shadow-orange-600/25"
              render={<Link href="/upcoming-events" />}
            >
              Explore Events

              <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-slate-300 bg-white px-7 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-700 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-orange-500/10 dark:hover:text-orange-400"
              render={<Link href="/create-event" />}
            >
              <CirclePlusIcon className="mr-1 size-4" />
              Create an Event
            </Button>
          </div>

          {/* Community Statistics */}

          <dl className="mt-14 grid grid-cols-3 gap-3 border-t border-slate-200 pt-8 sm:mt-16 sm:gap-8 dark:border-slate-800">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dd className="text-2xl font-extrabold tracking-tight text-orange-600 sm:text-3xl dark:text-orange-400">
                  {stat.value}
                </dd>

                <dt className="mt-2 text-[9px] leading-5 font-semibold tracking-wide text-slate-500 uppercase sm:text-xs dark:text-slate-400">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Right Content: Hero Image */}

        <div className="relative mx-auto w-full max-w-[500px] pb-8 pt-5 lg:ml-auto">
          {/* Background Glow */}

          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[45px] bg-gradient-to-br from-orange-200/60 via-amber-100/30 to-transparent blur-2xl dark:from-orange-500/20 dark:via-amber-500/5"
          />

          {/* Decorative Circle */}

          <div
            aria-hidden="true"
            className="absolute -right-8 -top-8 -z-10 size-36 rounded-full border border-orange-200 dark:border-orange-500/20"
          />

          {/* Main Image Frame */}

          <Card className="relative overflow-visible rounded-[30px] border border-slate-200 bg-white p-2.5 shadow-2xl shadow-orange-900/10 dark:border-slate-800 dark:bg-slate-900">
            <div className="relative overflow-hidden rounded-[23px] bg-slate-100">
              <Image
                src="/hero1.jpg"
                alt="Community volunteers helping people"
                width={640}
                height={760}
                priority
                className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[470px] lg:h-[520px]"
              />

              {/* Image Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Top Floating Card */}

            <Card className="absolute -top-5 left-3 rounded-2xl border-slate-200 bg-white shadow-xl sm:left-6 dark:border-slate-700 dark:bg-slate-900">
              <CardContent className="flex items-center gap-3 p-3 sm:p-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400">
                  <StarIcon className="size-5 fill-current" />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    98% Volunteer Delight
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    Making a real difference
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Heart Button */}

            <Button
              size="icon"
              variant="secondary"
              aria-label="Favorite"
              className="absolute -right-4 top-1/3 z-10 size-11 rounded-xl border border-slate-200 bg-white text-slate-700 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-orange-50 hover:text-orange-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-orange-500/10 dark:hover:text-orange-400"
            >
              <HeartIcon className="size-5" />
            </Button>

            {/* Bottom Floating Event Card */}

            <Card className="absolute -bottom-7 right-2 z-10 w-[calc(100%-24px)] max-w-[320px] rounded-2xl border-slate-200 bg-white shadow-2xl sm:right-5 dark:border-slate-700 dark:bg-slate-900">
              <CardContent className="flex items-start gap-3 p-3 sm:p-4">
                {/* Event Icon */}

                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400">
                  <SproutIcon className="size-6" />
                </div>

                {/* Event Information */}

                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-bold tracking-[0.16em] text-slate-500 uppercase dark:text-slate-400">
                    Next Open Drive
                  </p>

                  <h3 className="mt-1 truncate text-sm font-bold text-slate-900 sm:text-base dark:text-white">
                    Winter Clothes Distribution
                  </h3>

                  {/* Location */}

                  <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <MapPinIcon className="size-3.5 shrink-0 text-orange-600 dark:text-orange-400" />
                    Mirpur 10, Dhaka
                  </p>

                  {/* Date */}

                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <CalendarDaysIcon className="size-3.5 shrink-0 text-orange-600 dark:text-orange-400" />
                    This Saturday, 8:30 AM
                  </p>
                </div>
              </CardContent>
            </Card>
          </Card>

          {/* Decorative Community Icon */}

          <div
            aria-hidden="true"
            className="absolute -right-5 top-1/3 hidden size-14 items-center justify-center rounded-2xl border border-orange-100 bg-white text-orange-600 shadow-xl sm:flex dark:border-slate-700 dark:bg-slate-900 dark:text-orange-400"
          >
            <HeartHandshakeIcon className="size-7" />
          </div>
        </div>
      </div>
    </section>
  );
}
