"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const experiences = [
  {
    id: 1,
    title: "Goa Beach Paradise",
    location: "Goa, India",
    price: "₹4,999",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 2,
    title: "Snowy Adventures in Manali",
    location: "Manali, Himachal Pradesh",
    price: "₹6,499",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
  },
  {
    id: 3,
    title: "Royal Getaway in Jaipur",
    location: "Jaipur, Rajasthan",
    price: "₹5,999",
    image:
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
  },
];

export default function HomePage() {
  const [apiMessage, setApiMessage] = useState("Checking backend...");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.text())
      .then((data) => setApiMessage(data))
      .catch(() => setApiMessage("⚠️ Unable to connect to backend"));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
        BookIt Experiences
      </h1>

      {/* ✅ Backend connection status */}
      <p className="text-center text-gray-600 mb-6">
        Backend Status: <strong>{apiMessage}</strong>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform"
          >
            <Image
              src={exp.image}
              alt={exp.title}
              width={500}
              height={300}
              className="object-cover w-full h-60"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {exp.title}
              </h2>
              <p className="text-gray-500">{exp.location}</p>
              <p className="text-blue-600 font-bold mt-2">{exp.price}</p>

              <Link href={`/experience/${exp.id}`}>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
