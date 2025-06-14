import { auth } from "@/auth";
import { SignInForm } from "@/components/auth/sign-in-form";
import { SignOutButton } from "@/components/auth/sign-out-button";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {session ? (
        <div className="flex flex-col items-center gap-4">
          <p>Welcome, {session.user?.name || session.user?.email}!</p>
          <SignOutButton />
        </div>
      ) : (
        <SignInForm />
      )}
    </main>
  );
}
