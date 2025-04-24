import Link from "next/link";
import { Panic } from "@/types/panic";

interface PanicCardProps {
  panic: Panic;
}

export default function PanicCard({ panic }: PanicCardProps) {
  const date = new Date(panic.createdAt).toLocaleString();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold text-gray-800">
            {panic.userName}
          </h2>
          <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
            {panic.authorityType || "Emergency"}
          </span>
        </div>
        <p className="text-gray-500 text-sm mt-1">{date}</p>
        <div className="mt-4">
          <Link
            href={`/panic/${panic._id}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
