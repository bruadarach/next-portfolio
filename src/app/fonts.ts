import {
  Inter,
  Open_Sans,
  Roboto_Mono,
  Rubik_Mono_One,
  Archivo_Black,
  Nunito_Sans,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const rubikMonoOne = Rubik_Mono_One({
  subsets: ["latin"],
  variable: "--font-rubik-mono-one",
  display: "swap",
  weight: "400",
});

export const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
  weight: "400",
});

export const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});
