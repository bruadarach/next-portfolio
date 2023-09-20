import "./globals.css";
import type { Metadata } from "next";
import {
  inter,
  openSans,
  robotoMono,
  rubikMonoOne,
  archivoBlack,
  nunitoSans,
} from "./fonts";

export const metadata: Metadata = {
  title: "Sujeong Ji",
  description: "Portfolio built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${openSans.variable} ${robotoMono.variable} ${rubikMonoOne.variable} ${archivoBlack.variable} ${nunitoSans.variable}`}
      >
        <div className="container">
          <div className="wrapper">{children}</div>
        </div>
      </body>
    </html>
  );
}
