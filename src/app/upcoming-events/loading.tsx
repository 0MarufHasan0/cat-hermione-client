import { EventGridSkeleton } from "@/components/event-skeletons";
import { Skeleton } from "@/components/ui/skeleton";

export default function UpcomingEventsLoading() {
  return (
    <section className="min-h-screen bg-white px-4 py-14 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <Skeleton className="h-9 w-56 rounded-full" />
          <Skeleton className="h-10 w-80 max-w-full" />
          <Skeleton className="h-4 w-full max-w-2xl" />
        </div>

        <div className="mb-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
          <Skeleton className="mb-5 h-6 w-48" />

          <div className="flex flex-wrap gap-3">
            {Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} className="h-10 w-28 rounded-full" />
            ))}
          </div>
        </div>

        <EventGridSkeleton count={9} />
      </div>
    </section>
  );
}
