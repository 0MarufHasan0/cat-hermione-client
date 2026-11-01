import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
type Event = {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  location: string;
  eventDate: string;
  eventType: string;
};

export function EventCards({event}:{event : Event}) {
  return (
    <section className="container mx-auto px-4 py-10">
     
      
          <Card
            key={event._id}
            className="group overflow-hidden pt-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Thumbnail */}
            <div className="relative overflow-hidden">
              <Image
                src={event.thumbnail}
                alt={event.title}
                width={400}
                height={400}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <Badge
                variant="secondary"
                className="absolute right-3 top-3"
              >
                {event.eventType}
              </Badge>
            </div>

            {/* Card Header */}
            <CardHeader className="gap-3">
              <CardTitle className="line-clamp-1 text-lg">
                {event.title}
              </CardTitle>

              <p className="line-clamp-2 text-sm text-muted-foreground">
                {event.description}
              </p>
            </CardHeader>

            {/* Card Content */}
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>📍</span>
                <span>{event.location}</span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <span>📅</span>
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
            <CardFooter>
              <Button className="w-full">
                View Event
              </Button>
            </CardFooter>
          </Card>
           
    </section>
  )
}