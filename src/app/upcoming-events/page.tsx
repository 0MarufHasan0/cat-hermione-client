
"use client";

import React, { useEffect, useState } from "react";
import { EventCards } from "@/components/eventcard";
import { SlidersHorizontal, CalendarDays } from "lucide-react";
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
          ? apiUrl(`/events?category=${encodeURIComponent(category)}`)
          : apiUrl("/events");

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
    <section className="min-h-screen bg-white px-4 py-14 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 dark:border-orange-900 dark:bg-orange-950/30 dark:text-orange-400">
            <CalendarDays className="size-4" />
            Make a Difference Together
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Upcoming{" "}
            <span className="text-orange-600">Events</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Discover meaningful community events, connect with volunteers,
            and join us to make a positive difference.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900">

          <div className="mb-5 flex items-center gap-2">
            <SlidersHorizontal className="size-5 text-orange-600" />

            <h3 className="font-semibold text-slate-900 dark:text-white">
              Explore by Category
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">

            {/* All Events Button */}
            <button
              onClick={() => setCategory("")}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                category === ""
                  ? "border-orange-600 bg-orange-600 text-white shadow-md shadow-orange-600/20"
                  : "border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:hover:bg-orange-950/30"
              }`}
            >
              All Events
            </button>

            {/* Category Buttons */}
            {eventTypes.map((type) => (
              <button
                key={type}
                onClick={() => setCategory(type)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  category === type
                    ? "border-orange-600 bg-orange-600 text-white shadow-md shadow-orange-600/20"
                    : "border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:hover:bg-orange-950/30"
                }`}
              >
                {type}
              </button>
            ))}

          </div>
        </div>

        {/* Selected Category */}
        {category && (
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Showing category:{" "}
              <span className="font-semibold text-orange-600">
                {category}
              </span>
            </p>

            <button
              onClick={() => setCategory("")}
              className="text-sm font-semibold text-orange-600 transition-colors hover:text-orange-700"
            >
              Clear Filter
            </button>
          </div>
        )}

        {/* Event Cards */}
        {loading ? (
          <EventGridSkeleton count={9} />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eventData.map((event) => (
              <EventCards key={event._id} event={event} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default UpcomingEvent;
