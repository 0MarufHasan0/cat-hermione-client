
import {
  CatIcon,
  HeartIcon,
  CameraIcon,
  CodeIcon,
  GlobeIcon,
  MapPinIcon,
  MailIcon,
  PhoneIcon,
  Heart,
} from "lucide-react";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Upcoming Events", href: "/upcoming-events" },
  { label: "Create an Event", href: "/create-event" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const PROGRAMS = [
  { label: "Donation Drives", href: "/upcoming-events" },
  { label: "Food Distribution", href: "/upcoming-events" },
  { label: "Tree Plantation", href: "/upcoming-events" },
  { label: "Community Support", href: "/upcoming-events" },
  { label: "Volunteer Stories", href: "/volunteer-stories" },
];

const SOCIALS = [
  { label: "Community", href: "#", icon: CodeIcon },
  { label: "Website", href: "/", icon: GlobeIcon },
  { label: "Gallery", href: "/gallery", icon: CameraIcon },
];

function LinkColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-bold tracking-wider text-slate-900 dark:text-white">
        {heading}
      </h3>

      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-slate-600 transition-colors duration-200 hover:text-orange-600 dark:text-slate-400 dark:hover:text-orange-400"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      {/* Main Footer */}

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-5 lg:px-10 lg:py-16">
        {/* Brand */}

        <div className="lg:col-span-2">
          <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-md bg-orange-600 text-neutral-950">
            <Heart className="size-5 fill-current" />
          </span>

          <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
            Kindora<span className="text-[#ff3300]">.</span>
          </span>
        </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
            Kindora brings people together through volunteering, donations,
            and meaningful community events. Together, we can spread kindness
            and create a better future for everyone.
          </p>

          {/* Social Links */}

          <div className="mt-6 flex gap-3">
            {SOCIALS.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-orange-500/30 dark:hover:bg-orange-500/10 dark:hover:text-orange-400"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}

        <LinkColumn heading="Quick Links" links={QUICK_LINKS} />

        {/* Programs */}

        <LinkColumn heading="Our Programs" links={PROGRAMS} />

        {/* Contact Information */}

        <div>
          <h3 className="text-sm font-bold tracking-wider text-slate-900 dark:text-white">
            Get in Touch
          </h3>

          <div className="mt-5 space-y-4">
            <div className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-orange-600" />

              <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                Dhaka, Bangladesh
              </p>
            </div>

            <div className="flex items-start gap-3">
              <MailIcon className="mt-0.5 size-4 shrink-0 text-orange-600" />

              <a
                href="mailto:info@kindora.org"
                className="break-all text-sm text-slate-600 transition-colors hover:text-orange-600 dark:text-slate-400 dark:hover:text-orange-400"
              >
                info@kindora.org
              </a>
            </div>

            <div className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 size-4 shrink-0 text-orange-600" />

              <a
                href="/contact"
                className="text-sm text-slate-600 transition-colors hover:text-orange-600 dark:text-slate-400 dark:hover:text-orange-400"
              >
                Contact our team
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}

      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 sm:px-8 md:flex-row lg:px-10">
          <p className="text-center text-xs leading-6 text-slate-500 dark:text-slate-400 sm:text-left">
            © {new Date().getFullYear()} Kindora. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link
              href="/privacy-policy"
              className="text-xs text-slate-500 transition-colors hover:text-orange-600 dark:text-slate-400 dark:hover:text-orange-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-slate-500 transition-colors hover:text-orange-600 dark:text-slate-400 dark:hover:text-orange-400"
            >
              Terms of Service
            </Link>

            <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              Made with
              <HeartIcon className="size-3.5 fill-orange-500 text-orange-500" />
              for our community
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}