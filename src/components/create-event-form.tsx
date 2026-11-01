
"use client";

import { useState } from "react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { authClient } from "@/lib/auth-client";

const EVENT_TYPES = [
  "Cleanup",
  "Plantation",
  "Donation",
  "Clothes Distribution",
  "Food Distribution",
  "Health Camp",
  "Education",
  "Blood Donation",
  "Community Support",
  "Animal Welfare",
  "Awareness Campaign",
  "Relief Distribution",
];

const inputClasses = "w-full";

export function CreateEventForm() {
  const [eventType, setEventType] = useState<string | null>(null);

  const [message, setMessage] = useState<{
    type: "error" | "success";
    text: string;
  } | null>(null);

  const [loading, setLoading] = useState(false);

    const { data: session} = authClient.useSession();
  
    const user = session?.user;

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;

    setMessage(null);

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Event Type check
    if (!eventType) {
      setMessage({
        type: "error",
        text: "Please choose an event type.",
      });
      return;
    }

    try {
      setLoading(true);

      // // Frontend data eksathe korlam
      const eventData = {
        ...data,
        eventType,
        creatorEmail: user?.email,
      };

      // Backend API call
      const res = await fetch("http://localhost:8000/add-kindora", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Event creation failed");
      }

      console.log("New event:", result);

      setMessage({
        type: "success",
        text: "Event created successfully!",
      });

      // Form reset
      form.reset();
      setEventType(null);

    } catch (error) {
      console.log(error);

      setMessage({
        type: "error",
        text: "Something went wrong. Please try again.",
      });

    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 p-6"
    >
      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          placeholder="Tree Plantation & Lake Revival"
          required
          minLength={3}
          className={inputClasses}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Tell volunteers what this event is about..."
          required
          rows={4}
          maxLength={500}
          className={inputClasses}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="eventType">Event Type</Label>

        <Select
          value={eventType ?? ""}
          onValueChange={setEventType}
        >
          <SelectTrigger
            id="eventType"
            aria-label="Event type"
            className={cn(inputClasses, "h-9")}
          >
            <SelectValue placeholder="Select event type" />
          </SelectTrigger>

          <SelectContent>
            {EVENT_TYPES.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {message?.type === "error" && (
          <p className="text-sm font-medium text-destructive">
            {message.text}
          </p>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="thumbnail">
          Thumbnail Image URL
        </Label>
        <Input
          id="thumbnail"
          name="thumbnail"
          type="url"
          placeholder="https://example.com/event-photo.jpg"
          required
          className={inputClasses}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          name="location"
          placeholder="Dhanmondi Lake Walkway, Dhaka"
          required
          minLength={3}
          className={inputClasses}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="eventDate">Event Date</Label>
        <Input
          id="eventDate"
          name="eventDate"
          type="date"
          required
          className={inputClasses}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="mt-1 rounded-full h-11"
      >
        {loading ? "Creating..." : "Create Event"}
      </Button>

      {message && (
        <p
          role="status"
          className={`rounded-lg border px-4 py-3 text-sm font-medium ${
            message.type === "success"
              ? "border-primary/20 bg-primary/5 text-primary"
              : "border-destructive/20 bg-destructive/5 text-destructive"
          }`}
        >
          {message.text}
        </p>
      )}
    </form>
  );
}
