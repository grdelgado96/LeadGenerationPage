import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import { ModalProvider } from "@/store/ModalProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auguri",
  description: "Events Decor and Photography",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ModalProvider>
          <Header />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
