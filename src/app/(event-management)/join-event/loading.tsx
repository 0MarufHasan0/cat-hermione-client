import { EventGridSkeleton } from "@/components/event-skeletons";
import { Skeleton } from "@/components/ui/skeleton";

export default function JoinEventLoading() {
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-12 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="w-full space-y-3">
            <Skeleton className="h-9 w-48" />
            <Skeleton className="h-4 w-full max-w-md" />
            <Skeleton className="h-3 w-56" />
          </div>

          <Skeleton className="h-10 w-24 shrink-0 rounded-lg" />
        </div>

        <EventGridSkeleton />
      </div>
    </section>
  );
}
