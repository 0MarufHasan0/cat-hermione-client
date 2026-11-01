
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRightIcon,
  CalendarDaysIcon,
  CirclePlusIcon,
  HeartHandshakeIcon,
  SproutIcon,
  StarIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-primary/[0.07] via-background to-background">

      {/* ==================== BACKGROUND DECORATIONS ==================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 size-[500px] rounded-full bg-primary/[0.08] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 size-[400px] rounded-full bg-primary/[0.06] blur-3xl"
      />


      {/* ==================== MAIN CONTAINER ==================== */}

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24">


        {/* ==================== LEFT CONTENT ==================== */}

        <div className="max-w-2xl">

          {/* Hero Badge */}

          <Badge
            variant="outline"
            className="h-auto gap-2 rounded-full border-primary/25 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary shadow-sm"
          >
            <SproutIcon className="size-4" />

            Together We Make a Difference

            <span className="size-1.5 rounded-full bg-primary" />
          </Badge>


          {/* Main Heading */}

          <h1 className="mt-7 font-heading text-4xl leading-[1.15] font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">

            Small Actions,

            <br />

            <span className="relative inline-block text-primary">
              Big Changes

              {/* Heading Decoration */}

              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 -z-10 h-3 w-full rounded-full bg-primary/20"
              />
            </span>

          </h1>


          {/* Hero Description */}

          <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            Discover meaningful community initiatives, volunteer together,
            and create a better tomorrow with local grassroots action.
            Every small effort brings us one step closer to a better world.
          </p>


          {/* ==================== CTA BUTTONS ==================== */}

          <div className="mt-9 flex flex-wrap items-center gap-3">

            {/* Explore Events Button */}

            <Button
              render={<Link href="/upcoming-events" />}
              size="lg"
              className="h-12 rounded-full px-7 shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Events

              <ArrowRightIcon className="size-4" />
            </Button>


            {/* Create Event Button */}

            <Button
              render={<Link href="/create-event" />}
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-border bg-card px-7 transition-all hover:-translate-y-1 hover:border-primary hover:bg-primary/5 hover:text-primary"
            >
              Create an Event

              <CirclePlusIcon className="size-4" />
            </Button>

          </div>


          {/* ==================== COMMUNITY STATS ==================== */}

          <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-border/70 pt-8 sm:gap-8">

            {STATS.map((stat) => (
              <div key={stat.label}>

                {/* Statistic Value */}

                <dd className="font-heading text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                  {stat.value}
                </dd>

                {/* Statistic Label */}

                <dt className="mt-2 text-[10px] leading-5 font-semibold tracking-wider text-muted-foreground uppercase sm:text-xs">
                  {stat.label}
                </dt>

              </div>
            ))}

          </dl>

        </div>


        {/* ==================== RIGHT CONTENT: HERO IMAGE ==================== */}

        <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">

          {/* Background Glow */}

          <div
            aria-hidden="true"
            className="absolute -inset-5 -z-10 rounded-[40px] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-2xl"
          />


          {/* Main Image Frame */}

          <div className="relative rounded-[32px] border border-border/70 bg-card/80 p-2.5 shadow-2xl shadow-primary/10 backdrop-blur-sm">

            <div className="relative overflow-hidden rounded-[25px] bg-muted">

              <Image
                src="/hero1.jpg"
                alt="Volunteers planting trees together in a community garden"
                width={640}
                height={760}
                priority
                className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[480px] lg:h-[540px]"
              />

              {/* Image Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            </div>


            {/* ==================== TOP FLOATING CARD ==================== */}

            <div className="absolute -top-5 left-5 flex items-center gap-3 rounded-2xl border border-border/70 bg-card/95 px-4 py-3 shadow-xl backdrop-blur-md sm:left-8">

              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <StarIcon className="size-5 fill-current" />
              </span>

              <div>
                <p className="text-sm font-bold text-foreground">
                  98% Volunteer Delight
                </p>

                <p className="text-xs text-muted-foreground">
                  Making a real difference
                </p>
              </div>

            </div>


            {/* ==================== BOTTOM FLOATING CARD ==================== */}

            <div className="absolute -bottom-7 right-3 flex max-w-[calc(100%-24px)] items-start gap-3 rounded-2xl border border-border/70 bg-card/95 p-4 shadow-xl backdrop-blur-md sm:right-7 sm:p-5">

              {/* Card Icon */}

              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <SproutIcon className="size-6" />
              </span>


              {/* Card Content */}

              <div className="min-w-0">

                <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                  Next Open Drive
                </p>

                <p className="mt-1 truncate font-heading text-sm font-bold text-foreground sm:text-base">
                   Winter Clothes Distribution
                </p>

                <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
              <CalendarDaysIcon className="size-3.5 shrink-0 text-primary" />
             Mirpur 10, Dhaka
              </p>

                <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CalendarDaysIcon className="size-3.5 shrink-0 text-primary" />

                  This Saturday, 8:30 AM
                </p>

              </div>

            </div>

          </div>


          {/* ==================== DECORATIVE COMMUNITY ICON ==================== */}

          <div
            aria-hidden="true"
            className="absolute -right-5 top-1/3 hidden size-14 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-lg sm:flex"
          >
            <HeartHandshakeIcon className="size-7" />
          </div>

        </div>

      </div>

    </section>
  );
}
