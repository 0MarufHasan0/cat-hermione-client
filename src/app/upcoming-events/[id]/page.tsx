
import JoinEventButton from "@/components/JoinEventButton";
import Image from "next/image";
import Link from "next/link";

const EventDetailsPage = async ({params,}: {params: Promise<{ id: string }>;}) => {
  const { id } = await params;

  const response = await fetch(
    `http://localhost:8000/kindora/${id}`
  );

  const event = await response.json();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">

        <Link
          href="/upcoming-events"
          className="mb-6 inline-block text-blue-600 hover:underline"
        >
          ← Back to Events
        </Link>

        <div className="overflow-hidden rounded-xl bg-white shadow-md">

          {/* Event Image */}
          <div className="relative h-[300px] w-full sm:h-[450px]">
            <Image
              src={event.thumbnail}
              alt={event.title}
            fill
              unoptimized
              objectFit="cover"
            />
          </div>

          {/* Event Information */}
          <div className="space-y-5 p-6 sm:p-8">

            <div>
              <span className="rounded-full bg-green-100 px-4 py-2 text-sm text-green-700">
                {event.eventType}
              </span>

              <h1 className="mt-5 text-2xl font-bold text-gray-800 sm:text-3xl">
                {event.title}
              </h1>
            </div>

            <div className="grid gap-4 border-y py-5 sm:grid-cols-2">

              <div>
                <p className="text-sm text-gray-500">
                  Event Date
                </p>
                <p className="mt-1 font-medium text-gray-800">
                  {event.eventDate}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>
                <p className="mt-1 font-medium text-gray-800">
                  {event.location}
                </p>
              </div>

            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-gray-800">
                About This Event
              </h2>

              <p className="leading-8 text-gray-600">
                {event.description}
              </p>
            </div>

            {/* Join Event Button */}
            <div className="pt-4">
            <JoinEventButton event={event} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
