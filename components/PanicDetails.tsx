"use client";

import { useEffect, useState } from "react";
import { Panic } from "@/types/panic";
import Link from "next/link";
import { getPanicById } from "@/services/panicServices";

export default function PanicDetail({ id }: { id: string }) {
  const [panic, setPanic] = useState<Panic | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPanic = async () => {
      try {
        const data = await getPanicById(id);
        setPanic(data);
        setLoading(false);
      } catch (err) {
        console.error("Error panic id", err);
        setError("Failed to load panic alert details. Please try again later.");
        setLoading(false);
      }
    };

    fetchPanic();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !panic) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">
            {error || "Panic alert not found"}
          </span>
          <div className="mt-4">
            <Link href="/" className="text-red-700 underline">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const date = new Date(panic.createdAt).toLocaleString();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          ← Back to All Alerts
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Emergency Alert: {panic.userName}
            </h1>
            <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded">
              {panic.authorityType || "Emergency"}
            </span>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">Alert Details</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <span className="font-medium">User:</span> {panic.userName}
                  </li>
                  <li>
                    <span className="font-medium">Created:</span> {date}
                  </li>
                  <li>
                    <span className="font-medium">Authority Type:</span>{" "}
                    {panic.authorityType || "Not specified"}
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">
                  Location Information
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <span className="font-medium">Latitude:</span>{" "}
                    {panic.location.latitude}
                  </li>
                  <li>
                    <span className="font-medium">Longitude:</span>{" "}
                    {panic.location.longitude}
                  </li>
                  <li>
                    <a
                      href={`https://www.google.com/maps?q=${panic.location.latitude},${panic.location.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      View on Google Maps
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-6 pt-4">
            <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
            {panic.contacts.length > 0 ? (
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-gray-700">
                  This alert was sent to {panic.contacts.length} contact(s).
                </p>
              </div>
            ) : (
              <p className="text-gray-500">
                No contacts associated with this alert.
              </p>
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
