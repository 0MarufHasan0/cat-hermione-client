import { CalendarPlusIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CreateEventForm } from "@/components/create-event-form";

export const metadata = {
  title: "Create an Event | Cat Hermione",
};

export default function CreateEventPage() {
  return (
    <section className="bg-muted/50 py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        {/* Page header */}
        <div className="text-center">
          <Badge
            variant="outline"
            className="rounded-full border-primary/15 bg-primary/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] text-primary uppercase"
          >
            <CalendarPlusIcon className="size-3.5!" />
            Event Management
          </Badge>
          <h1 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Create an Event
          </h1>
          <p className="mt-3 text-sm text-foreground/70 lg:text-base">
            Organize a community drive — fill in the details below and it will
            join the Upcoming Events list.
          </p>
        </div>

        {/* Form card */}
        <div className="mt-10 rounded-2xl border border-border/60 bg-card shadow-sm">
          <CreateEventForm />
        </div>
      </div>
    </section>
  );
}
