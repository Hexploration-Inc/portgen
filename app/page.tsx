import { auth } from "@/auth";
import { SignInButton } from "@/components/auth/sign-in-button";
import { SignOutButton } from "@/components/auth/sign-out-button";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {session ? (
        <div className="flex flex-col items-center gap-4">
          <p>Welcome, {session.user?.name}!</p>
          <SignOutButton />
        </div>
      ) : (
        <SignInButton />
      )}
    </main>
  );
}
