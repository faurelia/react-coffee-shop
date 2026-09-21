import { Analytics } from "@vercel/analytics/react";
import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  const location = useLocation();

  return (
    <>
      <Header key={location.key} />

      <main>
        <Outlet />
      </main>

      <Footer />

      <Analytics />
    </>
  );
}
