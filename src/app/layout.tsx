import "./globals.css";
import { Onest } from 'next/font/google'
import {Header} from "@/app/components/Header";
import React from "react";
const onest = Onest({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <title>Task</title>
    </head>
      <body className={onest.className}>
      <Header/>
      {children}
      </body>
    </html>
  );
}
