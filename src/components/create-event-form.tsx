
"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
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
import { apiUrl } from "@/lib/api";
import { toast } from "react-toastify";

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

const inputClasses =
  "w-full border-slate-200 focus-visible:ring-orange-500 dark:border-slate-700";

export function CreateEventForm() {
  const [eventType, setEventType] = useState<string | null>(null);

  const [message, setMessage] = useState<{
    type: "error" | "success";
    text: string;
  } | null>(null);

  const [loading, setLoading] = useState(false);

  const { data: session } = authClient.useSession();

  const user = session?.user;

  // Today's date in YYYY-MM-DD format
  const today = new Date();

  const minDate = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

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
      toast.error("Please choose an event type.");
      return;
    }

    // Date validation
    const selectedDate = data.eventDate as string;

    if (!selectedDate || selectedDate < minDate) {
      setMessage({
        type: "error",
        text: "Please select today or a future event date.",
      });
      toast.error("Please select today or a future event date.");
      return;
    }

    try {
      setLoading(true);

      // Frontend data together
      const eventData = {
        ...data,
        eventType,
        creatorEmail: user?.email,
      };

      // Backend API call
      const res = await fetch(apiUrl("/add-kindora"), {
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
      toast.success("Event created successfully!");

      // Form reset
      form.reset();
      setEventType(null);

    } catch (error) {
      console.log(error);

      setMessage({
        type: "error",
        text: "Something went wrong. Please try again.",
      });
      toast.error("Something went wrong. Please try again.");

    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 p-5 sm:p-7"
    >
      {/* Title */}
      <div className="grid gap-2">
        <Label
          htmlFor="title"
          className="font-semibold text-slate-700 dark:text-slate-200"
        >
          Event Title
        </Label>

        <Input
          id="title"
          name="title"
          placeholder="Tree Plantation & Lake Revival"
          required
          minLength={3}
          className={inputClasses}
        />
      </div>

      {/* Description */}
      <div className="grid gap-2">
        <Label
          htmlFor="description"
          className="font-semibold text-slate-700 dark:text-slate-200"
        >
          Description
        </Label>

        <Textarea
          id="description"
          name="description"
          placeholder="Tell volunteers what this event is about..."
          required
          rows={4}
          maxLength={500}
          className={cn(inputClasses, "resize-none")}
        />
      </div>

      {/* Event Type */}
      <div className="grid gap-2">
        <Label
          htmlFor="eventType"
          className="font-semibold text-slate-700 dark:text-slate-200"
        >
          Event Type
        </Label>

        <Select
          value={eventType ?? ""}
          onValueChange={setEventType}
        >
          <SelectTrigger
            id="eventType"
            aria-label="Event type"
            className={cn(inputClasses, "h-10")}
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

        {message?.type === "error" && !eventType && (
          <p className="text-sm font-medium text-red-600">
            {message.text}
          </p>
        )}
      </div>

      {/* Thumbnail */}
      <div className="grid gap-2">
        <Label
          htmlFor="thumbnail"
          className="font-semibold text-slate-700 dark:text-slate-200"
        >
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

      {/* Location */}
      <div className="grid gap-2">
        <Label
          htmlFor="location"
          className="font-semibold text-slate-700 dark:text-slate-200"
        >
          Location
        </Label>

        <Input
          id="location"
          name="location"
          placeholder="Dhanmondi Lake Walkway, Dhaka"
          required
          minLength={3}
          className={inputClasses}
        />
      </div>

      {/* Event Date */}
      <div className="grid gap-2">
        <Label
          htmlFor="eventDate"
          className="font-semibold text-slate-700 dark:text-slate-200"
        >
          Event Date
        </Label>

        <Input
          id="eventDate"
          name="eventDate"
          type="date"
          min={minDate}
          required
          className={inputClasses}
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="mt-1 h-12 rounded-full bg-orange-600 font-semibold text-white shadow-sm transition-all hover:bg-orange-700"
      >
        {loading ? "Creating..." : "Create Event"}
      </Button>

      {/* Success / Error Message */}
      {message && (
        <p
          role="status"
          className={`rounded-lg border px-4 py-3 text-sm font-medium ${
            message.type === "success"
              ? "border-orange-200 bg-orange-50 text-orange-700"
              : "border-red-200 bg-red-50 text-red-600"
          }`}
        >
          {message.text}
        </p>
      )}
    </form>
  );
}
