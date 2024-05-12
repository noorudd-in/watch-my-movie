import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToggleTheme } from "@/components/ToggleTheme";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie Memo",
  description: "Share your own opinion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className="flex justify-between m-5">
            <h1 className="text-red-600 text-2xl font-bold mt-1">Movie Memo</h1>
            <ToggleTheme />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}