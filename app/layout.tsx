import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NightClose – Stop starting from Day 1",
  description: "A habit tracker that never resets your progress. Built for people who are hardest on themselves.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
