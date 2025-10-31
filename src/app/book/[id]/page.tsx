"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const experiences = [
  { id: 1, title: "Goa Beach Paradise" },
  { id: 2, title: "Snowy Adventures in Manali" },
  { id: 3, title: "Royal Getaway in Jaipur" },
];

export default function BookingPage() {
  const { id } = useParams();
  const router = useRouter();
  const experience = experiences.find(
    (exp) => exp.id.toString() === id?.toString()
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    guests: 1,
    date: "",
  });

  if (!experience) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Experience not found
        </h1>
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Booking Confirmed!\n\nExperience: ${experience.title}\nName: ${form.name}\nEmail: ${form.email}\nGuests: ${form.guests}\nDate: ${form.date}`
    );
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Book Your Experience: {experience.title}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Number of Guests</label>
            <input
              type="number"
              min="1"
              value={form.guests}
              onChange={(e) =>
                setForm({ ...form, guests: parseInt(e.target.value) })
              }
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Date</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
