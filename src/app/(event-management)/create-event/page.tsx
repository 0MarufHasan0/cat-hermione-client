
import { CalendarPlus, HeartHandshake } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CreateEventForm } from "@/components/create-event-form";

export const metadata = {
  title: "Create an Event | Kindora",
};

export default function CreateEventPage() {
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-2xl sm:px-2">

        {/* Page Header */}
        <div className="text-center">

          <Badge
            variant="outline"
            className="gap-2 rounded-full border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold tracking-wider text-orange-700 dark:border-orange-900 dark:bg-orange-950/30 dark:text-orange-400"
          >
            <CalendarPlus className="size-4" />
            EVENT MANAGEMENT
          </Badge>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Create an{" "}
            <span className="text-orange-600">Event</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
            Organize a community drive, bring people together, and make a
            positive impact. Fill in the details below to publish your event.
          </p>

          {/* Small Highlight */}
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
            <HeartHandshake className="size-5 text-orange-600" />
            Together, we can make a difference.
          </div>
        </div>

        {/* Form Card */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

          {/* Form Card Header */}
          <div className="border-b border-slate-200 bg-orange-50/60 px-6 py-5 dark:border-slate-800 dark:bg-orange-950/20">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Event Information
            </h2>

            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Please provide the necessary details about your event.
            </p>
          </div>

          {/* Create Event Form */}
          <div className="p-5 sm:p-7">
            <CreateEventForm />
          </div>

        </div>

        {/* Bottom Text */}
        <p className="mt-6 text-center text-xs leading-6 text-slate-500 dark:text-slate-400">
          By creating an event, you help build a stronger and more connected
          community.
        </p>

      </div>
    </section>
  );
}
