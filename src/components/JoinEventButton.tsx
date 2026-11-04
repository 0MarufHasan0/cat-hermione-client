
"use client";

import { authClient } from "@/lib/auth-client";
import { apiUrl } from "@/lib/api";
import { toast } from "react-toastify";

type JoinEventButtonProps = {
  event: {
    _id: string;
    title: string;
    eventType: string;
  };
};

const JoinEventButton = ({ event }: JoinEventButtonProps) => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleJoinEvent = async () => {
    if (!user) {
      toast.error("Please sign in to join this event.");
      return;
    }

    const { _id, ...eventDetails } = event;

    const joinData = {
      username: user.name,
      joingEmail: user.email,
      image: user.image,
      eventId: _id,
      ...eventDetails,
      joinedAt: new Date(),
    };

    try {
      const res = await fetch(apiUrl("/join-event"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(joinData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to join event");
      }

      toast.success("You have joined the event!");
      console.log(result);
    } catch (error) {
      console.error(error);
      toast.error("Failed to join event. Please try again.");
    }
  };

  return (
    <button
      onClick={handleJoinEvent}
      className="w-full rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 sm:w-auto"
    >
      Join Event
    </button>
  );
};

export default JoinEventButton;
