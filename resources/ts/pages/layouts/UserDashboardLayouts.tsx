import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./../../components/user_dashboard/Sidebar";
import TopNavbar from "./../../components/user_dashboard/UserNavbar";
import "../../../css/dashboard.css";

const DashboardLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="d-flex vh-100">
            <Sidebar collapsed={collapsed} />

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
