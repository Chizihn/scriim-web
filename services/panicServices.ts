import { Panic } from "@/types/panic";

const API_URL = "https://scriim-api.vercel.app/api"; // Adjust this to your backend URL

export const getAllPanics = async (): Promise<Panic[]> => {
  try {
    const response = await fetch(`${API_URL}/panic`);

    if (!response.ok) {
      throw new Error("Failed to fetch panic alerts");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching panic alerts:", error);
    throw error;
  }
};

export const getPanicById = async (id: string): Promise<Panic> => {
  try {
    const response = await fetch(`${API_URL}/panic/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch panic alert");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error fetching panic alert with ID ${id}:`, error);
    throw error;
  }
};
