"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CalendarDays, MapPin, XCircle } from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { apiUrl } from "@/lib/api";
import { toast } from "react-toastify";
import { EventGridSkeleton } from "@/components/event-skeletons";
import { Skeleton } from "@/components/ui/skeleton";

type JoinedEvent = {
  _id: string;
  eventId?: string;
  title: string;
  description?: string;
  thumbnail?: string;
  location?: string;
  eventDate?: string;
  eventType?: string;
  joinedAt?: string;
};

const JoinEventPage = () => {
  const { data: session, isPending } = authClient.useSession();

  const email = session?.user?.email;

  const [joinedEvents, setJoinedEvents] = useState<JoinedEvent[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch joined events
  useEffect(() => {
    const fetchJoinedEvents = async () => {
      if (!email) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          apiUrl(`/joined-event/${encodeURIComponent(email)}`)
        );

        if (!response.ok) {
          throw new Error("Failed to fetch joined events");
        }

        const data = await response.json();
        setJoinedEvents(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load joined events.");
      } finally {
        setLoading(false);
      }
    };

    fetchJoinedEvents();
  }, [email]);

  // Cancel a joined event
  const handleCancel = async (id: string) => {
    if (!email) return;

    try {
      const response = await fetch(
        apiUrl(`/joined-event/${id}`),
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to cancel event");
      }

      setJoinedEvents((prev) => prev.filter((event) => event._id !== id));
      toast.success("Event cancelled successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to cancel event. Please try again.");
    }
  };

  if (isPending || loading) {
    return (
      <section className="min-h-screen bg-slate-50 px-4 py-12 dark:bg-slate-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center sm:p-8">
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

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-12 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center sm:p-8">

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Joined Events
            </h1>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Events you have joined with your account.
            </p>

            <p className="mt-3 text-xs text-slate-400">
              Logged in as: {email}
            </p>
          </div>

          <div className="rounded-lg border border-orange-100 bg-orange-50 px-4 py-2 dark:border-orange-900 dark:bg-orange-950">
            <span className="text-sm font-semibold text-orange-700 dark:text-orange-400">
              {joinedEvents.length} Events
            </span>
          </div>

        </div>

        {/* Empty State */}
        {joinedEvents.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-20 text-center dark:border-slate-700 dark:bg-slate-900">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange-600 dark:bg-orange-950">
              <CalendarDays size={30} />
            </div>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              No Joined Events Yet!
            </h2>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
              You haven&apos;t joined any events yet. Browse upcoming events and
              join one to see it here.
            </p>

          </div>
        ) : (

          /* Joined Event Cards */
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {joinedEvents.map((event) => (
              <div
                key={event._id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-orange-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-orange-900"
              >

                {/* Image */}
                {event.thumbnail && (
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={event.thumbnail}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {event.eventType && (
                      <span className="absolute left-4 top-4 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-orange-700 shadow-sm">
                        {event.eventType}
                      </span>
                    )}
                  </div>
                )}

                {/* Card Content */}
                <div className="p-5">

                  <h2 className="line-clamp-1 text-lg font-bold text-slate-900 dark:text-white">
                    {event.title}
                  </h2>

                  {event.description && (
                    <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-slate-500 dark:text-slate-400">
                      {event.description}
                    </p>
                  )}

                  <div className="mt-5 space-y-3">

                    {event.location && (
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-950">
                          <MapPin size={17} />
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs text-slate-400">Location</p>

                          <p className="truncate text-sm font-medium text-slate-700 dark:text-slate-200">
                            {event.location}
                          </p>
                        </div>
                      </div>
                    )}

                    {event.eventDate && (
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-950">
                          <CalendarDays size={17} />
                        </div>

                        <div>
                          <p className="text-xs text-slate-400">Event Date</p>

                          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                            {new Date(event.eventDate).toLocaleDateString(
                              "en-GB"
                            )}
                          </p>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Cancel Button */}
                  <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <button
                      onClick={() => handleCancel(event._id)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
                    >
                      <XCircle size={17} />
                      Cancel Event
                    </button>
                  </div>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
};

export default JoinEventPage;
