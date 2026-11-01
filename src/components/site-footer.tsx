import {
  CameraIcon,
  CatIcon,
  CodeIcon,
  GlobeIcon,
} from "lucide-react";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Volunteer Sign-up", href: "/create-event" },
  { label: "Support Our Care", href: "/upcoming-events" },
  { label: "Frequently Asked Questions", href: "#" },
];

const PROGRAMS = [
  { label: "Upcoming Events", href: "/upcoming-events" },
  { label: "About Us", href: "#" },
  { label: "Shelter Gallery", href: "#" },
  { label: "Annual Impact", href: "#" },
];

// Note: lucide-react 12.x removed brand icons (Facebook/Instagram/Twitter),
// so placeholder generic icons are used until real brand SVGs are added.
const SOCIALS = [
  { label: "Community", href: "#", icon: CodeIcon },
  { label: "Website", href: "#", icon: GlobeIcon },
  { label: "Photos", href: "#", icon: CameraIcon },
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
      <h3 className="font-heading text-sm font-bold tracking-[0.1em] text-primary-foreground uppercase">
        {heading}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
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
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary-foreground text-primary">
              <CatIcon className="size-5" />
            </span>
            <span className="font-heading text-lg font-bold">Cat Hermione</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            Dedicated to compassionate feline rescue, community stewardship, and
            volunteer enrichment. Together we foster safer environments, healing
            spaces, and forever companionship.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex size-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <social.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <LinkColumn heading="Quick Links" links={QUICK_LINKS} />
        <LinkColumn heading="Programs" links={PROGRAMS} />

        {/* Get in touch */}
        <div>
          <h3 className="font-heading text-sm font-bold tracking-[0.1em] text-primary-foreground uppercase">
            Get in Touch
          </h3>
          <address className="mt-4 space-y-2.5 text-sm text-primary-foreground/70 not-italic">
            <p>124 Whispering Oak Sanctuary</p>
            <p>Portland, OR 97201</p>
            <p>
              <a
                href="mailto:volunteers@cathermione.org"
                className="transition-colors hover:text-primary-foreground"
              >
                volunteers@cathermione.org
              </a>
            </p>
            <p>
              <a
                href="tel:+15552284376"
                className="font-bold transition-colors hover:text-primary-foreground"
              >
                (555) CAT-HERM
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Cat Hermione Nonprofit Volunteering
            Foundation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-primary-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-primary-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="transition-colors hover:text-primary-foreground">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
