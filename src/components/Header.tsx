"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plus, Tv } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Top 5" },
    { href: "/series", label: "All Series" },
  ];

  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <Tv className="h-6 w-6" />
          <span className="font-headline">Bernie's Series</span>
        </Link>
        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                pathname === link.href && "text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/series/add">
            <Button variant="ghost" size="icon">
              <Plus className="h-5 w-5" />
              <span className="sr-only">Add Series</span>
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
