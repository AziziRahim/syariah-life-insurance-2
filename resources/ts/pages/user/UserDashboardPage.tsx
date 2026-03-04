import React from "react";
import SummaryCards from "../../components/user_dashboard/SummaryCard.tsx";
import UsageChartPlaceholder from "../../components/user_dashboard/UsageChartPlaceholder.tsx";
import ActivityHistory from "../../components/user_dashboard/ActivityHistory.tsx";

const UserDashboardPage = () => {
  return (
      <>
          <h1 className="fw-bold mb-3">Dashboard</h1>
          <p className="mb-4">
              Selamat datang kembali, ini adalah rekapan pada akunmu.
          </p>

          <SummaryCards />
          <UsageChartPlaceholder />
          <ActivityHistory />
      </>
  );
};

export default UserDashboardPage;
