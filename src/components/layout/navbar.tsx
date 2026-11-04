
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

import {
  Heart,
  Menu,
  Moon,
  Sun,
  Sparkles,
  LogOut,
  ArrowRight,
  CalendarPlus,
  ClipboardList,
  CalendarDays,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Upcoming Events", href: "/upcoming-events" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const PROFILE_LINKS = [
  {
    label: "Create Event",
    href: "/create-event",
    icon: CalendarPlus,
  },
  {
    label: "Manage Events",
    href: "/my-event",
    icon: ClipboardList,
  },
  {
    label: "Joined Events",
    href: "/join-event",
    icon: CalendarDays,
  },
];

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
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="size-9 rounded-full text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-orange-400"
    >
      <Sun className="hidden size-4 dark:block" />
      <Moon className="size-4 dark:hidden" />
    </Button>
  );
}

// Profile Dropdown
function ProfileMenu({
  user,
  handleLogout,
}: {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  handleLogout: () => Promise<void>;
}) {
  const pathname = usePathname();

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="ghost"
            aria-label="Open profile menu"
            className="flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-2 transition-all hover:border-orange-300 hover:bg-orange-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
          />
        }
      >
        <Avatar className="size-8 border-2 border-orange-200">
          <AvatarImage
            src={user.image || ""}
            alt={user.name || "User"}
          />
          <AvatarFallback className="bg-orange-100 font-semibold text-orange-700">
            {user.name?.charAt(0)?.toUpperCase() || "U"}
          </AvatarFallback>
        </Avatar>

        <span className="hidden max-w-28 truncate text-sm font-semibold text-slate-800 dark:text-slate-100 sm:block">
          {user.name}
        </span>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        className="w-72 rounded-2xl border border-slate-200 bg-white p-3 text-slate-900 shadow-xl dark:border-slate-700 dark:bg-slate-950 dark:text-white"
      >
        {/* Profile Info */}
        <PopoverHeader className="p-2">
          <PopoverDescription className="flex items-center gap-3">
            <Avatar className="size-11 border-2 border-orange-200">
              <AvatarImage
                src={user.image || ""}
                alt={user.name || "User"}
              />
              <AvatarFallback className="bg-orange-100 font-bold text-orange-700">
                {user.name?.charAt(0)?.toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>

            <div className="flex min-w-0 flex-col gap-1">
              <span className="truncate text-sm font-bold text-slate-900 dark:text-white">
                {user.name}
              </span>

              <span className="break-all text-xs text-slate-500 dark:text-slate-400">
                {user.email}
              </span>
            </div>
          </PopoverDescription>
        </PopoverHeader>

        <div className="my-3 h-px bg-slate-200 dark:bg-slate-800" />

        {/* Profile Navigation */}
        <div className="flex flex-col gap-1">
          {PROFILE_LINKS.map((item) => {
            const active = isActive(pathname, item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                  active
                    ? "bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-400"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                )}
              >
                <span className="flex items-center gap-3">
                  <Icon
                    className={cn(
                      "size-4 transition-colors",
                      active
                        ? "text-orange-600 dark:text-orange-400"
                        : "text-slate-400 group-hover:text-orange-600"
                    )}
                  />
                  {item.label}
                </span>

                {active && (
                  <ChevronRight className="size-4 text-orange-600 dark:text-orange-400" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="my-3 h-px bg-slate-200 dark:bg-slate-800" />

        {/* Logout */}
        <Button
          variant="ghost"
          onClick={handleLogout}
          className="h-10 w-full justify-start rounded-xl px-3 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-950/40"
        >
          <LogOut className="mr-3 size-4" />
          Logout
        </Button>
      </PopoverContent>
    </Popover>
  );
}

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      console.error(error.message);
      toast.error("Failed to log out. Please try again.");
      return;
    }

    toast.success("Logged out successfully.");
    router.push("/sign-in");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-orange-600 text-white">
            <Heart className="size-5 fill-current" />
          </span>

          <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
            Kindora<span className="text-orange-600">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition-all xl:px-4",
                  active
                    ? "bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-400"
                    : "text-slate-600 hover:bg-slate-100 hover:text-orange-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-orange-400"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />

          {!isPending &&
            (user ? (
              <ProfileMenu
                user={user}
                handleLogout={handleLogout}
              />
            ) : (
              <Button
                render={<Link href="/sign-in" />}
                variant="ghost"
                className="rounded-full text-slate-800 hover:bg-orange-50 hover:text-orange-600 dark:text-white dark:hover:bg-slate-800"
              >
                Login
              </Button>
            ))}

          <Button
            render={<Link href="/upcoming-events" />}
            className="rounded-full bg-orange-600 px-5 font-semibold text-white shadow-sm transition-colors hover:bg-orange-700"
          >
            Explore Events
            <ArrowRight className="ml-1 size-4" />
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />

          {!isPending && user && (
            <ProfileMenu
              user={user}
              handleLogout={handleLogout}
            />
          )}

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                  className="rounded-full text-slate-800 hover:bg-orange-50 hover:text-orange-600 dark:text-white dark:hover:bg-slate-800"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] border-slate-200 bg-white text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-white sm:w-[350px]"
            >
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-left text-xl text-slate-900 dark:text-white">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-orange-600 text-white">
                    <Heart className="size-5 fill-current" />
                  </span>
                  Kindora<span className="text-orange-600">.</span>
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
                      className={cn(
                        "rounded-xl px-4 py-3 text-sm font-medium transition-all",
                        active
                          ? "bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-400"
                          : "text-slate-600 hover:bg-slate-100 hover:text-orange-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-orange-400"
                      )}
                    >
                      {link.label}
                    </SheetClose>
                  );
                })}
              </nav>

              {/* Mobile User Actions */}
              <div className="absolute right-6 bottom-6 left-6 flex flex-col gap-3">
                {!isPending &&
                  (user ? (
                    <>
                      {/* Mobile Profile Info */}
                      <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
                        <Avatar className="size-10 border-2 border-orange-200">
                          <AvatarImage
                            src={user.image || ""}
                            alt={user.name || "User"}
                          />
                          <AvatarFallback className="bg-orange-100 font-semibold text-orange-700">
                            {user.name?.charAt(0)?.toUpperCase() || "U"}
                          </AvatarFallback>
                        </Avatar>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold">
                            {user.name}
                          </p>

                          <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                            {user.email}
                          </p>
                        </div>
                      </div>

                      {/* Mobile Profile Links */}
                      {PROFILE_LINKS.map((item) => {
                        const active = isActive(pathname, item.href);
                        const Icon = item.icon;

                        return (
                          <SheetClose
                            key={item.href}
                            render={<Link href={item.href} />}
                            className={cn(
                              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                              active
                                ? "bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-400"
                                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                            )}
                          >
                            <Icon className="size-4" />
                            {item.label}
                            {active && (
                              <ChevronRight className="ml-auto size-4" />
                            )}
                          </SheetClose>
                        );
                      })}

                      <Button
                        variant="outline"
                        onClick={handleLogout}
                        className="w-full rounded-xl border-red-200 bg-white text-red-600 hover:bg-red-50 hover:text-red-700 dark:border-red-900 dark:bg-slate-950 dark:hover:bg-red-950"
                      >
                        <LogOut className="mr-2 size-4" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <SheetClose
                        render={<Link href="/sign-in" />}
                        className="flex h-10 items-center justify-center rounded-xl border border-slate-200 text-sm font-medium transition-colors hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-800"
                      >
                        Login
                      </SheetClose>

                      <SheetClose
                        render={<Link href="/sign-up" />}
                        className="flex h-10 items-center justify-center gap-2 rounded-xl bg-orange-600 text-sm font-semibold text-white transition-colors hover:bg-orange-700"
                      >
                        Get Started
                        <Sparkles className="size-4" />
                      </SheetClose>
                    </>
                  ))}

                <SheetClose
                  render={<Link href="/upcoming-events" />}
                  className="flex h-10 items-center justify-center gap-2 rounded-xl bg-orange-600 text-sm font-semibold text-white transition-colors hover:bg-orange-700"
                >
                  Explore Events
                  <ArrowRight className="size-4" />
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
