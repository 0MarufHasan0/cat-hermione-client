
import JoinEventButton from "@/components/JoinEventButton";
import { auth } from "@/lib/auth";
import { apiUrl } from "@/lib/api";
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const EventDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  // Get the session from the server jwt token

  const jwtToken= await auth.api.getToken({
   headers : await headers() // you need to pass the headers object.
  })

  // console.log("Token from server:", jwtToken.token);

  const response = await fetch(apiUrl(`/kindora/${id}`), {

    headers : {

      authorization: `Bearer ${jwtToken?.token}` // Pass the token in the Authorization header
    } 
});

  if (!response.ok) {
    notFound();
  }

  const event = await response.json();

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl">

        {/* Back Button */}
        <Link
          href="/upcoming-events"
          className="mb-6 inline-flex items-center gap-2 font-medium text-slate-600 transition-colors hover:text-orange-600 dark:text-slate-400"
        >
          <ArrowLeft className="size-4" />
          Back to Events
        </Link>

        {/* Event Details Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

          {/* Event Image */}
          <div className="relative h-[280px] w-full sm:h-[420px]">
            <Image
              src={event.thumbnail}
              alt={event.title}
              fill
              unoptimized
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <span className="absolute bottom-5 left-5 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
              {event.eventType}
            </span>
          </div>

          {/* Event Information */}
          <div className="space-y-7 p-6 sm:p-10">

            {/* Title */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-600">
                Kindora Community Event
              </p>

              <h1 className="text-2xl font-bold leading-tight text-slate-900 sm:text-4xl dark:text-white">
                {event.title}
              </h1>
            </div>

            {/* Event Date & Location */}
            <div className="grid gap-4 border-y border-slate-200 py-6 sm:grid-cols-2 dark:border-slate-800">

              <div className="flex items-start gap-4 rounded-xl bg-orange-50/70 p-4 dark:bg-orange-950/20">
                <div className="rounded-lg bg-white p-3 text-orange-600 shadow-sm dark:bg-slate-800">
                  <CalendarDays className="size-5" />
                </div>

                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Event Date
                  </p>
                  <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                    {event.eventDate}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-orange-50/70 p-4 dark:bg-orange-950/20">
                <div className="rounded-lg bg-white p-3 text-orange-600 shadow-sm dark:bg-slate-800">
                  <MapPin className="size-5" />
                </div>

                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Location
                  </p>
                  <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                    {event.location}
                  </p>
                </div>
              </div>

            </div>

            {/* Event Description */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
                About This Event
              </h2>

              <p className="text-base leading-8 text-slate-600 dark:text-slate-400">
                {event.description}
              </p>
            </div>

            {/* Join Event Button */}
            <div className="border-t border-slate-200 pt-6 dark:border-slate-800">
              <JoinEventButton event={event} />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default EventDetailsPage;
