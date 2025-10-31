import Image from "next/image";

interface ExperienceCardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
}

export default function ExperienceCard({
  title,
  description,
  image,
  price,
  location,
}: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-500 text-sm mt-1">{location}</p>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-blue-600">₹{price}</span>
          <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
