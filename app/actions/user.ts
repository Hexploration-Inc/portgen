"use server";

import { auth } from "@/auth";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function setUsername(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Authentication required.");
  }

  const username = formData.get("username") as string;

  // Basic validation
  if (!username || username.length < 3) {
    throw new Error("Username must be at least 3 characters long.");
  }
  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    throw new Error(
      "Username can only contain letters, numbers, and underscores."
    );
  }

  try {
    await prisma.user.update({
      where: { id: session.user.id },
      data: { username: username.toLowerCase() },
    });
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error) {
    // Handle potential unique constraint violation
    return { error: "This username is already taken." };
  }
}
