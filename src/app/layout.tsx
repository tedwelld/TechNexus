import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { CartDrawer } from "@/components/CartDrawer";
import { CartProvider } from "@/components/CartProvider";
import { FloatingComms } from "@/components/FloatingComms";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { TimeThemeProvider } from "@/components/TimeThemeProvider";
import { TimeThemeScript } from "@/components/TimeThemeScript";
import { COMPANY } from "@/lib/site";
import "./globals.css";

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://axentratechsolutions.com"),
  title: {
    default: `${COMPANY.name} | Software · Web · IT`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "Axentra Tech Solutions delivers software, web platforms, and managed IT—with direct WhatsApp and email access to the developers.",
  icons: {
    icon: [{ url: "/images/logo/axentralt.png", type: "image/png" }],
    apple: [{ url: "/images/logo/axentralt.png" }],
    shortcut: ["/images/logo/axentralt.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <TimeThemeScript />
      </head>
      <body className="min-h-full flex flex-col text-foreground">
        <div id="app-shell" className="flex min-h-full flex-1 flex-col">
          <TimeThemeProvider>
            <CartProvider>
              <Header />
              <main className="relative flex-1">{children}</main>
              <Footer />
              <MobileBottomNav />
              <CartDrawer />
              <FloatingComms />
            </CartProvider>
          </TimeThemeProvider>
        </div>
      </body>
    </html>
  );
}
