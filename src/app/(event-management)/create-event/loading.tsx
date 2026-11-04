import { Skeleton } from "@/components/ui/skeleton";

export default function CreateEventLoading() {
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-2xl sm:px-2">
        <div className="flex flex-col items-center gap-4 text-center">
          <Skeleton className="h-9 w-48 rounded-full" />
          <Skeleton className="h-10 w-72 max-w-full" />
          <Skeleton className="h-4 w-full max-w-xl" />
          <Skeleton className="h-4 w-full max-w-md" />
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="space-y-2 border-b border-slate-200 bg-orange-50/60 px-6 py-5 dark:border-slate-800 dark:bg-orange-950/20">
            <Skeleton className="h-6 w-44" />
            <Skeleton className="h-4 w-72 max-w-full" />
          </div>

          <div className="grid gap-6 p-5 sm:p-7">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="grid gap-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-10 w-full rounded-lg" />
              </div>
            ))}

            <Skeleton className="h-12 w-full rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
