"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  SlidersHorizontalIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EventCards } from "./eventcard";
import { EventGridSkeleton } from "@/components/event-skeletons";
import { apiUrl } from "@/lib/api";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

type Event = {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  location: string;
  eventDate: string;
  eventType: string;
};

const eventTypes = [
  "Cleanup",
  "Plantation",
  "Donation",
  "Clothes Distribution",
  "Food Distribution",
  "Health Camp",
  "Education",
  "Blood Donation",
  "Community Support",
  "Animal Welfare",
  "Awareness Campaign",
  "Relief Distribution",
];

const UpcomingEvent = () => {
  const router = useRouter();

  // Selected category
  const [category, setCategory] = useState("");

  // Event data
  const [eventData, setEventData] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  // API call
 useEffect(() => {
  const getEvents = async () => {
    try {
      setLoading(true);

      const apiUrlWithCategory = category
        ? apiUrl(`/events?category=${encodeURIComponent(category)}&limit=6`)
        : apiUrl("/events?limit=6");

      // The /events endpoint is JWT-protected, so this header is required.
      const token = await getTokenFromClient();

      const res = await fetch(apiUrlWithCategory, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch events");
      }

      const data = await res.json();

      setEventData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  getEvents();
}, [category]);

  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24 dark:bg-slate-950">

      {/* Background Decorations */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 -z-10 size-80 rounded-full bg-orange-100/60 blur-3xl dark:bg-orange-500/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 -z-10 size-72 rounded-full bg-orange-50 blur-3xl dark:bg-orange-500/5"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Header */}

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="rounded-full border-orange-200 bg-orange-50 px-4 py-1.5 text-[10px] font-bold tracking-[0.15em] text-orange-700 uppercase dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400"
            >
              Make a Difference
            </Badge>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Upcoming{" "}
              <span className="text-orange-600 dark:text-orange-400">
                Events
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
              Discover meaningful events, connect with passionate volunteers,
              and take part in building a kinder community with Kindora.
            </p>
          </div>

          {/* All Events - Navigate to Upcoming Events Page */}

          <Button
            variant="outline"
            className="w-fit rounded-full border-orange-200 text-orange-700 hover:bg-orange-50 hover:text-orange-800 dark:border-orange-500/30 dark:text-orange-400 dark:hover:bg-orange-500/10"
            onClick={() => router.push("/upcoming-events")}
          >
            <SlidersHorizontalIcon className="size-4" />
            All Events
          </Button>
        </div>

        {/* Category Filter */}

        <div className="mt-8">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
              <SlidersHorizontalIcon className="size-4" />
            </span>

            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Explore by Category
            </h3>
          </div>

          <div className="flex flex-wrap gap-2.5">

            {/* Category Filter All Events Button */}

            <Button
              variant="outline"
              onClick={() => setCategory("")}
              className={`rounded-full px-4 transition-all ${
                category === ""
                  ? "border-orange-600 bg-orange-600 text-white hover:bg-orange-700 hover:text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-orange-500/30 dark:hover:bg-orange-500/10 dark:hover:text-orange-400"
              }`}
            >
              All Events
            </Button>

            {/* Category Buttons */}

            {eventTypes.map((type) => (
              <Button
                key={type}
                variant="outline"
                onClick={() => setCategory(type)}
                className={`rounded-full px-4 transition-all ${
                  category === type
                    ? "border-orange-600 bg-orange-600 text-white hover:bg-orange-700 hover:text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-orange-500/30 dark:hover:bg-orange-500/10 dark:hover:text-orange-400"
                }`}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* Selected Category */}

        {category && (
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-orange-100 bg-orange-50/70 px-4 py-3 dark:border-orange-500/20 dark:bg-orange-500/5">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Showing events in{" "}
              <span className="font-bold text-orange-700 dark:text-orange-400">
                {category}
              </span>
            </p>

            <button
              onClick={() => setCategory("")}
              className="text-sm font-semibold text-orange-700 transition-colors hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-300"
            >
              Clear filter
            </button>
          </div>
        )}

        {/* Event Cards */}

        {loading ? (
          <div className="mt-8">
            <EventGridSkeleton />
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eventData.map((event) => (
              <EventCards key={event._id} event={event} />
            ))}
          </div>
        )}

        {/* Empty State */}

        {!loading && eventData.length === 0 && (
          <div className="mt-8 flex flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-5 py-14 text-center dark:border-slate-700 dark:bg-slate-900/50">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
              <CalendarDaysIcon className="size-7" />
            </span>

            <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
              No Events Found
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-400">
              {category
                ? `There are no events in the "${category}" category right now. Try another category.`
                : "There are no upcoming events available right now. Please check back later."}
            </p>

            {category && (
              <Button
                onClick={() => setCategory("")}
                className="mt-5 rounded-full bg-orange-600 px-5 text-white hover:bg-orange-700"
              >
                View All Events
                <ArrowRightIcon className="ml-1 size-4" />
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingEvent;