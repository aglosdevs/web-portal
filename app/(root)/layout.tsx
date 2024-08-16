import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import TopBar from "@/components/ui/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Portal",
  description: "E-commerce application for business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TopBar />
          <main className="flex flex-row">
            {/* sidebar */}
            <section className="w-full">
              <div className="container bg-muted/40">{children}</div>
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
