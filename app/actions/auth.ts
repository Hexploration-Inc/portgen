"use server";

import { signIn, signOut } from "@/auth";

export async function doSignIn(formData: FormData) {
  const provider = formData.get("provider") as string;
  if (provider) {
    await signIn(provider, {
      redirectTo: "/",
    });
  }
}

export async function doSignOut() {
  await signOut();
}
