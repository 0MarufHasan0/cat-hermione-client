
"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Pencil } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

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

type Event = {
  
  title: string;
  description: string;
  thumbnail: string;
  location: string;
  eventDate: string;
  eventType: string;
};


const EditKindoraDialog = ({
  id,
  email,
  event 
}: {
  id: string;
  email: string; 
    event: Event;

}) => {

    const router = useRouter();

  const [eventType, setEventType] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const today = new Date().toLocaleDateString("en-CA");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!eventType) {
      toast.error("Please select an event type");
      return;
    }

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const updatedData = {
      title: formData.get("title"),
      description: formData.get("description"),
      eventType,
      thumbnail: formData.get("thumbnail"),
      location: formData.get("location"),
      eventDate: formData.get("eventDate"),
    };

    const res = await fetch(`http://localhost:8000/kindora/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        updatedData,
      }),
    });

    const data = await res.json();

    // console.log(data);

    if (res.ok && data.modifiedCount > 0) {

      toast.success("Event updated successfully");
      router.push('/upcoming-events');
      
      setOpen(false);
    } else {
      toast.error("Event update failed");
    }

    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Pencil size={16} />
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Event</DialogTitle>
          <DialogDescription>
            Update your event details below.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-5 p-2">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
                defaultValue={event.title}
              placeholder="Tree Plantation & Lake Revival"
              required
              minLength={3}
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
              defaultValue={event.description}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="eventType">Event Type</Label>

            <Select defaultValue={event.eventType}  onValueChange={setEventType}>
              <SelectTrigger id="eventType">
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
          </div>

          <div className="grid gap-2">
            <Label htmlFor="thumbnail">Thumbnail Image URL</Label>
            <Input
              id="thumbnail"
              name="thumbnail"
              type="url"
              placeholder="https://example.com/event-photo.jpg"
              required
              defaultValue={event.thumbnail}
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
              defaultValue={event.location}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="eventDate">Event Date</Label>
            <Input
              id="eventDate"
              name="eventDate"
              type="date"
              min={today}
              required
              defaultValue={new Date(event.eventDate).toISOString().split("T")[0]}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="mt-1 h-11 rounded-full"
          >
            {loading ? "Updating..." : "Update Event"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditKindoraDialog;
