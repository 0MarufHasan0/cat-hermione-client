
import Image from "next/image";
import { BadgeCheckIcon, StarIcon, QuoteIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Joining Kindora changed how I see community service. Working with other volunteers to make our neighborhood greener and cleaner has been an incredible experience. Together, we can make a real difference.",
    name: "Amira Rahman",
    role: "Community Volunteer, Dhaka",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    quote:
      "Kindora makes it easier to coordinate donation drives and bring help to people who need it most. Being part of a team that cares about the community makes every effort worthwhile.",
    name: "Tanvir Hossain",
    role: "Volunteer Organizer",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    quote:
      "As a student, Kindora helped me discover volunteering opportunities and connect with people who share the same passion for helping others. Every event gives me a new reason to keep contributing.",
    name: "Nusrat Jaban",
    role: "Student Volunteer",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

function Stars() {
  return (
    <div
      aria-label="5 out of 5 stars"
      className="flex items-center gap-1"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon
          key={index}
          className="size-4 fill-orange-500 text-orange-500"
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <Card className="group relative flex h-full flex-col gap-0 overflow-hidden rounded-2xl border-slate-200 bg-white py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-orange-500/30">
      {/* Top Accent */}

      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-orange-500 transition-transform duration-300 group-hover:scale-x-100" />

      <CardContent className="flex flex-1 flex-col p-6 sm:p-7">
        {/* Quote Icon */}

        <div className="flex items-start justify-between">
          <Stars />

          <span className="flex size-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
            <QuoteIcon className="size-5" />
          </span>
        </div>

        {/* Testimonial Text */}

        <blockquote className="mt-5 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Divider */}

        <div className="my-6 border-t border-slate-100 dark:border-slate-800" />

        {/* Author Information */}

        <figcaption className="flex items-center gap-3">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={48}
            height={48}
            className="size-12 rounded-full border-2 border-orange-100 object-cover dark:border-orange-500/20"
          />

          <div className="min-w-0">
            <p className="flex flex-wrap items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white">
              {testimonial.name}

              <BadgeCheckIcon
                className="size-4 shrink-0 text-orange-600 dark:text-orange-400"
                aria-label="Verified volunteer"
              />
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
              {testimonial.role}
            </p>
          </div>
        </figcaption>
      </CardContent>
    </Card>
  );
}

export function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24 dark:bg-slate-950">
      {/* Background Decorations */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 -z-10 size-72 rounded-full bg-orange-100/60 blur-3xl dark:bg-orange-500/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 -z-10 size-80 rounded-full bg-orange-50 blur-3xl dark:bg-orange-500/5"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}

        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="rounded-full border-orange-200 bg-orange-50 px-4 py-1.5 text-[10px] font-bold tracking-[0.15em] text-orange-700 uppercase dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400"
          >
            Stories from Our Community
          </Badge>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Voices of Our{" "}
            <span className="text-orange-600 dark:text-orange-400">
              Community
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
            Discover how volunteers come together through Kindora to spread
            kindness, support communities, and create meaningful change.
          </p>
        </div>

        {/* Testimonial Cards */}

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
            />
          ))}
        </div>

        {/* Bottom Message */}

        <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center sm:mt-12 sm:flex-row">
          <HeartIconFallback />

          <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
            Every volunteer has a story. Every act of kindness makes a
            difference.
          </p>
        </div>
      </div>
    </section>
  );
}

function HeartIconFallback() {
  return (
    <span className="flex size-9 items-center justify-center rounded-full bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
      <StarIcon className="size-4 fill-current" />
    </span>
  );
}
