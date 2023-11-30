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
  description:
    "This is a fully responsive portfolio web/app built with Next.js 13. It showcases my current skills and projects.",
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
