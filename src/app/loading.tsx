import { EventGridSkeleton } from "@/components/event-skeletons";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-14 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <Skeleton className="h-9 w-60 rounded-full" />
          <Skeleton className="h-10 w-80 max-w-full" />
          <Skeleton className="h-4 w-full max-w-xl" />
          <Skeleton className="h-4 w-full max-w-md" />
        </div>

        <EventGridSkeleton />
      </div>
    </section>
  );
}
