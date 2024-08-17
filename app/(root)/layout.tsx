import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import TopBar from "@/components/ui/TopBar";
import Sidebar from "@/components/ui/Sidebar";

const nunito = Nunito({ subsets: ["latin"] });

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
      <body className={nunito.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TopBar />
          <main className="flex flex-row">
            {/* sidebar */}
            <Sidebar />
            <section className="w-full">
              <div className="container bg-muted/40">{children}</div>
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
