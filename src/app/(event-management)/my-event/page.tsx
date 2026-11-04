
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

import {
  CalendarDays,
  MapPin,
  Plus,
} from "lucide-react";

import Image from "next/image";

import DeleteKindoraDialog from "@/components/DeleteKindora";
import EditKindoraDialog from "@/components/EditKindora";
import { EventGridSkeleton } from "@/components/event-skeletons";
import { Skeleton } from "@/components/ui/skeleton";
import { apiUrl } from "@/lib/api";
import { toast } from "react-toastify";

type Event = {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  location: string;
  eventDate: string;
  eventType: string;
};

const MyKindoraPage = () => {
  const { data: session, isPending } = authClient.useSession();

  const email = session?.user?.email;

  const [myEvents, setMyEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch My Events
  useEffect(() => {
    const fetchMyEvents = async () => {
      if (!email) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          apiUrl(`/my-kindora/${encodeURIComponent(email)}`)
        );

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();
        setMyEvents(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load your events.");
      } finally {
        setLoading(false);
      }
    };

    fetchMyEvents();
  }, [email]);

  if (isPending || loading) {
    return (
      <section className="min-h-screen bg-slate-50 px-4 py-12 dark:bg-slate-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center sm:p-8">
            <div className="w-full space-y-3">
              <Skeleton className="h-9 w-44" />
              <Skeleton className="h-4 w-full max-w-md" />
              <Skeleton className="h-3 w-56" />
            </div>

            <Skeleton className="h-11 w-44 shrink-0 rounded-lg" />
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className="space-y-2">
              <Skeleton className="h-6 w-36" />
              <Skeleton className="h-4 w-64" />
            </div>

            <Skeleton className="h-10 w-24 rounded-lg" />
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
              My Events
            </h1>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Manage and keep track of the events you have created.
            </p>

            <p className="mt-3 text-xs text-slate-400">
              Logged in as: {email}
            </p>
          </div>

          <Link
            href="/create-event"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
          >
            <Plus size={18} />
            Create New Event
          </Link>

        </div>

        {/* Event Heading */}
        <div className="mb-6 flex items-center justify-between">

          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Your Events
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              All the events you have created.
            </p>
          </div>

          <div className="rounded-lg border border-orange-100 bg-orange-50 px-4 py-2 dark:border-orange-900 dark:bg-orange-950">
            <span className="text-sm font-semibold text-orange-700 dark:text-orange-400">
              {myEvents.length} Events
            </span>
          </div>

        </div>

        {/* Empty State */}
        {myEvents.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-20 text-center dark:border-slate-700 dark:bg-slate-900">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange-600 dark:bg-orange-950">
              <CalendarDays size={30} />
            </div>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              No Events Yet!
            </h2>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
              You haven&apos;t created any events yet. Create your first event and
              start making a difference in your community.
            </p>

            <Link
              href="/create-event"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              <Plus size={18} />
              Create Your First Event
            </Link>

          </div>
        ) : (

          /* Event Cards */
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {myEvents.map((event) => (
              <div
                key={event._id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-orange-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-orange-900"
              >

                {/* Image */}
                <div className="relative h-52 overflow-hidden">

                  <Image
                    src={event.thumbnail}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Category Badge */}
                  <span className="absolute left-4 top-4 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-orange-700 shadow-sm">
                    {event.eventType}
                  </span>

                </div>

                {/* Card Content */}
                <div className="p-5">

                  {/* Title */}
                  <h2 className="line-clamp-1 text-lg font-bold text-slate-900 dark:text-white">
                    {event.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-slate-500 dark:text-slate-400">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="mt-5 space-y-3">

                    {/* Location */}
                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-950">
                        <MapPin size={17} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs text-slate-400">
                          Location
                        </p>

                        <p className="truncate text-sm font-medium text-slate-700 dark:text-slate-200">
                          {event.location}
                        </p>
                      </div>

                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-950">
                        <CalendarDays size={17} />
                      </div>

                      <div>
                        <p className="text-xs text-slate-400">
                          Event Date
                        </p>

                        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                          {new Date(event.eventDate).toLocaleDateString("en-GB")}
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">

                    <div className="flex-1">
                      <EditKindoraDialog
                        id={event._id}
                        event={event}
                        email={email!}
                      />
                    </div>

                    <div className="flex-1">
                      <DeleteKindoraDialog
                        id={event._id}
                        email={email!}
                      />
                    </div>

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

export default MyKindoraPage;
