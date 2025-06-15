import { auth } from "@/auth";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

type PortfolioPageProps = {
  params: {
    username: string;
    slug: string;
  };
};

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const session = await auth();

  const portfolio = await prisma.portfolio.findFirst({
    where: {
      slug: (await params).slug,
      user: {
        username: (await params).username,
      },
    },
    include: {
      user: true, // Also fetch the user data
    },
  });

  // If no portfolio is found, return a 404 page
  if (!portfolio) {
    notFound();
  }

  // Check for access control
  const isOwner = session?.user?.id === portfolio.userId;
  if (!portfolio.isPublic && !isOwner) {
    notFound(); // Treat private portfolios as not found for non-owners
  }

  return (
    <main className="container py-12">
      <h1 className="text-5xl font-extrabold tracking-tighter mb-2">
        {portfolio.name}
      </h1>
      <p className="text-lg text-muted-foreground">
        A portfolio by{" "}
        <span className="font-semibold text-foreground">
          {portfolio.user.name} (@{portfolio.user.username})
        </span>
      </p>

      <div className="mt-8 p-8 border rounded-lg bg-card">
        <p className="text-muted-foreground"></p>
      </div>
    </main>
  );
}
