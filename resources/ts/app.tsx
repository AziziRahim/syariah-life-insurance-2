import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/app.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotificationProvider } from "../ts/components/notifications";
import ScrollToHash from "../ts/components/Helper.tsx";

import PublicLayout from "./pages/layouts/PublicLayouts.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import PricingPage from "./pages/PricingPage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import RegistrationAccount from "./pages/RegistrationAccount.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.tsx"
import PrivateLayout from "./pages/layouts/PrivateLayouts.tsx";
import AdminDashboardLayout from "./pages/layouts/AdminDashboardLayouts.tsx";
import AdminDashboardHome from "./pages/admin/AdminDashboardPage.tsx";
import AdminParameterMaintenance from "./pages/admin/ParameterMaintenance.tsx";

import UserDashboardLayouts from "./pages/layouts/UserDashboardLayouts.tsx";
import UserDashboardPage from "./pages/user/UserDashboardPage.tsx";
import UserProfilePage from "./pages/user/UserProfilePage.tsx";
import CalculatorSimulatorUserPage from "./pages/user/CalculatorSimulatorUserPage.tsx"

// Billing
import BillingPaymentPage from "./pages/user/billing/BillingPaymentPage.tsx";
import BillingConfirmPage from "./pages/user/billing/BillingConfirmPage.tsx";
import BillingSubmitPage from "./pages/user/billing/BillingSubmitPage.tsx";
import BillingResultPage from "./pages/user/billing/BillingSummaryResult.tsx";

//Polis
import AjukanPolisPage from "./pages/user/policy/AjukanPolisPage.tsx";
//Download report user
import DownloadReportUserPage from "./pages/user/DownloadReportUserPage.tsx";

import Page404 from './pages/err/404Page.tsx'
import AccountSettingsPage from "./pages/user/AccountSettingsPage.tsx";
import ConfirmPolisPage from "./pages/user/policy/ConfirmPolisPage.tsx";
import SubmitPolisPage from "./pages/user/policy/SubmitPolisPage.tsx";


const App = () => (
    <NotificationProvider>
        <ScrollToHash />
        <Routes>
            <Route element={<PublicLayout />}>
                <Route index element={<LandingPage />} />
                <Route
                    path="register-account"
                    element={<RegistrationAccount />}
                />
                <Route path="pricing" element={<PricingPage />} />
                <Route path="product" element={<ProductPage />} />
                <Route path="login" element={<LoginPage/>}/>
                <Route path="forgot-password" element={<ForgotPasswordPage/>}/>
            </Route>

            <Route element={<PrivateLayout />}>
                <Route path="user" element={<UserDashboardLayouts />}>
                    <Route index element={<UserDashboardPage />} />
                    <Route path="profile" element={<UserProfilePage />} />
                    <Route path="simulation" element={<CalculatorSimulatorUserPage />} />
                    <Route path="payment">
                      <Route index element={<BillingPaymentPage />} />
                      <Route path="confirm" element={<BillingConfirmPage />} />
                      <Route path="submit" element={<BillingSubmitPage />} />
                      <Route path="result" element={<BillingResultPage />} />
                    </Route>
                    <Route path="ajukan-polis" element={<AjukanPolisPage />} />
                    <Route path="polis/confirm" element={<ConfirmPolisPage/>} />
                    <Route path="polis/submit" element={<SubmitPolisPage/>}/>
                    <Route path="report" element={<DownloadReportUserPage />} />
                    <Route path="account-settings" element={<AccountSettingsPage />} />
                </Route>
                <Route path="admin" element={<AdminDashboardLayout />}>
                    <Route index element={<AdminDashboardHome />} />
                    <Route path="parameter-maintenance" element={<AdminParameterMaintenance />} />
                </Route>
            </Route>

            <Route path="*" element={<Page404 />} />
        </Routes>
    </NotificationProvider>
);

const container = document.getElementById("app");

if (container) {
    createRoot(container).render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
}
