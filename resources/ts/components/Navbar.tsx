import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../css/navbar.css";

import LoginPopUpPage from "../pages/LoginPopUpPage.tsx";

type SectionKey = "partners" | "services" | "pricing" | "about";

type NavItem =
  | { label: string; section: SectionKey }
  | { label: string; path: string };

const navItems: NavItem[] = [
  { label: "Mitra Kami", section: "partners" },
  { label: "Produk", path: "/product" },
  { label: "Ilustrasi Kontribusi", path: "/pricing" },
  { label: "Tentang Kita", section: "about" },
];

const Navbar = () => {
  const location = useLocation();
  const authRoutes = ["/login", "/forgot-password", "/register-account"];
  const isAuthPage = authRoutes.includes(location.pathname);

  const [showLogin, setShowLogin] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container position-relative">
        <Link
          to="/"
          className="navbar-brand fw-bold position-absolute start-0"
        >
          Syariah Life Insurance
        </Link>

        <ul className="navbar-nav ms-auto gap-4 text-uppercase fw-semibold align-items-center">
          {navItems.map((item) => (
            <li key={item.label} className="nav-item">
              {"section" in item ? (
                <Link
                  to="/"
                  state={{ scrollTo: item.section }}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              ) : (
                <Link to={item.path} className="nav-link">
                  {item.label}
                </Link>
              )}
            </li>
          ))}

          {!isAuthPage && (
            <li className="nav-item">
              <button
                className="btn btn-primary rounded-5 px-4"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </div>

      {!isAuthPage && (
        <LoginPopUpPage
          show={showLogin}
          onClose={() => setShowLogin(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
