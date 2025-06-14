import { auth } from "@/auth";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { createPortfolio } from "@/app/actions/portfolio";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SetUsernameForm } from "@/components/auth/set-username-form";
import { Switch } from "@/components/ui/switch";
import { PortfolioItem } from "@/components/dashboard/portfolio-item";

export default async function DashboardPage() {
  const session = await auth();

  // Protect the route
  if (!session?.user?.id || !session.user.email) {
    redirect("/");
  }

  // If user has no username, force them to set one.
  if (!session.user.username) {
    return (
      <main className="container py-12">
        <SetUsernameForm initialEmailName={session.user.email} />
      </main>
    );
  }

  const portfolios = await prisma.portfolio.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      id: "desc", // Show newest first
    },
  });

  return (
    <main className="container py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold tracking-tighter">Dashboard</h1>
        <p className="text-muted-foreground">
          Signed in as {session.user.username}
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Create a New Portfolio</h2>
        <form action={createPortfolio} className="max-w-md flex flex-col gap-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Portfolio Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="e.g., My Software Projects"
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="isPublic" name="isPublic" />
            <Label htmlFor="isPublic">Make portfolio public</Label>
          </div>
          <Button type="submit" className="self-start">
            Create
          </Button>
        </form>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Your Portfolios</h2>
        <div className="grid gap-4">
          {portfolios.length > 0 ? (
            portfolios.map((p) => (
              <PortfolioItem
                key={p.id}
                portfolio={p}
                username={session.user.username!}
              />
            ))
          ) : (
            <div className="p-6 border-2 border-dashed rounded-lg text-center">
              <h3 className="text-lg font-medium">No Portfolios Yet</h3>
              <p className="text-muted-foreground mt-1">
                Use the form above to create your first one.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
