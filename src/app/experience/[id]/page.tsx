"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    title: "Goa Beach Paradise",
    location: "Goa, India",
    price: "₹4,999",
    description:
      "Enjoy sun, sand, and sea in the tropical paradise of Goa. Perfect for beach lovers!",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 2,
    title: "Snowy Adventures in Manali",
    location: "Manali, Himachal Pradesh",
    price: "₹6,499",
    description:
      "Escape to the snow-capped mountains and enjoy skiing, trekking, and cozy bonfires.",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
  },
  {
    id: 3,
    title: "Royal Getaway in Jaipur",
    location: "Jaipur, Rajasthan",
    price: "₹5,999",
    description:
      "Experience the royal culture, palaces, and history of the Pink City, Jaipur.",
    image:
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2071",
  },
];

export default function ExperiencePage() {
  const params = useParams();
  const experience = experiences.find(
    (exp) => exp.id.toString() === params.id?.toString()
  );

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

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <div className="max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <Image
          src={experience.image}
          alt={experience.title}
          width={700}
          height={400}
          className="object-cover w-full h-64"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {experience.title}
          </h1>
          <p className="text-gray-500 mb-2">{experience.location}</p>
          <p className="text-blue-600 font-semibold mb-4">
            {experience.price}
          </p>
          <p className="text-gray-700 mb-6">{experience.description}</p>

          {/* ✅ Added Book This Experience Button */}
          <div className="flex gap-3">
            <Link
              href={`/book/${experience.id}`}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Book This Experience
            </Link>

            <Link
              href="/"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
