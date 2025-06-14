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

export async function createPortfolio(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("You must be logged in to create a portfolio");
  }

  const name = formData.get("name") as string;
  if (!name || name.trim().length === 0) {
    throw new Error("Portfolio name is required");
  }

  const isPublic = formData.get("isPublic") === "on";

  const baseSlug = slugify(name);
  let finalSlug = baseSlug;
  let counter = 1;

  // Loop to find a unique slug for the current user
  while (
    await prisma.portfolio.findUnique({
      where: { userId_slug: { userId: session.user.id, slug: finalSlug } },
    })
  ) {
    finalSlug = `${baseSlug}-${counter}`;
    counter++;
  }

  await prisma.portfolio.create({
    data: {
      name: name.trim(),
      slug: finalSlug,
      isPublic: isPublic,
      userId: session.user.id,
    },
  });

  // Revalidate the dashboard path to show the new portfolio immediately
  revalidatePath("/dashboard");
}
