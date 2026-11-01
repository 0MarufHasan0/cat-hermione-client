
"use client";

// ==================== IMPORTS ====================

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import {
  CatIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";

// Utility function for conditional Tailwind classes
import { cn } from "@/lib/utils";

// Shadcn UI Components
import { Button } from "@/components/ui/button";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


// ==================== NAVIGATION LINKS ====================

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Upcoming Events", href: "/upcoming-events" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];


// ==================== ACTIVE ROUTE CHECK ====================

// Check whether the current URL matches the navigation link
function isActive(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname.startsWith(href);
}


// ==================== NAVIGATION LINK STYLES ====================

function linkClasses(active: boolean) {
  return cn(
    "rounded-full px-4 py-2 text-sm font-medium transition-colors",

    active
      ? "bg-primary text-primary-foreground shadow-sm"
      : "text-foreground/80 hover:bg-muted hover:text-foreground"
  );
}


// ==================== THEME TOGGLE ====================

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Switch between Dark Mode and Light Mode
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={handleTheme}
    >
      {/* Sun icon appears in Dark Mode */}
      <SunIcon className="hidden dark:block" />

      {/* Moon icon appears in Light Mode */}
      <MoonIcon className="dark:hidden" />
    </Button>
  );
}


// ==================== NAVBAR COMPONENT ====================

export function Navbar() {
  // Get the current route pathname
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b bg-background">

      {/* Main Navbar Container */}
      <div className="mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8">

        {/* ==================== LEFT: LOGO ==================== */}

        <div className="flex flex-1 items-center">
          <Link href="/" className="flex items-center gap-3">

            {/* Logo Icon */}
            <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <CatIcon className="size-5" />
            </span>

            {/* Website Name and Subtitle */}
            <span className="flex flex-col items-start leading-none">
              <span className="font-heading text-lg font-bold text-foreground">
                Cat Hermione
              </span>

              <span className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                Rescue &amp; Care
              </span>
            </span>

          </Link>
        </div>


        {/* ==================== CENTER: DESKTOP NAVIGATION ==================== */}

        <nav className="hidden items-center gap-1 md:flex">

          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={linkClasses(active)}
              >
                {link.label}
              </Link>
            );
          })}

        </nav>


        {/* ==================== RIGHT: ACTION BUTTONS ==================== */}

        <div className="flex flex-1 items-center justify-end gap-2">

          {/* Dark / Light Theme Toggle */}
          <ThemeToggle />


          {/* Desktop Login Button */}
          <Button
            render={<Link href="/login" />}
            size="lg"
            className="hidden rounded-full px-5 md:inline-flex"
          >
            Log in
          </Button>


          {/* Desktop User Avatar */}
          <Avatar size="lg" className="hidden md:flex">
            <AvatarImage
              src="/avatar.jpg"
              alt="User avatar"
            />

            <AvatarFallback>CH</AvatarFallback>
          </Avatar>


          {/* ==================== MOBILE MENU ==================== */}

          <Sheet>

            {/* Mobile Menu Trigger Button */}
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="md:hidden"
                />
              }
            >
              <MenuIcon />
            </SheetTrigger>


            {/* Mobile Menu Drawer */}
            <SheetContent side="right" className="w-72">

              {/* Mobile Menu Header */}
              <SheetHeader>
                <SheetTitle>Cat Hermione</SheetTitle>
              </SheetHeader>


              {/* Mobile Navigation Links */}
              <nav className="flex flex-col gap-1 px-3">

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
                          linkClasses(active),
                          "block text-left"
                        )}
                      >
                        {link.label}
                      </span>
                    </SheetClose>
                  );
                })}

              </nav>


              {/* Mobile Login Button */}
              <SheetFooter>
                <SheetClose
                  render={<Button className="w-full" />}
                >
                  <Link href="/login">Log in</Link>
                </SheetClose>
              </SheetFooter>

            </SheetContent>

          </Sheet>

        </div>

      </div>
    </header>
  );
}
