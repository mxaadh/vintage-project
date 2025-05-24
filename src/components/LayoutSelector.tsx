"use client";

import { usePathname } from "next/navigation";
import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderTop />
      <HeaderMain />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default function LayoutSelector({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return isAdminRoute ? (
    <AdminLayout>{children}</AdminLayout>
  ) : (
    <AppLayout>{children}</AppLayout>
  );
}
