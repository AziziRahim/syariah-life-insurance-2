import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menus = [
  { icon: "bi-speedometer2", label: "Dashboard", path: "/admin" },
  { icon: "bi-people", label: "Peserta", path: "/admin/peserta" },
  { icon: "bi-gear", label: "Parameter Maintenance", path: "/admin/parameter-maintenance" },
  { icon: "bi-credit-card", label: "Verifikasi & Pencairan", path: "/admin/verifikasi" },
  { icon: "bi-file-earmark-text", label: "Role & Log Aktivitas Pengguna", path: "/admin/roles-log" },
  { icon: "bi-file-earmark-arrow-down", label: "Unduh Laporan", path: "/admin/laporan" },
  { icon: "bi-person-gear", label: "Pengaturan Akun", path: "/admin/akun" },
];
  return (
    <aside className="sidebar bg-custom p-3 d-flex flex-column">
      <h5 className="fw-bold mb-4 text-center sidebar-title">
        <span className="text-white">ADMIN MANAGER</span>
      </h5>

      <ul className="nav nav-pills flex-column gap-2 flex-grow-1">
        {menus.map((item) => (
          <li className="nav-item" key={item.label}>
            <NavLink
              to={item.path}
              end={item.path === "/admin"} // penting biar dashboard gak selalu active
              className={({ isActive }) =>
                `nav-link sidebar-btn d-flex align-items-start gap-3 ${
                  isActive ? "active" : ""
                }`
              }
            >
              <i className={`bi ${item.icon} sidebar-icon`} />
              <span className="sidebar-text">{item.label}</span>
            </NavLink>
          </li>
        ))}

        <li className="nav-item mt-auto">
          <button className="nav-link sidebar-btn w-100 text-start">
            <i className="bi bi-box-arrow-right sidebar-icon"></i>
            <span className="sidebar-text">Logout</span>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
