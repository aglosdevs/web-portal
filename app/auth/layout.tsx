import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import TopBar from "@/components/ui/TopBar";
import Sidebar from "@/components/ui/Sidebar";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Portal",
  description: "E-commerce Login",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
