"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PortfolioItem({
  portfolio,
  username,
}: {
  portfolio: { id: string; name: string; slug: string; isPublic: boolean };
  username: string;
}) {
  return (
    <Link
      href={`/${username}/${portfolio.slug}`}
      key={portfolio.id}
      className="block p-4 border rounded-lg bg-card text-card-foreground hover:bg-accent transition-colors"
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{portfolio.name}</h3>
          <p className="text-sm text-muted-foreground">
            /{username}/{portfolio.slug}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              portfolio.isPublic
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            }`}
          >
            {portfolio.isPublic ? "Public" : "Private"}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.preventDefault(); // Prevent the parent <Link> from navigating
              // TODO: Navigate to the edit page for this portfolio
              console.log("Edit button clicked for:", portfolio.id);
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    </Link>
  );
}
