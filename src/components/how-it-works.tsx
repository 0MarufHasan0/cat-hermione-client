
import Link from "next/link";

import {
  ArrowRightIcon,
  CalendarCheckIcon,
  CompassIcon,
  HandHeartIcon,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// ==================== STEP TYPE ====================

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  link: { label: string; href: string };
};

// ==================== HOW IT WORKS STEPS ====================

const STEPS: Step[] = [
  {
    number: "01",
    icon: CalendarCheckIcon,
    title: "Create Events",
    description:
      "Organize meaningful community initiatives, manage volunteer teams, and bring people together to make a real difference.",
    link: { label: "Start Organizing", href: "/create-event" },
  },
  {
    number: "02",
    icon: CompassIcon,
    title: "Discover Drives",
    description:
      "Explore local volunteering opportunities and find community drives that match your interests, availability, and passion.",
    link: { label: "Explore Events", href: "/upcoming-events" },
  },
  {
    number: "03",
    icon: HandHeartIcon,
    title: "Join & Impact",
    description:
      "Connect with compassionate people, participate in meaningful activities, and turn small acts of kindness into lasting change.",
    link: { label: "Join Our Mission", href: "/volunteer-stories" },
  },
];

// ==================== HOW IT WORKS COMPONENT ====================

export function HowItWorks() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28 dark:bg-slate-950">
      {/* Background Decorations */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 size-[400px] rounded-full bg-orange-200/30 blur-[110px] dark:bg-orange-500/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 size-[400px] rounded-full bg-amber-100/50 blur-[110px] dark:bg-orange-500/5"
      />

      {/* Decorative Circle */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-20 hidden size-32 rounded-full border border-orange-200/70 dark:border-orange-500/15 lg:block"
      />

      {/* Main Container */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}

        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="rounded-full border-orange-200 bg-orange-50 px-4 py-2 text-[10px] font-bold tracking-[0.18em] text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400"
          >
            HOW IT WORKS
          </Badge>

          {/* Heading */}

          <h2 className="mt-6 text-3xl leading-[1.15] font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Making a Difference
            <span className="mt-2 block text-orange-600 dark:text-orange-400">
              Starts Here.
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-slate-600 sm:text-base dark:text-slate-400">
            Getting involved in your community has never been easier.
            Follow three simple steps and become part of something meaningful.
          </p>
        </div>

        {/* Step Cards */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {STEPS.map((step) => (
            <Card
              key={step.number}
              className="group relative gap-0 overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-orange-500/40"
            >
              {/* Top Accent */}

              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-orange-500 transition-transform duration-500 group-hover:scale-x-100" />

              {/* Card Header */}

              <CardHeader className="gap-0 p-7 sm:p-8">
                {/* Icon and Number */}

                <div className="flex items-center justify-between">
                  {/* Icon */}

                  <div className="flex size-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 transition-all duration-500 group-hover:-rotate-3 group-hover:bg-orange-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-600/20 dark:bg-orange-500/10 dark:text-orange-400 dark:group-hover:bg-orange-600 dark:group-hover:text-white">
                    <step.icon className="size-6 transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Step Number */}

                  <span className="text-5xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-500 group-hover:text-orange-100 dark:text-slate-800 dark:group-hover:text-orange-500/20">
                    {step.number}
                  </span>
                </div>

                {/* Card Content */}

                <div className="mt-9 space-y-3">
                  <CardTitle className="text-xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-orange-600 sm:text-2xl dark:text-white dark:group-hover:text-orange-400">
                    {step.title}
                  </CardTitle>

                  <CardDescription className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {step.description}
                  </CardDescription>
                </div>
              </CardHeader>

              {/* Card Footer */}

              <CardFooter className="mt-auto px-7 pt-0 pb-7 sm:px-8 sm:pb-8">
                <Button
                  variant="link"
                  className="h-auto gap-2 p-0 font-semibold text-orange-600 transition-all duration-300 hover:gap-3 hover:text-orange-700 hover:no-underline dark:text-orange-400 dark:hover:text-orange-300"
                  render={<Link href={step.link.href} />}
                >
                  {step.link.label}

                  <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom Message */}

        <div className="mt-14 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <span className="size-2 rounded-full bg-orange-500" />

          <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
            Together, we can create a better tomorrow.
            <span className="ml-1 font-semibold text-orange-600 dark:text-orange-400">
              Every action matters.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
