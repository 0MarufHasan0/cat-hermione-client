import Link from "next/link";
import { ArrowLeft, CalendarDays, HeartHandshake } from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
          <HeartHandshake size={40} />
        </div>

        <p className="mt-8 text-sm font-bold tracking-[0.2em] text-orange-600 uppercase dark:text-orange-400">
          Error 404
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          This page wandered off
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
          The page you are looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back to something helpful.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            render={<Link href="/" />}
            className="h-11 rounded-full bg-orange-600 px-6 font-semibold text-white hover:bg-orange-700"
          >
            <ArrowLeft className="mr-2 size-4" />
            Back Home
          </Button>

          <Button
            render={<Link href="/upcoming-events" />}
            variant="outline"
            className="h-11 rounded-full border-orange-200 px-6 font-semibold text-orange-700 hover:bg-orange-50 dark:border-orange-900 dark:text-orange-400 dark:hover:bg-orange-950"
          >
            <CalendarDays className="mr-2 size-4" />
            Browse Events
          </Button>
        </div>
      </div>
    </section>
  );
}
