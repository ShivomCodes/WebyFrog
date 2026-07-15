"use server";

import clientPromise from "@/lib/mongodb";

export async function submitContactBrief(formData) {
  try {
    const { name, email, scope, mission } = formData;

    if (!name || !email || !scope || !mission) {
      return { success: false, error: "Missing required fields." };
    }

    const client = await clientPromise;
    const db = client.db(); // Uses the database named in the connection string

    const collection = db.collection("contacts");

    const result = await collection.insertOne({
      name,
      email,
      scope,
      mission,
      createdAt: new Date()
    });

    if (result.acknowledged) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to insert record into database." };
    }
  } catch (error) {
    console.error("Database error:", error);
    return { success: false, error: "Internal server error." };
  }
}
