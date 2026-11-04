import { EventDetailsSkeleton } from "@/components/event-skeletons";

export default function EventDetailsLoading() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 dark:bg-slate-950">
      <EventDetailsSkeleton />
    </main>
  );
}
