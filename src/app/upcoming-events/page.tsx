
"use client";

import React, { useEffect, useState } from "react";
import { EventCards } from "@/components/eventcard";

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

  // console.log("1. Current Category:", category);

  // API call
  useEffect(() => {
    // console.log("2. useEffect Started!");
    // console.log("3. Selected Category:", category);

    const getEvents = async () => {
      const apiUrl = category
        ? `http://localhost:8000/events?category=${encodeURIComponent(category)}`
        : "http://localhost:8000/events";

      // console.log("4. API URL:", apiUrl);

      const res = await fetch(apiUrl);
      // console.log("5. API Response Status:", res.status);

      const data = await res.json();

      // console.log("6. Received Data:", data);

      setEventData(data);
    };

    getEvents();
  }, [category]);

  // console.log("7. Event Data:", eventData);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">

      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">
          Upcoming Events
        </h2>

        <p className="mt-2 text-muted-foreground">
          Discover events and join us to make a difference.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
  <button
    onClick={() => setCategory("")}
    className={`px-4 py-2 rounded-md ${
      category === ""
        ? "bg-black text-white"
        : "bg-gray-200 text-black"
    }`}
  >
    All Events
  </button>

  {eventTypes.map((type) => (
    <button
      key={type}
      onClick={() => setCategory(type)}
      className={`px-4 py-2 rounded-md ${
        category === type
          ? "bg-black text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      {type}
    </button>
  ))}
</div>
      {/* Event Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {eventData.map((event) => (
          <EventCards key={event._id} event={event} />
        ))}
      </div>

    </div>
  );
};

export default UpcomingEvent;
