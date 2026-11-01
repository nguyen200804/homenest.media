import type { ReactNode } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FooterCTA } from "@/components/layout";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FooterCTA />
      <Footer />
    </>
  );
}