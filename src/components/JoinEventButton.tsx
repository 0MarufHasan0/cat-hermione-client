
"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { apiUrl } from "@/lib/api";
import { toast } from "react-toastify";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

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

  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(false);

  const handleJoinEvent = async () => {
    if (!user) {
      toast.error("Please sign in to join this event.");
      return;
    }

    if (loading || joined) return;

    setLoading(true);

    try {
      const { _id, ...eventDetails } = event;

      const token = await getTokenFromClient();

      const joinData = {
        username: user.name,
        joingEmail: user.email,
        image: user.image,
        eventId: _id,
        ...eventDetails,
        joinedAt: new Date(),
      };

      const res = await fetch(apiUrl("/join-event"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(joinData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to join event");
      }

      setJoined(true);

      toast.success("You have joined the event!");

    } catch (error) {
      console.error(error);
      toast.error("Failed to join event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleJoinEvent}
      disabled={loading || joined}
      className="w-full rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
    >
      {loading
        ? "Joining..."
        : joined
          ? "Already Joined"
          : "Join Event"}
    </button>
  );
};

export default JoinEventButton;
