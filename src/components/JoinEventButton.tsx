
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
    

    const joinData = {
       username : user?.name,
       email : user?.email,
      image : user?.image,
      ...event,
      joinedAt: new Date(),
    };

    console.log(joinData);

    
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
