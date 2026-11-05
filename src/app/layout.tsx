import type { Metadata, Viewport } from "next";
import { DM_Sans, Geist_Mono, Lora } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";
 import { ToastContainer} from 'react-toastify';

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.BETTER_AUTH_URL?.replace(/\/+$/, "") ||
  "https://kindora-fronted.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kindora — Community Events & Volunteering",
    template: "%s | Kindora",
  },
  description:
    "Kindora is a community event platform to discover, create, and join volunteering, donation, and charity events near you.",
  applicationName: "Kindora",
  keywords: [
    "Kindora",
    "community events",
    "volunteering",
    "donation",
    "charity",
    "event management",
    "Bangladesh",
  ],
  authors: [{ name: "Md. Maruf Hasan", url: "https://github.com/0MarufHasan0" }],
  creator: "Md. Maruf Hasan",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Kindora",
    title: "Kindora — Community Events & Volunteering",
    description:
      "Discover meaningful community events, volunteer together, and create a better tomorrow with Kindora.",
    images: [{ url: "/hero1.jpg", width: 1200, height: 630, alt: "Kindora community volunteers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kindora — Community Events & Volunteering",
    description:
      "Discover meaningful community events, volunteer together, and create a better tomorrow with Kindora.",
    images: ["/hero1.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f97316",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${lora.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <ToastContainer />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </ThemeProvider>
      </body> 
    </html>
  );
}
