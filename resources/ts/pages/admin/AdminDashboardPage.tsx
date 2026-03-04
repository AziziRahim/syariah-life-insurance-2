import KpiCards from "../../components/admin_dashboard/KpiCards";
import UserLoginChart from "../../components/admin_dashboard/UserLoginChart";
import PaymentStatusChart from "../../components/admin_dashboard/PaymentStatusChart";
import InvoiceBarChart from "../../components/admin_dashboard/InvoiceBarChart";
import RecentPaymentTable from "../../components/admin_dashboard/RecentPaymentTable";

const AdminDashboardPage = () => {
    return (
        <>
            <h4 className="mb-4">Dashboard</h4>

            <KpiCards />

            <div className="row g-4 mb-4">
                <div className="col-lg-8">
                    <UserLoginChart />
                </div>
                <div className="col-lg-4">
                    <PaymentStatusChart />
                </div>
            </div>

            <div className="row g-4">
                <div className="col-lg-6">
                    <InvoiceBarChart />
                </div>
                <div className="col-lg-6">
                    <RecentPaymentTable />
                </div>
            </div>
        </>
    );
};

export default AdminDashboardPage;