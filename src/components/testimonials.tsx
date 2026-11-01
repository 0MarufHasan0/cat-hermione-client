import Image from "next/image";
import { BadgeCheckIcon, StarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Joining Cat Hermione transformed how our neighborhood views social responsibility. We planted 300 trees in Dhanmondi in just one weekend! The spirit of teamwork was unbeatable.",
    name: "Amira Rahman",
    role: "Lead Youth Organizer, Dhaka",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    quote:
      "The coordination tools make organizing relief drives effortless. We provided blankets to over 400 homeless individuals during peak winter with full transparency and speed.",
    name: "Tanvir Hossain",
    role: "Winter Relief Coordinator",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    quote:
      "As a student volunteer, finding weekend drives near my university gave me purpose and connected me with wonderful lifelong friends. The certificates also helped my master's applications!",
    name: "Nusrat Jaban",
    role: "Campus Ambassador",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

function Stars() {
  return (
    <div aria-label="5 out of 5 stars" className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon key={index} className="size-4 fill-current text-primary" />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex flex-col rounded-xl border border-border/60 bg-card p-6 shadow-sm">
      <Stars />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80 italic">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={40}
          height={40}
          className="size-10 rounded-full object-cover"
        />
        <div>
          <p className="flex items-center gap-1.5 font-heading text-sm font-bold text-foreground">
            {testimonial.name}
            <BadgeCheckIcon className="size-4 text-primary" aria-hidden />
          </p>
          <p className="text-xs text-primary">{testimonial.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="rounded-full border-primary/15 bg-primary/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] text-primary uppercase"
          >
            Testimonials
          </Badge>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Voices of Our Community
          </h2>
          <p className="mt-3 text-sm text-foreground/70 lg:text-base">
            Hear from the spirited volunteers and community organizers driving
            positive change.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
