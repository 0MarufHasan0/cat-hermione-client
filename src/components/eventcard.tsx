
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Event = {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  location: string;
  eventDate: string;
  eventType: string;
};

export function EventCards({ event }: { event: Event }) {
  return (
    <Card className="group overflow-hidden rounded-2xl border border-slate-200 bg-white pt-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950">
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <Image
          src={event.thumbnail}
          alt={event.title}
          width={400}
          height={400}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <Badge className="absolute left-3 top-3 border border-orange-200 bg-orange-50 px-3 py-1 text-orange-700 hover:bg-orange-100 dark:border-orange-800 dark:bg-orange-950 dark:text-orange-300">
          {event.eventType}
        </Badge>
      </div>

      {/* Card Header */}
      <CardHeader className="gap-3 px-5 pt-5">
        <CardTitle className="line-clamp-1 text-xl font-bold text-slate-900 transition-colors group-hover:text-orange-600 dark:text-white">
          {event.title}
        </CardTitle>

        <p className="line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
          {event.description}
        </p>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="space-y-3 px-5 text-sm">
        <div className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
          <MapPin className="mt-0.5 size-4 shrink-0 text-orange-600" />
          <span className="line-clamp-1">{event.location}</span>
        </div>

        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
          <CalendarDays className="size-4 shrink-0 text-orange-600" />
          <span>
            {new Date(event.eventDate).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
              timeZone: "UTC",
            })}
          </span>
        </div>
      </CardContent>

      {/* Card Footer */}
      <CardFooter className="px-5 pb-5">
       <Link href={`/upcoming-events/${event._id}`} className="w-full">
          <Button
            variant="outline" 
            className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 dark:border-orange-500 dark:text-orange-400 dark:hover:bg-orange-950"
          >
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
} 
  
