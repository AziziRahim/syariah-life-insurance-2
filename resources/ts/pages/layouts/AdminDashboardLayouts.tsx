import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin_dashboard/AdminSidebar";
import TopNavbar from "../../components/admin_dashboard/AdminTopNavbar";
import "../../../css/admin-dashboard.css";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="d-flex vh-100">
      <Sidebar />

      <div className="flex-grow-1 d-flex flex-column">
        <TopNavbar
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
        />

        <main className="flex-grow-1 bg-light p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
