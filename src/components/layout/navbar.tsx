
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import {
  Heart,
  Menu,
  Moon,
  Sun,
  Sparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/upcoming-events" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

// Active Route Check
function isActive(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}

// Theme Toggle
function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="hidden size-5 dark:block" />
      <Moon className="size-5 dark:hidden" />
    </Button>
  );
}

// Main Navbar
export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-xl">

      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">

          <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <Heart className="size-6 fill-current" />
          </span>

          <span className="flex flex-col">

            <span className="text-2xl font-extrabold tracking-tight">
              Kindora<span className="text-primary">.</span>
            </span>

            <span className="text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Care • Share • Inspire
            </span>

          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border bg-muted/40 p-1 md:flex">

          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-all",
                  active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-background hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}

        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">

          <ThemeToggle />

          {/* Desktop Sign In */}
          <Button
            render={<Link href="/sign-in" />}
            variant="ghost"
            className="hidden rounded-full sm:inline-flex"
          >
            Sign In
          </Button>

          {/* Desktop Sign Up */}
          <Button
            render={<Link href="/sign-up" />}
            className="hidden rounded-full px-6 sm:inline-flex"
          >
            Get Started
            <Sparkles className="ml-1 size-4" />
          </Button>

          {/* Mobile Menu */}
          <Sheet>

            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Open menu"
                  className="rounded-xl md:hidden"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>

            <SheetContent side="right" className="w-80">

              {/* Mobile Logo */}
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-xl">
                  <Heart className="size-6 fill-primary text-primary" />
                  Kindora
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Navigation */}
              <nav className="mt-8 flex flex-col gap-2 px-4">

                {NAV_LINKS.map((link) => {
                  const active = isActive(pathname, link.href);

                  return (
                    <SheetClose
                      key={link.href}
                      render={<Link href={link.href} />}
                    >
                      <span
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                          active
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {link.label}
                      </span>
                    </SheetClose>
                  );
                })}

              </nav>

              {/* Mobile Auth Buttons */}
              <div className="absolute right-4 bottom-6 left-4 flex flex-col gap-3">

                <SheetClose
                  render={
                    <Button
                      variant="outline"
                      className="w-full rounded-full"
                    />
                  }
                >
                  <Link href="/sign-up">
                    Sign In
                  </Link>
                </SheetClose>

                <SheetClose
                  render={
                    <Button className="w-full rounded-full" />
                  }
                >
                  <Link href="/sign-up">
                    Sign Up
                    <Sparkles className="ml-1 size-4" />
                  </Link>
                </SheetClose>

              </div>

            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
}
