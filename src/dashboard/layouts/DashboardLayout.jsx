import { Outlet } from "react-router-dom";

import Header from "../../components/home/Header";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";

export default function DashboardLayout() {
  return (
    <div dir="rtl" className="min-h-screen bg-(--bg) text-(--text)">
      <Header />

      <main className="flex flex-row gap-12 px-17 pt-4 pb-7">
        {/* Sidebar - RIGHT */}
        <DashboardSidebar />

        {/* Changing page content - LEFT */}
        <section className="flex-1 min-w-0 pt-10.5">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
