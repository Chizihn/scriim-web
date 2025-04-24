import { Panic } from "@/types/panic";
import Link from "next/link";

interface PanicCardProps {
  panic: Panic;
}

const PanicCard = ({ panic }: PanicCardProps) => {
  const date = new Date(panic.createdAt).toLocaleString();

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-800">
          {panic.userName}
        </h3>
        <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
          {panic.authorityType || "Emergency"}
        </span>
      </div>

      <div className="mt-2 text-sm text-gray-600">
        <p>
          Location: {panic.location.latitude.toFixed(6)},{" "}
          {panic.location.longitude.toFixed(6)}
        </p>
        <p>Contacts: {panic.contacts.length}</p>
        <p>Created: {date}</p>
      </div>

      <div className="mt-4">
        <Link
          href={`/panic/${panic._id}`}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default PanicCard;
