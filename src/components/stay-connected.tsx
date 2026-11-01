"use client";

import { ArrowRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function StayConnected() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Demo behaviour until a subscribe API exists.
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    console.log("Subscribed email:", data.email);
    form.reset();
  }

  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-4xl bg-primary py-16 text-center sm:py-20">
        {/* Decorative blob */}
        <div
          aria-hidden
          className="absolute -right-24 -bottom-44 size-[420px] -z-10 rounded-full bg-white/5"
        />

        <Badge className="rounded-full border-transparent bg-white/15 px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] text-primary-foreground uppercase">
          Connect with the Cause
        </Badge>
        <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          Stay Connected. Stay Inspired.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-primary-foreground/70 lg:text-base">
          Get updates about upcoming volunteering events, emergency relief
          drives, and community initiatives straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex w-fit items-center gap-1.5 rounded-full bg-foreground/20 p-1.5 ring-1 ring-white/10"
        >
          <Input
            type="email"
            name="email"
            required
            placeholder="Enter your email address"
            aria-label="Email address"
            className="h-10 w-56 border-0 bg-card px-4 sm:w-72"
          />
          <Button
            type="submit"
            className="h-10 rounded-full bg-foreground px-5 text-primary-foreground"
          >
            Join Us
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </form>

        <p className="mt-4 text-xs text-primary-foreground/50">
          No spam ever. Unsubscribe at any time with one click.
        </p>
      </div>
    </section>
  );
}
