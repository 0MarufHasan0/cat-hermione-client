import React from 'react';
import { EventCards } from './eventcard';
type Event = {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  location: string;
  eventDate: string;
  eventType: string;
};

const UpcomingEvent = async() => {
  const res = await fetch(`http://localhost:8000/add-kindora`)
  const eventData = await res.json()
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

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">

    {eventData.slice(0, 6).map((event: Event) => (
      <EventCards
        key={event._id}
        event={event}
      />
    ))}

  </div>

</div>
  );
};

export default UpcomingEvent;