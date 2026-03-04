import { useState } from "react";
import AccountSidebar from "../user/account_settings/AccountSidebar";
import ProfileSettings from "../user/account_settings/ProfileSettings";
import SecuritySettings from "../user/account_settings/SecuritySettings";
import NotificationSettings from "../user/account_settings/NotificationSettings";

const AccountSettingsPage = () => {
  const [activeMenu, setActiveMenu] = useState("profile");

  const renderContent = () => {
    switch (activeMenu) {
      case "security":
        return <SecuritySettings />;
      case "notification":
        return <NotificationSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="container-fluid py-4 bg-light min-vh-100">
      <div className="row">
        <div className="col-md-3 col-lg-2">
          <AccountSidebar
            activeMenu={activeMenu}
            onChange={setActiveMenu}
          />
        </div>

        <div className="col-md-9 col-lg-10">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
