"use server";

import { auth } from "@/auth";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

export async function createPortfolio(
  prevState: any,
  formData: FormData
): Promise<{ error?: string; success?: boolean; message?: string }> {
  const session = await auth();
  if (!session?.user?.id) {
    return { error: "You must be logged in to create a portfolio." };
  }

  const name = formData.get("name") as string;
  if (!name || name.trim().length === 0) {
    return { error: "Portfolio name is required." };
  }

  const isPublic = formData.get("isPublic") === "on";
  const slug = slugify(name);

  // Check if a portfolio with this slug already exists for the current user
  const existingPortfolio = await prisma.portfolio.findUnique({
    where: { userId_slug: { userId: session.user.id, slug: slug } },
  });

  if (existingPortfolio) {
    return {
      error:
        "You already have a portfolio with this name. Please choose another.",
    };
  }

  await prisma.portfolio.create({
    data: {
      name: name.trim(),
      slug: slug,
      isPublic: isPublic,
      userId: session.user.id,
    },
  });

  revalidatePath("/dashboard");
  return { success: true, message: "Portfolio created successfully!" };
}
