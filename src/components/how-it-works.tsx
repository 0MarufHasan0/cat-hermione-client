
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

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  link: { label: string; href: string };
};

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

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 sm:py-24 lg:py-28">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 size-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 size-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">

          <Badge
            variant="outline"
            className="rounded-full border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary"
          >
            HOW IT WORKS
          </Badge>

          <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Making a Difference
            <span className="text-primary"> Starts Here</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Getting involved in your community has never been easier.
            Follow three simple steps and become part of something meaningful.
          </p>
        </div>

        {/* Step Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">

          {STEPS.map((step) => (
            <Card
              key={step.number}
              className="group relative gap-0 overflow-hidden rounded-2xl border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >

              {/* Top Accent */}
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />

              <CardHeader className="gap-6 p-7 sm:p-8">

                {/* Icon and Step Number */}
                <div className="flex items-center justify-between">

                  <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <step.icon className="size-6" />
                  </div>

                  <span className="font-heading text-4xl font-bold tracking-tight text-muted-foreground/20 transition-colors group-hover:text-primary/30">
                    {step.number}
                  </span>

                </div>

                {/* Title */}
                <div className="space-y-3">
                  <CardTitle className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {step.title}
                  </CardTitle>

                  <CardDescription className="text-sm leading-7 text-muted-foreground">
                    {step.description}
                  </CardDescription>
                </div>

              </CardHeader>

              {/* Card Footer */}
              <CardFooter className="px-7 pb-7 pt-0 sm:px-8 sm:pb-8">

                <Button
                  variant="link"
                  className="h-auto gap-2 p-0 font-semibold text-primary hover:gap-3 hover:no-underline transition-all duration-300"
                  render={<Link href={step.link.href} />}
                >
                  {step.link.label}
                  <ArrowRightIcon className="size-4" />
                </Button>

              </CardFooter>

            </Card>
          ))}

        </div>

        {/* Bottom Message */}
        <div className="mt-14 text-center">
          <p className="text-sm text-muted-foreground">
            Together, we can create a better tomorrow.
            <span className="ml-1 font-semibold text-primary">
              Every action matters.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
