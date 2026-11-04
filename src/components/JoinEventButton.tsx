
"use client";

import { authClient } from "@/lib/auth-client";

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
    if (!user) return;

    const { _id, ...eventDetails } = event;

    const joinData = {
      username: user.name,
      joingEmail: user.email,
      image: user.image,
      eventId: _id,
      ...eventDetails,
      joinedAt: new Date(),
    };

    const res = await fetch("http://localhost:8000/join-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(joinData),
    });

    const result = await res.json();

    console.log(result);
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
