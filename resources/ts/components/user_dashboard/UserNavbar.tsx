import { useNavigate } from "react-router-dom";
import { logout } from "../../api/auth.service.ts";

type Props = {
    collapsed: boolean;
    onToggle: () => void;
};

const TopNavbar = ({ onToggle }: Props) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
    };

    return (
        <nav className="navbar bg-white border-bottom px-3">
            <div className="ms-auto d-flex align-items-center gap-3">
                <button className="btn position-relative">
                    <i className="bi bi-bell fs-5"></i>
                    <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
            2
          </span>
                </button>

                <div className="dropdown">
                    <button
                        className="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                    >
                        <i className="bi bi-person-circle fs-5"></i>
                    </button>

                    <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                            <button className="dropdown-item">
                                Profile
                            </button>
                        </li>

                        <li>
                            <button
                                className="dropdown-item text-danger"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default TopNavbar;
