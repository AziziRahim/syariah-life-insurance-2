type Props = {
  activeMenu: string;
  onChange: (menu: string) => void;
};

const AccountSidebar = ({ activeMenu, onChange }: Props) => {
  const menus = [
    { key: "profile", label: "Profil Akun", icon: "bi-person" },
    { key: "security", label: "Keamanan", icon: "bi-shield-lock" },
    { key: "notification", label: "Notifikasi", icon: "bi-bell" },
  ];

  return (
    <div className="card shadow-sm">
      <div className="card-body p-2">
        <ul className="nav nav-pills flex-column gap-1">
          {menus.map((menu) => (
            <li key={menu.key} className="nav-item">
              <button
                className={`nav-link w-100 text-start ${
                  activeMenu === menu.key ? "active" : ""
                }`}
                onClick={() => onChange(menu.key)}
              >
                <i className={`bi ${menu.icon} me-2`} />
                {menu.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccountSidebar;
