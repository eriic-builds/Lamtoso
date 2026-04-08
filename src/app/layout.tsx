import type { Metadata } from "next";
import "./globals.css";

// Metadata: sets the <title> and <meta description> for SEO
// This appears in browser tabs and search engine results
export const metadata: Metadata = {
  title: "Lamtoso — Demo Lab",
  description: "A personal demo lab for learning Next.js, Git, and 21st.dev components",
};

// RootLayout wraps every page in your app
// Think of it like a template — the children prop is whatever page you're on
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
