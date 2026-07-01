import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Visit Andymore Business Concept at Ojodu Berger, Lagos or reach us via WhatsApp, phone, or email. We're open Monday–Saturday, 8 AM–6 PM.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
