"use client";

import { useEffect, useState } from "react";
import { Panic } from "@/types/panic";
import PanicCard from "@/components/PanicCard";
import { getAllPanics } from "@/services/panicServices";

export default function Home() {
  const [panics, setPanics] = useState<Panic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPanics = async () => {
      try {
        const data = await getAllPanics();
        setPanics(data);
      } catch (err) {
        setError("Failed to load panic alerts. Please try again later.");
        console.error("Error fetching panics:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPanics();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#e74c3c]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Emergency Alerts
      </h1>

      {panics.length === 0 ? (
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <p className="text-gray-600">No alerts found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {panics.map((panic) => (
            <PanicCard key={panic._id} panic={panic} />
          ))}
        </div>
      )}
    </main>
  );
}
