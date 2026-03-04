import { NavLink } from "react-router-dom";

type Props = {
  collapsed: boolean;
};

const Sidebar = ({ collapsed }: Props) => {
  const menus = [
    { icon: "bi-speedometer2", label: "Dashboard", path: "/user" },
    { icon: "bi-person", label: "Profil", path: "/user/profile" },
    { icon: "bi-calculator", label: "Kalkulator Simulasi", path: "/user/simulation" },
    { icon: "bi-credit-card", label: "Pembayaran", path: "/user/payment" },
    { icon: "bi-file-earmark-text", label: "Ajukan Polis", path: "/user/ajukan-polis" },
    { icon: "bi-file-earmark-arrow-down", label: "Unduh Laporan", path: "/user/report" },
    { icon: "bi-person-gear", label: "Pengaturan Akun", path: "/user/account-settings" },
  ];

  return (
    <aside
      className={`sidebar bg-custom p-3 d-flex flex-column ${
        collapsed ? "collapsed" : ""
      }`}
    >
      <div className="sidebar-logo mb-4 text-center">
        <img
          src="/assets/logo-syariah-life-insurance-transparent.png"
          alt="Syariah Life Insurance"
          className="img-fluid"
        />
      </div>

      <ul className="nav nav-pills flex-column gap-2 flex-grow-1">
        {menus.map((item, i) => (
          <li className="nav-item" key={i}>
            <NavLink
              to={item.path} end
              className={({ isActive }) =>
                `nav-link sidebar-btn ${
                  isActive ? "active" : ""
                }`
              }
            >
              <i className={`bi ${item.icon} sidebar-icon`}></i>
              <span className="sidebar-text">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
