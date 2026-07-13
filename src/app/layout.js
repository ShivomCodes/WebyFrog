import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./components/TransitionProvider";

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "WEBYFROG | Digital Brutality",
  description:
    "Webyfrog is a precision-engineered digital agency. We build high-performance systems for brands that value impact over aesthetics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${montserrat.variable} ${jetbrainsMono.variable} bg-background text-on-background overflow-x-hidden`}
      >
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
