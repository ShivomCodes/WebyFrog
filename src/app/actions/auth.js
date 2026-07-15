"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAdmin(formData) {
  const user = formData.get("username");
  const pwd = formData.get("password");

  if (user === process.env.ADMIN_USERNAME && pwd === process.env.ADMIN_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set("admin_session", process.env.ADMIN_PASSWORD, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day session
      path: "/",
    });
    redirect("/admin");
  }

  return { error: "Invalid credentials. Access denied." };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/login");
}
