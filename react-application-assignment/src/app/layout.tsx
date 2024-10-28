import type { Metadata } from "next";

import "./styles.css";

import Nav from '@/app/components/navigation/nav';

export const metadata: Metadata = {
  title: "React Application Assignment",
  description: "React Application Assignment for MFiles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grid grid-rows-[100px_1fr_50px] bg-emerald-50 items-center max-w-5xl m-auto mt-0 lg:mt-5">
        <header className="flex bg-emerald-500 rounded-none pt-5 h-full flex-col items-center justify-between lg:rounded-t">
          <h1>
            MFiles React Application Assignment
          </h1>
          <Nav />
          </header>
      <div className="bg-emerald-300 h-full p-5">
        <div className="bg-white rounded p-5">
            {children}
        </div>
      </div>
      <footer className="flex bg-emerald-500 rounded-none h-full items-end justify-end p-2 lg:rounded-b">
        Verneri Martelin
      </footer>
      </body>
    </html>
  );
}
