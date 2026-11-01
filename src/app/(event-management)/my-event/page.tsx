
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import {
  CalendarDays,
  MapPin,
  Pencil,
  Trash2,
  Plus,
  Heart,
} from "lucide-react";
import Image from "next/image";
import DeleteKindoraDialog from "@/components/DeleteKindora";
import EditKindoraDialog from "@/components/EditKindora";

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
          `http://localhost:8000/my-kindora/${encodeURIComponent(email)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();
        setMyEvents(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyEvents();
  }, [email]);

  

  if (isPending || loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-lg font-semibold text-gray-500">
          Loading your events...
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-emerald-600">
              <Heart size={17} />
              Your Contributions
            </p>

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              My Events
            </h1>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Manage the events you have created.
            </p>

            <p className="mt-3 text-sm text-gray-500">
              {email}
            </p>
          </div>

          <Link
            href="/create-kindora"
            className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            <Plus size={19} />
            Create Event
          </Link>
        </div>

        {/* Event Count */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Total Events:{" "}
            <span className="font-bold text-emerald-600">
              {myEvents.length}
            </span>
          </p>
        </div>

        {/* Empty State */}
        {myEvents.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-16 text-center dark:border-gray-700 dark:bg-gray-900">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950">
              <Heart size={30} />
            </div>

            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              No Events Yet!
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              You have not created any events yet.
            </p>

            <Link
              href="/create-kindora"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              <Plus size={17} />
              Create Your First Event
            </Link>
          </div>
        ) : (
          /* Event Cards */
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {myEvents.map((event) => (
              <div
                key={event._id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={event.thumbnail}
                    alt={event.title}
                    fill
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                 
                  <span className="absolute left-4 top-4 rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white">
                    {event.eventType}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="line-clamp-1 text-xl font-bold text-gray-900 dark:text-white">
                    {event.title}
                  </h2>

                  <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {event.description}
                  </p>

                  <div className="mt-5 space-y-3 border-t border-gray-100 pt-4 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin size={17} className="text-emerald-600" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarDays size={17} className="text-emerald-600" />
                      <span>
                        {new Date(event.eventDate).toLocaleDateString("en-GB")}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}

    <div className="mt-5 flex gap-3">

           <div className="flex-1">
             <EditKindoraDialog
               id={event._id}
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
