
"use client";

import { useState } from "react";
import { ArrowRightIcon, HeartHandshakeIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function StayConnected() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");

    if (!email) return;

    // Demo behavior until a subscription API exists.
    console.log("Subscribed email:", email);

    setMessage("Thank you for joining the Kindora community!");
    form.reset();
  }

  return (
    <section className="bg-white px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 dark:bg-slate-950">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-3xl border border-orange-200/60 bg-orange-50 px-5 py-12 text-center sm:px-10 sm:py-16 lg:rounded-[2rem] lg:py-20 dark:border-orange-500/20 dark:bg-slate-900">
        {/* Background Decorations */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 -z-10 size-72 rounded-full bg-orange-200/40 blur-3xl dark:bg-orange-500/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-36 -left-20 -z-10 size-80 rounded-full bg-amber-100/60 blur-3xl dark:bg-amber-500/5"
        />

        {/* Icon */}

        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-orange-600 text-white shadow-lg shadow-orange-600/20">
          <HeartHandshakeIcon className="size-7" />
        </div>

        {/* Section Header */}

        <Badge
          variant="outline"
          className="mt-6 rounded-full border-orange-200 bg-white px-4 py-1.5 text-[10px] font-bold tracking-[0.15em] text-orange-700 uppercase dark:border-orange-500/30 dark:bg-slate-800 dark:text-orange-400"
        >
          Connect with Kindora
        </Badge>

        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
          Stay Connected.{" "}
          <span className="text-orange-600 dark:text-orange-400">
            Spread Kindness.
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
          Get updates about upcoming volunteering events, donation drives,
          and community initiatives. Join Kindora and be part of something
          meaningful.
        </p>

        {/* Email Form */}

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:items-center sm:rounded-full sm:border sm:border-slate-200 sm:bg-white sm:p-1.5 sm:shadow-sm dark:sm:border-slate-700 dark:sm:bg-slate-950"
        >
          <Input
            type="email"
            name="email"
            required
            placeholder="Enter your email address"
            aria-label="Email address"
            className="h-12 rounded-full border-slate-200 bg-white px-5 text-sm shadow-none focus-visible:border-orange-500 focus-visible:ring-orange-500/20 sm:border-0 sm:bg-transparent dark:border-slate-700 dark:bg-slate-900 sm:dark:bg-transparent"
          />

          <Button
            type="submit"
            className="h-12 shrink-0 rounded-full bg-orange-600 px-6 font-semibold text-white transition-colors hover:bg-orange-700"
          >
            Join Kindora
            <ArrowRightIcon className="ml-1 size-4" />
          </Button>
        </form>

        {/* Success Message */}

        {message && (
          <p
            role="status"
            className="mt-4 text-sm font-medium text-green-700 dark:text-green-400"
          >
            {message}
          </p>
        )}

        {/* Privacy Note */}

        <p className="mt-5 text-xs leading-6 text-slate-500 dark:text-slate-400">
          No spam, just kindness. Stay connected with the causes that matter.
        </p>
      </div>
    </section>
  );
}
